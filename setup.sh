#!/usr/bin/env bash

echo "Task 1: installing pip"
python get-pip.py


echo "Task 2: installing virtualenv"
pip install virtualenv


echo "Task 3: creating virtualenv"
virtualenv -p python3 venv

echo "activate virtual env"
source venv/bin/activate

echo "Task 4: Installing requirements.txt"
pip3 install -r requirements.txt