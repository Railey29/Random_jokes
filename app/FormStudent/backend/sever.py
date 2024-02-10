from flask import Flask, request
from flask_cors import CORS
#from flask_ngrok import run_with_ngrok

app = Flask(__name__)
CORS(app)
#run_with_ngrok(app)

@app.route('/submit', methods=['POST'])
def get_data():
    txt_file = "D:\\Programming Projects\\my-nextjs-app\\app\\FormStudent\\backend\\DataOfStudent.txt"
    data = request.get_json()
    name = data.get('userInput')
    address = data.get('userAddress')
    course = data.get('userCourse')
    fullData = {
        'name': name,
        'address': address,
        'course': course
    }
    print(data)
    
    with open(txt_file, 'a') as file:
        file.write(str(fullData) + '\n')
    return "Data received and saved successfully"

if __name__ == '__main__':
    app.run()