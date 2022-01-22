const { username, password, submitInfo } = require('./userinfo')
const { fireKeyEvent, sleep } = require('./utils')

const LOGINURL = 'https://ca.csu.edu.cn/authserver/login?type=userNameLogin&service=https%3A%2F%2Fwxxy.csu.edu.cn%2Fa_csu%2Fapi%2Fcas%2Findex%3Fredirect%3Dhttps%253A%252F%252Fwxxy.csu.edu.cn%252Fncov%252Fwap%252Fdefault%252Findex%253Ffrom%253Dhistory%26from%3Dwap'
const HEALTHURL = 'https://wxxy.csu.edu.cn/ncov/wap/default/index?from=history'

async function autoLogin() {
  await sleep(3230)
  document.getElementById("password").parentNode.previousElementSibling.lastChild.value = username
  await sleep(1230)
  document.getElementById("password").value = password
  await sleep(1230)
  const loginButton = document.getElementById("password").parentNode.parentNode.parentNode.children[2].children[0]
  loginButton.click()
}

async function submit() {
  await sleep(1000)
  vm._data.info = submitInfo
  document.getElementsByClassName("footers")[0].children[0].click()
  await sleep(1000)
  document.getElementsByClassName("wapcf-btn wapcf-btn-ok")[0].click()
}

window.addEventListener('DOMContentLoaded', async () => {
  await sleep(1000)
  console.log(window.location.href)
  if(window.location.href == LOGINURL)
    await autoLogin()
  if(window.location.href == HEALTHURL)
    await submit()
})