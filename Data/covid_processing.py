import csv
import json

COVID_DEATH_INDEX = 10
END_WEEK_INDEX = 2

CSV_FILE = "Provisional_Death_Counts_for_Influenza__Pneumonia__and_COVID-19.csv"
JSON_FILE = "filtered_Provisional_Death_Counts_for_Influenza__Pneumonia__and_COVID-19.json"
filtered_data = {
    "title": "# Covid Deaths",
    "start": "01/04/2020",
    "end": "09/03/2023",
    "intervals": ["Weekly", "Monthly", "Yearly"],
    "descriptions": ["Covid deaths"],
    "links": [""],
    "data": [],
}

with open(f"Data/data/{CSV_FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip the header row
    header = next(reader)

    # the same date is split into many different categories
    # we want to aggregate all of the covid deaths for the same date
    prev_date = "01/04/2020"
    aggregate_weekly_deaths = 0
    for line in reader:
        # covid deaths in rows of the same date are combined
        if line[END_WEEK_INDEX] == prev_date:
            aggregate_weekly_deaths += int(line[COVID_DEATH_INDEX]) if line[COVID_DEATH_INDEX] else 0

        # the next week starts, store the deaths of the previous week and repeat
        else:
            filtered_data["data"].append([prev_date, aggregate_weekly_deaths])
            aggregate_weekly_deaths = int(line[COVID_DEATH_INDEX]) if line[COVID_DEATH_INDEX] else 0

        # track the previous date to check when a new week starts
        prev_date = line[END_WEEK_INDEX]


with open(f"Data/data/{JSON_FILE}", "w") as file:
    json_string = json.dumps(filtered_data, indent=None, separators=(",", ":"))
    file.write(json_string)
