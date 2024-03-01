import json

if __name__ == "__main__":
    for i in range(1, 4):
        file = "./survey" + str(i) + ".json"
        print("opening " + file)
        new_data = []
        with open(file, "r") as fin:
            line = fin.readline()
            data = json.loads(line)
            print("old data length: ", len(data))
            for d in data:
                new_data.append(d)
                new_data[-1]["selected"] = False
        print("new data length: ", len(new_data))
        fin.close()
        with open(file, "w") as fout:
            fout.write(json.dumps(new_data))