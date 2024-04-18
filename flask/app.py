from flask import Flask,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}})
@app.route('/')
def index():
    return jsonify({'data':"THis is the data from Flask Python"})

if __name__ == "__main__":
    app.run()