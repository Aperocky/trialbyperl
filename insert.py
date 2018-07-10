# Insert into database.
# Quickly insert by script instead of manually.
# Using python because json are very much like python dictionaries.
import sqlite3

data = [{
    "first_name": 'Rose',
    "last_name": 'Tyler',
    "home": 'Earth'
},
{
    "first_name": 'Zoe',
    "last_name": 'Heriot',
    "home": 'Space Station W3'
},
{
    "first_name": 'Jo',
    "last_name": 'Grant',
    "home": 'Earth'
},
{
    "first_name": 'Leela',
    "last_name": "None",
    "home": 'Unspecified'
},
{
    "first_name": 'Romana',
    "last_name": "None",
    "home": 'Gallifrey'
},
{
    "first_name": 'Clara',
    "last_name": 'Oswald',
    "home": 'Earth'
},
{
    "first_name": 'Adric',
    "last_name": "None",
    "home": 'Alzarius'
},
{
    "first_name": 'Susan',
    "last_name": 'Foreman',
    "home": 'Gallifrey'
}]

conn = sqlite3.connect('aliens.db')

for each in data:
    sqlstr = "INSERT INTO citizens VALUES ('%s', '%s', '%s')" % (each["first_name"], each["last_name"], each["home"])
    conn.execute(sqlstr)
    conn.commit()

conn.close()