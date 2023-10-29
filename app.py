from flask import Flask, render_template, request, jsonify
import os
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_image():
    uploaded_file = request.files['image']
    # keep same as uploaded file
    processed_file = os.path.join("static", uploaded_file.filename)
    uploaded_file.save(processed_file)

    return jsonify({'url': processed_file})

if __name__ == '__main__':
    app.run(debug=True)
