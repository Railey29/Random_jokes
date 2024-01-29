from flask import Flask, jsonify, request, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/studentForm": {"origins": ["https://for-student-taupe.vercel.app", "http://localhost:3000"]}})
@app.route("/studentForm", methods=["POST"])  # I-limit ang method sa POST lamang
def get_data():
    if request.method == "POST":
        req_user_data = request.get_json()
        nameData = req_user_data.get("name", "")
        addressData = req_user_data.get("address", "")
        courseData = req_user_data.get("course")

        final_data_get = {
            "name": nameData,
            "address": addressData,
            "course": courseData
        }

        txt_file = "D:\\Programming Projects\\my-nextjs-app\\app\\FormStudent\\backend\\DataOfStudent.txt"
        with open(txt_file, 'a') as file:
            text_to_append = json.dumps(final_data_get) + "\n"
            file.write(text_to_append)

        return jsonify(final_data_get)
    else:
        return "Method Not Allowed", 405  # Ito ay isang POST endpoint, hindi dapat tinatanggap ang GET request.

if __name__ == '__main__':
    app.run(debug=True)
