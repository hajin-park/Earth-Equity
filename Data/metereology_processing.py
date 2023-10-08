import csv
import json


FILE = "LC02_Acre_Daily_Met_1970-2001.csv"
JSON_FILE = "filtered_LC02_Acre_Daily_Met_1970-2001.json"
filtered_data = {
    "title": "Average Temperature in Rio Branco",
    "start": "01/04/2020",
    "end": "09/03/2023",
    "intervals": ["Daily", "Weekly", "Monthly", "Yearly"],
    "descriptions": ["Covid deaths"],
    "links": [""],
    "data": {},
}
