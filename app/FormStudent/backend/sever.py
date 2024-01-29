from flask import Flask, jsonify, request, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def get_data():
    if request.method == "POST":
        req_user_data = request.get_json() #Reqeust to the frontend
        nameData = req_user_data.get("name", "")
        addressData = req_user_data.get("address", "")
        courseData = req_user_data.get("course")

        final_data_get = {
            "name": nameData,
            "address": addressData,
            "course": courseData
        }


        # Logic To DataBase
        txt_file = "D:\\Programming Projects\\my-nextjs-app\\app\\FormStudent\\backend\\DataOfStudent.txt"
        with open(txt_file, 'a') as file:
            text_to_append = json.dumps(final_data_get) + "\n"
            file.write(text_to_append)

        return jsonify(final_data_get)
    else:
        # Handle GET request (if needed)
        return "Hello from GET request!"

if __name__ == '__main__':
    app.run(debug=True)
