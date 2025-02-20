
#!/bin/bash

# This script sets up and runs a Python virtual environment for the project.
# 
# Steps:
# 1. Checks if the "venv" directory exists.
# 2. If "venv" does not exist:
#    a. Creates a virtual environment named "venv".
#    b. Activates the virtual environment.
#    c. Installs the required Python packages from "requirements.txt".
#    d. Changes directory to "backend".
#    e. Runs the "main.py" script.
# 3. If "venv" exists:
#    a. Activates the virtual environment.
#    b. Changes directory to "backend".
#    c. Runs the "main.py" script.
if [ ! -d "venv" ]; then
    python3 -m venv venv
    source venv/bin/activate
    pip install -r backend/requirements.txt
    cd backend
    python main.py
else
    source venv/bin/activate
    cd backend 
    python main.py
fi
