# app.py
from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)


def handle_frontEnd():
    pass

if __name__ == "main":
    socketio.run(app, debug=True)