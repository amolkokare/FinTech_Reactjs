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
from sqlalchemy import create_engine
import sqlalchemy as sal
import pyodbc

print(pyodbc.drivers())
conn = pyodbc.connect(Trusted_Connection="Yes",
                      Driver='ODBC Driver 17 for SQL Server',
                      Server='DESKTOP-B3UPRGM',
                      Database='NSEDATA'

                      )
cursor = conn.cursor()
os.chdir(r"D:\NSEDATA\2021")
dflist = []
filelist = glob.glob("*.csv")
dflist = []

for filename in filelist:
    df = pd.DataFrame(pd.read_csv(filename))
    dflist.append(df)
    concatdf = pd.concat(dflist)

columns=['SYMBOL','SERIES','OPEN','HIGH','LOW','CLOSE','LAST','PREVCLOSE','TOTTRDQTY','TOTTRDVAL','TIMESTAMP','TOTALTRADES',
        'ISIN']
df_data = concatdf[columns]
df_data = df_data.fillna(value=0)

records = df_data.values.tolist()
print(records)
sql_insert='''INSERT INTO NSEDATA.dbo.DAILYBHAVCOPY(SYMBOL,SERIES,OPEN1,HIGH1,LOW1,CLOSE1,LAST1,PREVCLOSE,TOTTRDQTY,TOTTRDVAL,TIMESTAMP1,TOTALTRADES,
        ISIN) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)'''
cursor = conn.cursor()

cursor.executemany(sql_insert, records)
cursor.commit();
import shutil, os

for f in filelist :

    newpath=r"D:\\np\\2021"
    shutil.move(f, newpath)

    if not os.path.exists(newpath):
        os.makedirs(newpath)
