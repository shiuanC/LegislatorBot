# LegislatorBot
A Flask-based website which is connected to a legislator-style article generator. The Chatbot is based on GPT2 and uses the 114th Senate congressional speech records as the finetune data.

## Implement
To implement the website:

### Step 1
Download the finetuned model with the link: 
[https://drive.google.com/file/d/1t5VFEcP_WII7SK1Sq57FboXA4jph8I90/view?usp=share_link](https://drive.google.com/file/d/1t5VFEcP_WII7SK1Sq57FboXA4jph8I90/view?usp=share_link)

### Step 2
Run the following command to start the website: `flask run` 
Alternatively, use the **speech_generator.ipynb** for more detailed information.

## Train
To train the model by yourself, find the code in the train folder. The **finetune.ipynb** file is used for finetuning, and **speech_reader** is for loading data.

## Data Source
The data for training the LegislatorBot was sourced from the Stanford Congressional Records, which provides a comprehensive collection of congressional speech records. Access the data at [Stanford Congressional Records](https://data.stanford.edu/congress_text).

## Usage
Once the LegislatorBot is set up and running, users can interact with it to generate speeches in the style of the 114th Senate congressional records. This can be an invaluable tool for understanding legislative language and style.

## Features
- **GPT2-Based**: Utilizes the powerful GPT2 model for generating realistic text.
- **Congressional Speech Records**: Trained specifically on the 114th Senate congressional speech records for authentic legislative style simulation.
- **Flask Web Interface**: Easy to use web interface for interacting with the bot.
- **Custom Training Option**: Ability to finetune the model with your own data set using provided notebooks.

## Requirements
To run LegislatorBot, you will need:
- Python 3.x
- Flask
- PyTorch
- Transformer
- Numpy
- Pandas

## Installation
1. Clone the repository or download the source code.
2. Install dependencies using `pip install -r requirements.txt`.
3. Follow the implementation steps to set up the model and start the server.
