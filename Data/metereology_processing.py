import csv
import json


CSV_FILE = "LC02_Acre_Daily_Met_1970-2001.csv"
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

with open(f"data/{CSV_FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip garbage rows
    for i in range(24):
        next(reader)

    for line in reader:
