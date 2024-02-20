# import os
import random
import numpy as np
import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer, AutoModelForCausalLM, GPT2Tokenizer, AutoTokenizer, Trainer, TrainingArguments


tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
custom_token = "<sep>"
tokenizer.add_tokens([custom_token])

folder_path = "./"
model_name = "model"  # No trailing slash
model_path = folder_path + model_name

# Load the model from a local directory
model = AutoModelForCausalLM.from_pretrained(model_path)

# Resize the model embeddings to account for the new token
model.resize_token_embeddings(len(tokenizer))

def cleanpunctuation(s):
    for p in '!,.:;?':
        s=s.replace(' '+p,p)
    s=s.replace('-','')
    s=s.replace('\xa0',' ')
    return s


def GeneText(prompt:str, max_len = 150, repetition_penalty = 2.0) -> str:
    if max_len>300:
        max_len = 300
    elif max_len <50: 
        max_len = 50

    prompt  = prompt +": <sep>"
    input_ids = tokenizer.encode(prompt,
                             return_tensors='pt')
    
    # set seed to reproduce results. Feel free to change the seed though to get different results
    seed = random.randrange(100000)
    torch.manual_seed(seed)
    prompt = prompt +": <sep>"
    # activate sampling and deactivate top_k by setting top_k sampling to 0
    sample_output = model.generate(
        input_ids, 
        do_sample=True, 
        max_length=max_len, 
        top_k=0,
        temperature=0.7, 
        repetition_penalty=repetition_penalty
    )
    
    # print("Output:\n"  + 100 * '-')
    result =  cleanpunctuation(tokenizer.decode(sample_output[0], skip_special_tokens=True)).replace("<sep>", "")

    return result
