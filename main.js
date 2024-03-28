const { app, BrowserWindow } = require('electron');
const { usb } = require('usb');
const path = require('node:path')

let window;

function createWindow(){
  window = new BrowserWindow({
    width: 1400,
    height: 900,
    backgroundColor: '#292C35',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    }
  })

  window.loadFile('./dist/plant-e-electron/browser/index.html');
  window.webContents.openDevTools();
  window.setMenu(null);
}

app.on('ready', createWindow);

usb.on('attach', device => {
  window.webContents.send('display-controller-connected', device);
})
usb.on('detach', device => {
  window.webContents.send('display-controller-disconnected', device);
})
