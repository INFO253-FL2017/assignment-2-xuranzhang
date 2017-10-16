"""
webserver.py

File that is the central location of code for your webserver.
"""
import requests
import json
from flask import Flask, render_template, request
import os
# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/about')
def about_us():
    return render_template("AboutUs.html")

@app.route('/blog/8-experiments-in-motivation')
def blog1():
    return render_template("Blog1.html")

@app.route('/blog/a-mindful-shift-of-focus')
def blog2():
    return render_template("Blog2.html")

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def blog3():
    return render_template("Blog3.html")

@app.route('/blog/training-to-be-a-good-writer')
def blog4():
    return render_template("Blog4.html")

@app.route('/blog/what-productivity-systems-wont-solve')
def blog5():
    return render_template("Blog5.html")

@app.route('/contact')
def contact_us():
    return render_template("ContactUs.html")

@app.route('/email_form', methods=['POST'])
def email_form_post():
    jsonData = json.loads(request.data.decode('ascii'))

    requests.post(
        "https://api.mailgun.net/v3/" + os.environ["INFO253_MAILGUN_DOMAIN"] + "/messages",
        auth=(os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"]),
        data={"from": jsonData['Name'] + " " + os.environ["INFO253_MAILGUN_FROM_EMAIL"],
              'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
              'subject': jsonData['Subject'],
              'text': jsonData['Message']})
    return (' ', 200)
