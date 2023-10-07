from flask import Flask, Response, request, render_template
from flask_cors import CORS, cross_origin
import os
import csv
import io
import json
import cv2


app = Flask(__name__, static_url_path="/static")
CORS(app, support_credentials=True)


@app.post("/")
@cross_origin(supports_credentials=True)
def send_graph_data():
    pass


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
