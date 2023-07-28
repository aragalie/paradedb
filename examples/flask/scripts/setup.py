from retakesearch import Client, Database, Table
from dotenv import load_dotenv
import os
import json

load_dotenv()

client = Client(api_key=os.getenv("RETAKE_API_KEY"), url=os.getenv("RETAKE_API_URL"))

database = Database(
    host=os.getenv("DATABASE_HOST"),
    port=os.getenv("DATABASE_PORT"),
    user=os.getenv("DATABASE_USER"),
    password=os.getenv("DATABASE_PASSWORD"),
)

table = Table(
    name=os.getenv("DATABASE_TABLE_NAME"),
    primary_key=os.getenv("DATABASE_TABLE_PRIMARY_KEY"),
    columns=json.loads(os.getenv("DATABASE_TABLE_COLUMNS")),
    neural_columns=json.loads(os.getenv("DATABASE_TABLE_COLUMNS")),
)

index = client.get_index(index_name=os.getenv("DATABASE_TABLE_NAME"))

if not index:
    index = client.create_index(index_name=os.getenv("DATABASE_TABLE_NAME"))
    index.add_source(database=database, table=table)
    print("Index created and source added")