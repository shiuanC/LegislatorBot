from models import diogpt 
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
    prefix = data['text']
    article_length = int(data['len'])
    model = data['model']
    articles = diogpt.GeneText(article_length,1,prefix,model)
    arts_json =  json.dumps(articles)
    return arts_json

app.run()