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
    "data": {},
}

with open(f"data/{CSV_FILE}", "r") as file:
    reader = csv.reader(file, delimiter=",")

    # skip the header row
    header = next(reader)


with open(f"data/{JSON_FILE}", "w") as file:
    json_string = json.dumps(filtered_data, indent=None, separators=(",", ":"))
    file.write(json_string)
