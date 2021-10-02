import numpy as np
import pandas as pd
from flask import Flask, render_template,request, jsonify
import pickle
from flask_cors import CORS, cross_origin

from numpy.core.numeric import cross#Initialize the flask App
app = Flask(__name__)
model = pickle.load(open('clusters1.pkl', 'rb'))

mod = df=pd.read_csv('marketing_campaign.csv',sep='\t')
CORS(app)

#default page of our web-app
@app.route('/')
def home():
    return render_template('index.html')

#To use the predict button in our web-app
@app.route('/predict',methods=['POST'])
def predict():
    #For rendering results on HTML GUI

    print(request.form.values())
    int_features = [float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    #output = round(prediction[0] ) 
    return format(prediction)
    #render_template('index.html', prediction_text='Segment {}'.format(prediction))

#alut route eka
@app.route('/baba',methods=['POST'])
def baba():
    gota1 = mod[(mod['Age'] >= 50)]
    
    return gota1

if __name__ == "__main__":
    app.run(debug=True)


# from flask import Flask
# #from database.db import initialize_db
# from flask_restful import Api
# from Resources.routes import initialize_routes
# from flask_cors import CORS, cross_origin


# app = Flask(__name__)
# api = Api(app)
# cors = CORS(app)

# app.config['CORS_HEADERS'] = 'Content-Type'

# #initialize_db(app)

# initialize_routes(api)

# app.run()






