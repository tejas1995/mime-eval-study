import json
from argparse import ArgumentParser
import random
import os

args = ArgumentParser()
args.add_argument("-d", "--data", default="../data/sample_data.json")
args.add_argument("-n", "--name", default="fm2_llama3.1_8b")
args.add_argument("-i", "--num_instances_per_queue", type=int, default=50)
args.add_argument("-q", "--num_queues", default=1, type=int)
args.add_argument("-s", "--seed", default=0, type=int)
args = args.parse_args()

random.seed(args.seed)

data = json.load(open(args.data))

# Calculate the total number of instances required
total_instances_required = args.num_instances_per_queue * args.num_queues

# Check if there are enough questions in the data
if total_instances_required > len(data):
    raise ValueError(
        f"Not enough data to create {args.num_queues} queues with {args.num_instances_per_queue} instances each. "
        f"Required: {total_instances_required}, Available: {len(data)}."
    )

# Shuffle the data to ensure randomness
random.shuffle(data)

out_dirname = f"web/baked_queues/{args.name}_q{args.num_queues}_i{args.num_instances_per_queue}_s{args.seed}"
os.makedirs(out_dirname, exist_ok=True)

for uid in list(range(args.num_queues)):
    start_idx = uid * args.num_instances_per_queue
    end_idx = start_idx + args.num_instances_per_queue
    sampled_data = data[start_idx:end_idx]
    
    out_file = f"{out_dirname}/{uid:0>3}.json"
    if os.path.exists(out_file):
        print(f"Overwriting {out_file}")
    else:
        print(f"Writing {out_file}")
    json.dump(sampled_data, open(out_file, "w"), indent=2)