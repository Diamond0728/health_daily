const { app, BrowserWindow, protocol, session } = require('electron')
const path = require('path')

const loginUrl = 'https://ca.csu.edu.cn/authserver/login?type=userNameLogin&service=https%3A%2F%2Fwxxy.csu.edu.cn%2Fa_csu%2Fapi%2Fcas%2Findex%3Fredirect%3Dhttps%253A%252F%252Fwxxy.csu.edu.cn%252Fncov%252Fwap%252Fdefault%252Findex%253Ffrom%253Dhistory%26from%3Dwap'
function createWindow () {
  const win = new BrowserWindow({
    width: 1080,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL(loginUrl)
  // win.webContents.openDevTools({mode:'right'})
}

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  // protocol.registerBufferProtocol("https", (request, callback) => {
    // if(request.url.indexOf("checkNeedCaptcha") != -1){
    //   console.log(123)
    //   callback({ mimeType: 'text/html', data: Buffer.from('{"isNeed":false}')})
    // } 
  // })
})

setTimeout(() => {
  app.quit()
}, 1000 * 60);
