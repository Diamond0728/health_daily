import random
import execjs

def js_from_file(file_name):
  with open(file_name, 'r', encoding='UTF-8') as file:
    result = file.read()
  return result

context1 = execjs.compile(js_from_file('./encrypt.js'))
def add_salt(key, salt):
  return context1.call("encryptPassword", key, salt)