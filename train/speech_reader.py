import pandas as pd
import fileinput
import chardet

## function to detect text encoding
def detect_file_encoding(file_path):
    with open(file_path, 'rb') as file:
        rawdata = file.read()
        result = chardet.detect(rawdata)

        print(f"The detected encoding for {file_path} is: {result}")



class speech_reader():
    
    def __init__(self, year: str):
        self.year = year
        self.data_path = "../data/hein-daily/"
        self.speeches = pd.DataFrame()
        self.descr = pd.DataFrame()
        self.speakers = pd.DataFrame()
        self.dataset = pd.DataFrame()
        self.read_speeches()
        self.read_descr()
        self.read_speakers()
        self.create_dataset()
        
    def read_huge_file(self, file_path):
        data_list = []
    
        for lines in fileinput.input(files = file_path, openhook=fileinput.hook_encoded("Windows-1252")):
            try: 
                data_list.append(lines.split("|"))
            except:
                pass
                
        fileinput.close()
        
        colnames = data_list[0]
        colnames[-1] = colnames[-1][:-1]
        col_len = len(colnames)
        values = [ val[:col_len] for val in data_list[1:]]
        
        df = pd.DataFrame(values, columns =colnames)
    
        return df

    def read_speeches(self):
        speeches_path = self.data_path + f"speeches_{self.year}.txt"
        self.speeches  = self.read_huge_file(speeches_path)

    
    def read_descr(self):
        descr_path = self.data_path + f"descr_{self.year}.txt"
        self.descr  = self.read_huge_file(descr_path)

    def read_speakers(self):
        speakers = pd.read_csv(f"{self.data_path + self.year}_SpeakerMap.txt", sep='|', encoding='utf-8',
                          on_bad_lines='skip')
        speakers['speech_id'] = speakers['speech_id'].astype(str)
        self.speakers = speakers

    def create_dataset(self):
        descr_used_cols = ['speech_id', 'date', 'char_count', 'speaker', 'word_count']
        self.dataset = self.speeches.merge(self.descr[descr_used_cols], on='speech_id', how='left')
        self.dataset = self.dataset.merge(self.speakers, on='speech_id')
        # self.dataset = self.dataset[self.dataset.chamber == 'S']
        self.dataset.reset_index(drop = True, inplace=True)
        self.dataset["word_count"] = self.dataset.word_count.str[:-1].replace('', '0').astype(int)
        self.dataset["char_count"] = self.dataset.char_count.str[:-1].replace('', '0').astype(int)
        
        # self.dataset = self.dataset.drop(columns=['district'])
        
        
    def create_csv(self):
        self.dataset.to_csv(f"../data/organized/{self.year}_data.csv")
    
