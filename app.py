from gpt import generate 
from flask import Flask, render_template, url_for, jsonify, request
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
app.debug = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/TextGene-text', methods=['POST'])
def generate_text():
    data = request.get_json()
    article_length = int(data['len'])
    prompt = str(data['prompt'])
    articles = generate.GeneText(prompt, max_len = article_length)
    # print(articles)
    arts_json =  json.dumps(articles)
    return arts_json

app.run()