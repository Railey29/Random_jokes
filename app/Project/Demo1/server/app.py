# app.py
from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

@socketio.on('message')
def handle_message(msg):
    print("Received:", msg)
    
    # Write the received message to a text file
    txt_data = "D:\\Programming Projects\\my-nextjs-app\\app\\Project\\Demo1\\server\\data.txt"
    with open(txt_data, 'a') as file:
        file.write(msg + "\n")

    # Emit a response back to the client
    emit('response_from_server', "Hello From Flask")


if __name__ == '__main__':
    socketio.run(app, debug=True)
