const { app, BrowserWindow } = require('electron');

let window;

function createWindow(){
  window = new BrowserWindow({
    width: 1400,
    height: 900,
    backgroundColor: '#292C35'
  })

  window.loadFile('./dist/plant-e-electron/browser/index.html');
  window.webContents.openDevTools();
}

app.on('ready', createWindow);
