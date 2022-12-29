from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By  
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
import time
import os
from os.path import join,dirname
from dotenv import load_dotenv
import json
import sys

data_file_path = os.path.join(dirname(__file__), "data.json")
print(data_file_path)
with open(data_file_path, "r") as file:
  data = json.load(file)
  
woList = list(data.values())

dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)
USERNAME= os.environ.get('USERNAME')
PASSWORD= os.environ.get('PASSWORD')


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("http://rexinc.net:8080/login.php")
username = driver.find_element("name", "username")
username.send_keys(USERNAME)
password = driver.find_element("name", "password")
password.send_keys(PASSWORD)
submit = driver.find_element("name", "submit")
submit.send_keys(Keys.RETURN)
driver.get("http://rexinc.net:8080/master.php")
input = driver.find_element("name", "crexwono")
WO_data = []
for i in woList:
  input.send_keys(i)
  search = driver.find_element("name", "search")
  search.send_keys(Keys.RETURN)
  
  try: 
    element =WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "search-result")))
    list = element.text.split("\n")
    WOinfo = {
    "catalogNum":list[1],
    "po":list[3],
    "description": list[5],
    "customer":list[7],
    "wo":i,
    "packingslip":list[17],
    "qty":list[19],
    "order_date":list[27],
    "require_date":list[43],
    "shipping_date":False,
    }
    WO_data.append(WOinfo)
    driver.find_element("name", "crexwono").clear()
  except:
    print("something wrong")

driver.close()

json_object = json.dumps(WO_data)

with open("../woList.json", "w") as wo_file:
  wo_file.write(json_object)
print(WO_data)
# sys.stdout.flush()


