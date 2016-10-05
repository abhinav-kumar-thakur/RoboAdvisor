# RoboAdvisor

1. run >> npm install

2.  install gulp using >>  npm install gulp-cli -g
    to serve the index.html run >> gulp 

3. run >> bash setup.sh 
   for environment setup
   
4. run >> source venv/bin/activate to work with virtualenv

5. run >> python manage.py runserver
    to run the server using django
    
6. Setting up the database
    a. Install the postgres 9.5 server :-
        - https://drive.google.com/a/thoughtworks.com/file/d/0B7dkiOQBtpZQNHNscmJ0T2ltRms/view?usp=sharing
        - Update path in bash : vim ~/.bash_profile
        - Add this line to end (with the correct version): export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.5/bin
        - Run >> source  ~/.bash_profile

    b. On postgres command prompt run :- 
           - CREATE DATABASE roboadvisordb;
           - CREATE USER myprojectuser WITH PASSWORD 'password';
           - ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
           - ALTER ROLE myprojectuser SET timezone TO 'UTC';
           - ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
           - GRANT ALL PRIVILEGES ON DATABASE roboadvisordb TO myprojectuser;
    
    c. Run >> python manage.py migrate