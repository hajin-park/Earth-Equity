import csv
import json


CSV_FILE = "LC02_Acre_Daily_Met_1970-2001.csv"
JSON_FILE = "filtered_LC02_Acre_Daily_Met_1970-2001.json"

DATE_INDEX = 1
AIR_TEMP_MEAN = 5


filtered_data = {
    "title": "Average Temperature in Rio Branco",
    "start": "01/01/1970",
    "end": "05/31/2001",
    "intervals": ["Daily", "Weekly", "Monthly", "Yearly"],
    "descriptions": ["Average tempature in Rio Branco"],
    "links": [""],
    "data": [],
}

with open(f"Data/data/{CSV_FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip garbage rows
    for i in range(24):
        next(reader)

    for line in reader:
        if (
            line[DATE_INDEX]
            and float(line[AIR_TEMP_MEAN]) != -9999.0
            and float(line[AIR_TEMP_MEAN]) > 0
            and float(line[AIR_TEMP_MEAN]) < 200
        ):
            formatted_date = f"{line[DATE_INDEX][:4]}-{line[DATE_INDEX][-4:-2]}-{line[DATE_INDEX][-2:]}"
            filtered_data["data"].append([formatted_date, float(line[AIR_TEMP_MEAN])])

with open(f"Data/data/{JSON_FILE}", "w") as file:
    json_string = json.dumps(filtered_data, indent=None, separators=(",", ":"))
    file.write(json_string)
