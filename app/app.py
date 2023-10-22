from flask import Flask, jsonify
from products import productos

productos=[
    {
        "nombre":"Milka Oreo",
        "precio":750,
    },
    {
        "nombre":"Alfajor Block",
        "precio":650
    },
    {
        "nombre":"Alfajor Águila",
        "precio":700
    }
]

app = Flask(__name__)

@app.route("/productos", methods=["GET"])
def productos():
    return jsonify({productos})
