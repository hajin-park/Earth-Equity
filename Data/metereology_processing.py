import csv
import json


FILE = "LC02_Acre_Daily_Met_1970-2001.csv"
JSON_FILE = "filtered_LC02_Acre_Daily_Met_1970-2001.json"

DATE_INDEX = 1
AIR_TEMP_MEAN = 5



filtered_data = {
    "title": "Average Temperature in Rio Branco",
    "start": "01/04/2020",
    "end": "09/03/2023",
    "intervals": ["Daily", "Weekly", "Monthly", "Yearly"],
    "descriptions": ["Covid deaths"],
    "links": [""],
    "data": [],
}

with open(f"data/{FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip the header row
    for i in range(24):
        next(reader)

    for line in reader:
        filtered_data["data"].append([line[DATE_INDEX], line[AIR_TEMP_MEAN]])

with open(f"data/{JSON_FILE}", "w") as file:
    json_string = json.dumps(filtered_data, indent=None, separators=(",", ":"))
    file.write(json_string)

