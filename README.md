# RoboAdvisor

1. run >> npm install

2.  install gulp using >>  npm install gulp-cli -g
    to serve the index.html run >> gulp 

3. Setting up the database
    a. Install the postgres 9.5 server :-
        - https://drive.google.com/a/thoughtworks.com/file/d/0B7dkiOQBtpZQNHNscmJ0T2ltRms/view?usp=sharing
        - Update path in bash : vim ~/.bash_profile
        - Add this line to end (with the correct version): export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.5/bin
        - Run >> source  ~/.bash_profile

    b. On postgres command prompt run :- 
           - run >> bash setup/db.sh 
           To drop and create the database
    
4. run >> bash setup/app.sh 
   for environment setup
   
5. run >> source venv/bin/activate to work with virtualenv

6.  a.Run >> python manage.py migrate
    to run the migrations
    
    b.run >> python manage.py runserver
    to run the server using django
    