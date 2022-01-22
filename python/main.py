import requests
from bs4 import BeautifulSoup
from utils import add_salt

username = ""
password = ""
execution = ""

headers = {
  'Connection': 'keep-alive',
  'Pragma': 'no-cache',
  'Cache-Control': 'no-cache',
  'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'Upgrade-Insecure-Requests': '1',
  'Origin': 'https://ca.csu.edu.cn',
  'Content-Type': 'application/x-www-form-urlencoded',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': '?1',
  'Sec-Fetch-Dest': 'document',
  'Referer': 'https://ca.csu.edu.cn/authserver/login?service=https%3A%2F%2Fwxxy.csu.edu.cn%2Fa_csu%2Fapi%2Fcas%2Findex%3Fredirect%3Dhttps%253A%252F%252Fwxxy.csu.edu.cn%252Fncov%252Fwap%252Fdefault%252Findex%253Ffrom%253Dhistory%26from%3Dwap',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
  # 'Cookie': 'route=d9d8c9a003742ff7ae0fa95dc3169d6d; JSESSIONID=DB4757FE80D96409C5012A3054CFDABE; org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=zh_CN; route=5c06937fbe9d5336096bad9c4f0d73ac; JSESSIONID=A6F770F92C0F776F8F3D4F3A620E5F5E'
}

session = requests.Session()
r = session.get("https://ca.csu.edu.cn/authserver/login?service=https%3A%2F%2Fwxxy.csu.edu.cn%2Fa_csu%2Fapi%2Fcas%2Findex%3Fredirect%3Dhttps%253A%252F%252Fwxxy.csu.edu.cn%252Fncov%252Fwap%252Fdefault%252Findex%253Ffrom%253Dhistory%26from%3Dwap")
soup = BeautifulSoup(r.text,'lxml')
salt = soup.find("input", attrs={"id": "pwdEncryptSalt"})
salt = salt["value"]
execution = soup.find("input", attrs={"id": "execution"})['value']

url = "https://ca.csu.edu.cn/authserver/login?service=https%3A%2F%2Fwxxy.csu.edu.cn%2Fa_csu%2Fapi%2Fcas%2Findex%3Fredirect%3Dhttps%253A%252F%252Fwxxy.csu.edu.cn%252Fncov%252Fwap%252Fdefault%252Findex%253Ffrom%253Dhistory%26from%3Dwap"
payload='username='+username+'&password='+password+'&captcha=&_eventId=submit&cllt=userNameLogin&dllt=generalLogin&lt=&execution='+execution
response = session.post(url, headers=headers, data=payload)

print(response.headers)
print(response.text)

# session.close()

# 登陆前验证

