import random
from flask import Flask, request, jsonify

app = Flask(__name__)

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
symbols = "~`@#$%^&*()_+-"

@app.route("/api/generate", methods=["POST"])
def generate():
    data = request.get_json()
    kind = data.get("type", "all")

    try:
        length = int(data.get("length", 8))
    except (TypeError, ValueError):
        return jsonify(error="Length must be a number."), 400

    if length < 6:
        return jsonify(error="Password length should be at least 6 characters."), 400
    if length > 12:
        return jsonify(error="Password length should not exceed 12 characters."), 400

    if kind == "lower":
        chars = lower
    elif kind == "upper":
        chars = upper
    elif kind == "symbols":
        chars = symbols
    else:
        chars = lower + upper + symbols

    password = "".join(random.sample(chars, length))
    return jsonify(password=password)

if __name__ == "__main__":
    app.run(debug=True)