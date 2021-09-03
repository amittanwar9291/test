from os import listdir
from os.path import isfile, join, splitext
import json

files = [f for f in listdir("./") if isfile(join("./",f)) and ".json" == splitext(f)[1] and "compound" not in f]
compound_dicom = []
for file in files:
    with open(file, encoding='utf-8') as f:
        dicom_data = f.read()
        dicom_data_json = json.loads(dicom_data)
        compound_dicom.append(dicom_data_json)

with open("compound.json", "w", encoding='utf-8') as f:
    f.write(json.dumps(compound_dicom, indent=2))
