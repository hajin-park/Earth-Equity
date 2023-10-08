import csv
import json


CSV_FILE = "LC02_Acre_Daily_Met_1970-2001.csv"
JSON_FILE = "filtered_LC02_Acre_Daily_Met_1970-2001.json"
filtered_data = {
    "title": "Average Temperature in Rio Branco",
    "start": "01/01/1970",
    "end": "05/31/2001",
    "intervals": ["Daily", "Weekly", "Monthly", "Yearly"],
    "descriptions": ["Average tempature in Rio Branco"],
    "links": [""],
    "data": [],
}

with open(f"data/{CSV_FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip garbage rows
    for i in range(24):
        next(reader)

    for line in reader:
        pass
