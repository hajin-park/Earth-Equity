import csv
import json

YEAR_INDEX = 0
MONTH_INDEX = 1
DAY_INDEX = 2
SOIL_MOISTURE = 5

CSV_FILE = "SMAPVEX16_IA_PermNet_v0.csv"
JSON_FILE = "filtered_SMAPVEX16_IA_PermNet_v0.json"
filtered_data = {
    "title": "Soil Moisture",
    "start": "05/01/2016",
    "end": "09/30/2016",
    "intervals": ["Daily", "Weekly", "Monthly", "Yearly"],
    "descriptions": ["Soil Moisture in Iowa Summer of 2016"],
    "links": [""],
    "data": [],
}

with open(f"Data/data/{CSV_FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip garbage rows
    header = next(reader)
    garbage = next(reader)

    # the same date is split into many different times
    # we want to average soil moisture for the same date
    prev_date = "2016-05-01"
    aggregate_soil_moisture = 0
    total_counts_day = 0
    for line in reader:
        formatted_date = f"{int(line[YEAR_INDEX])}-{int(line[MONTH_INDEX]):02d}-{int(line[DAY_INDEX]):02d}"
        # covid deaths in rows of the same date are combined
        if formatted_date == prev_date:
            aggregate_soil_moisture += float(line[SOIL_MOISTURE]) if line[SOIL_MOISTURE] else 0
            total_counts_day += 1

        # the next week starts, store the deaths of the previous week and repeat
        else:
            avg_soil_moisture = round(aggregate_soil_moisture / total_counts_day, 3)
            filtered_data["data"].append([prev_date, avg_soil_moisture])
            aggregate_soil_moisture = float(line[SOIL_MOISTURE]) if line[SOIL_MOISTURE] else 0
            total_counts_day = 1

        # track the previous date to check when a new week starts
        prev_date = formatted_date

with open(f"Data/data/{JSON_FILE}", "w") as file:
    json_string = json.dumps(filtered_data, indent=None, separators=(",", ":"))
    file.write(json_string)
