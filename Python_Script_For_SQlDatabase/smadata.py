import pyodbc
import pandas as pd
import pandas as pd
import pymongo
import os
import pandas as pd
import glob
import zipfile
import json
import shutil
import pathlib
import numpy
from pathlib import Path

import pyodbc

print(pyodbc.drivers())
conn = pyodbc.connect(Trusted_Connection="Yes",
                      Driver='ODBC Driver 17 for SQL Server',
                      Server='DESKTOP-B3UPRGM',
                      Database='NSEDATA'

                      )
cursor = conn.cursor()
Symbol = pd.read_sql(""" SELECT DISTINCT  SYMBOL FROM DAILYBHAVCOPY ORDER BY SYMBOL ASC """, conn)

for index, sym in Symbol.itertuples():

    data = pd.read_sql(f""" SELECT * FROM DAIlYBHAVCOPY WHERE SYMBOL='{sym}'""", conn)

    for row in data:
        data['sma05'] = data['CLOSE1'].rolling(window=5).mean()
        data['sma10'] = data['CLOSE1'].rolling(window=10).mean()

        data['sma20'] = data['CLOSE1'].rolling(window=20).mean()
        data['sma50'] = data['CLOSE1'].rolling(window=50).mean()
        data['sma200'] = data['CLOSE1'].rolling(window=200).mean()
        data['WEEKHIGH'] = data['CLOSE1'].rolling(260).max()
        data['WEEKLOW'] = data['CLOSE1'].rolling(260).min()
        data['Avg_Vol_20day'] = data['TOTTRDQTY'].rolling(window=20).mean()
        data['Relative_Volume'] = data['TOTTRDQTY'] / data['Avg_Vol_20day']
        high_52Week = data['WEEKHIGH'].max()

        data["Away_52WeekHigh"] = (1 - (data["CLOSE1"]) / high_52Week) * 100

        low_52Week = data['WEEKLOW'].min()

        data["Away_52WeekLow"] = (data["CLOSE1"] / low_52Week - 1) * 100

        data['Avg_Price_5days'] = data['CLOSE1'].pct_change(periods=5)
        data['Percentage_change'] = data['CLOSE1'].pct_change()

        smadata = (data[['SYMBOL', 'TIMESTAMP1', 'CLOSE1', 'sma05', 'sma10', 'sma20', 'sma50', 'sma200']])

        df = pd.DataFrame(smadata)
        smadata.to_csv("testdata1115551.csv")
        print(df)

        columns = ['SYMBOL', 'CLOSE1', 'TIMESTAMP1', 'sma05', 'sma10', 'sma20', 'sma50', 'sma200']

        df_data = df[columns]
        df_data = df_data.fillna(value=0)

        records = df_data.values.tolist()

        sql_insert = '''INSERT INTO NSEDATA.dbo.SMADATAANAYLYSIS(SYMBOL,CLOSE1,TIMESTAMP1,sma05,sma10,sma20,sma50,sma200)VALUES(?,?,?,?,?,?,?,?)'''

        cursor = conn.cursor()
        cursor.executemany(sql_insert, records)
        cursor.commit()
