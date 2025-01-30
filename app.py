from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

# Database setup
def init_db():
    with sqlite3.connect("users.db") as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS users (username TEXT)")
        conn.commit()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    with sqlite3.connect("users.db") as conn:
        conn.execute("INSERT INTO users (username) VALUES (?)", (username,))
        conn.commit()
    return render_template('game.html', username=username)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
