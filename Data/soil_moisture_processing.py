import csv
import json

COVID_DEATH_INDEX = 10
END_WEEK_INDEX = 2

CSV_FILE = "SMAPVEX16_IA_PermNet_v0.csv"
JSON_FILE = "filtered_SMAPVEX16_IA_PermNet_v0.json"
filtered_data = {
    "title": "Soil Moisture",
    "start": "01/04/2020",
    "end": "09/03/2023",
    "intervals": ["Daily", "Weekly", "Monthly", "Yearly"],
    "descriptions": ["Soil Moisture in Iowa Summer of 2016"],
    "links": [""],
    "data": [],
}
