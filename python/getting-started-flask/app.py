from flask import Flask, render_template
from markupsafe import escape

app = Flask(__name__)

@app.route("/user/<username>")
def show_user_profile(username):
    return f"User: {escape(username)}"

@app.route("/post/<int:post_id>")
def show_post(post_id):
    return f"Post {post_id}"

@app.route("/path/<path:subpath>")
def show_subpath(subpath):
    return f'Subpath {escape(subpath)}'

@app.route("/hello/")
@app.route("/hello/<name>")
def hello(name=None):
    return render_template("hello.html", name=name)
