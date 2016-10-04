#!/usr/bin/env bash
echo "Task 1: Installing python3.5"
brew install python3

echo "Task 2: installing virtualenv"
pip3 install virtualenv


echo "Task 3: creating virtualenv"
virtualenv -p python3 venv

echo "Task 4: activate virtualenv"
source venv/bin/activate

echo "Task 5: Installing requirements.txt"
pip3 install -r requirements.txt