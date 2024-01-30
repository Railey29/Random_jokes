from flask import Flask, jsonify, request, json
from flask_cors import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

@socketio.on("message")
def get_data(msg):
    txt_file = "D:\\Programming Projects\\my-nextjs-app\\app\\FormStudent\\backend\\DataOfStudent.txt"
    with open(txt_file , 'a') as file:
        file.write(msg + "\n")
        
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
