const { is } = require("electron-util");
const { remote } = require("electron");
require("./node_modules/@capacitor/electron/dist/electron-bridge");

window.addEventListener("DOMContentLoaded", () => {
  const { Color, Titlebar } = require("custom-electron-titlebar");
  const titlebar = new Titlebar({
    backgroundColor: Color.TRANSPARENT,
    menu: null,
    unfocusEffect: false,
    titleHorizontalAlignment: "left"
  });
  titlebar.updateTitle(`v${remote.app.getVersion()}`);
});

// TODO remove in v1.0
if (!is.development) {
  document.addEventListener("keydown", event => {
    if (event.key === "F12") {
      const webContents = remote.getCurrentWindow().webContents;
      webContents.isDevToolsOpened()
        ? webContents.closeDevTools()
        : webContents.openDevTools();
    }
  });
}
