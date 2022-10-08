const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 100,
        transparent: true,
        frame: false,
        hasShadow: false,
        resizable: true,
    });

    win.loadFile("src/index.html");
};

app.whenReady().then(() => {
    createWindow();
});
