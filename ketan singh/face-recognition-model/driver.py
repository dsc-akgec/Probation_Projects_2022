import os
import cv2
import numpy as np
from sklearn import utils
from keras_preprocessing import image
import warnings
warnings.filterwarnings("ignore")
from keras_preprocessing.image import img_to_array , load_img
from keras.models import  load_model
import matplotlib.pyplot as plt
import numpy as np
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# load model
model = load_model("best_model.h5")


face_haar_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')


cap = cv2.VideoCapture(0)

while True:
    ret, test_img = cap.read()  # captures frame and returns boolean value and captured image
    if not ret:
        continue
    gray_img = cv2.cvtColor(test_img, cv2.COLOR_BGR2RGB)

    faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)

    for (x, y, w, h) in faces_detected:
        cv2.rectangle(test_img, (x, y), (x + w, y + h), (255, 0, 0), thickness=7)
        roi_gray = gray_img[y:y + w, x:x + h]  # cropping region of interest i.e. face area from  image
        roi_gray = cv2.resize(roi_gray, (224, 224))
        img_pixels = image.img_to_array(roi_gray)
        img_pixels = np.expand_dims(img_pixels, axis=0)
        img_pixels /= 255

        predictions = model.predict(img_pixels)

        # find max indexed array
        max_index = np.argmax(predictions[0])

        emotions = ('angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral')
        dominant_emotion = emotions[max_index]

        cv2.putText(test_img, dominant_emotion, (int(x), int(y)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    resized_img = cv2.resize(test_img, (1000, 700))
    cv2.imshow('Facial emotion analysis ', resized_img)

    if cv2.waitKey(10) == ord('q'):  # wait until 'q' key is pressed
        break

cap.release()

driver = webdriver.Chrome('./sources/chromedriver.exe')
if dominant_emotion == "happy":
    driver.get("https://open.spotify.com/playlist/4nd7oGDNgfM0rv28CQw9WQ")

elif dominant_emotion == "sad":
    driver.get("https://open.spotify.com/playlist/1jJoJu3y2v0pl2fQb4FpcR")
    
elif dominant_emotion == "angry":
    driver.get("https://open.spotify.com/playlist/2SAlj6IpdtsyI7qqU0ZKb2")
    
elif dominant_emotion == "fear":
    driver.get("https://open.spotify.com/album/1KwWAVnZPhsc9QlQGrM702")
    
elif dominant_emotion == "disgust":
    driver.get("https://open.spotify.com/playlist/7diEjS9gADBgVpDww9J1r3")
    
elif dominant_emotion == "neutral":
    driver.get("https://open.spotify.com/playlist/0ffnLxCftwLzmXDO7DJEXc")
    
elif dominant_emotion == "surprise":
    driver.get("https://open.spotify.com/playlist/2dBjcjjYckHQlrn8iHm7c1")

else:
    print("no face detected") 
