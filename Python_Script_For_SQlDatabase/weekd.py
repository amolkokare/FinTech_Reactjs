
import pyodbc
import pandas as pd
import pandas as pd
import pymongo
import os
import pandas as pd
import  glob
import zipfile
import json
import shutil
import pathlib
import numpy
from  pathlib import Path

import pyodbc
print(pyodbc.drivers())
conn=pyodbc.connect(Trusted_Connection="Yes",
                    Driver='ODBC Driver 17 for SQL Server',
                    Server='DESKTOP-B3UPRGM',
                    Database='NSEDATA'

                    )
cursor=conn.cursor()
Symbol= pd.read_sql(""" SELECT DISTINCT  SYMBOL FROM DAILYBHAVCOPY ORDER BY SYMBOL ASC """,conn)




for index,sym in Symbol.itertuples():

 data=pd.read_sql(f""" SELECT * FROM DAIlYBHAVCOPY WHERE SYMBOL='{sym}'""",conn)

 for row in data:
     data['WEEKHIGH'] = data['CLOSE1'].rolling(260).max()
     data['WEEKLOW'] = data['CLOSE1'].rolling(260).min()
     high_52Week = data['WEEKHIGH'].max()

     data["Away_52WeekHigh"] = (1 - (data["CLOSE1"]) / high_52Week) * 100

     low_52Week = data['WEEKLOW'].min()

     data["Away_52WeekLow"] = (data["CLOSE1"] / low_52Week - 1) * 100
     smadata = (data[['SYMBOL', 'CLOSE1', 'TIMESTAMP1','WEEKHIGH', 'WEEKLOW','Away_52WeekHigh','Away_52WeekLow']])

     df = pd.DataFrame(smadata)
     smadata.to_csv("testdata111555121.csv")
     print(df)

     columns = ['SYMBOL', 'CLOSE1', 'TIMESTAMP1','WEEKHIGH', 'WEEKLOW','Away_52WeekHigh','Away_52WeekLow']

     df_data = df[columns]
     df_data = df_data.fillna(value=0)

     records = df_data.values.tolist()

     sql_insert = '''INSERT INTO NSEDATA.dbo.HIGH_LOW_52_Week_Data(SYMBOL,CLOSE1,TIMESTAMP1,WEEKHIGH, WEEKLOW,Away_52WeekHigh,Away_52WeekLow)VALUES(?,?,?,?,?,?,?)'''

     cursor = conn.cursor()
     cursor.executemany(sql_insert, records)
     cursor.commit()

