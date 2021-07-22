




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
     data['Percentage_change'] = data['CLOSE1'].pct_change()
     data['Avg_Price_5days'] = data['CLOSE1'].pct_change(periods=5)
     data['Avg_Vol_20day'] = data['TOTTRDQTY'].rolling(window=20).mean()
     data['Relative_Volume'] = data['TOTTRDQTY'] / data['Avg_Vol_20day']

     smadata = (data[['SYMBOL', 'CLOSE1', 'TIMESTAMP1','Percentage_change','Avg_Price_5days','Avg_Vol_20day','Relative_Volume']])

     df = pd.DataFrame(smadata)
     smadata.to_csv("testdata111555121.csv")
     print(df)

     columns = ['SYMBOL', 'CLOSE1', 'TIMESTAMP1','Percentage_change','Avg_Price_5days','Avg_Vol_20day','Relative_Volume']

     df_data = df[columns]
     df_data = df_data.fillna(value=0)

     records = df_data.values.tolist()

     sql_insert = '''INSERT INTO NSEDATA.dbo.Percentage_VolumeData(SYMBOL,CLOSE1,TIMESTAMP1,Percentage_change,Avg_Price_5days,Avg_Vol_20day,Relative_Volume)VALUES(?,?,?,?,?,?,?)'''

     cursor = conn.cursor()
     cursor.executemany(sql_insert, records)
     cursor.commit()

