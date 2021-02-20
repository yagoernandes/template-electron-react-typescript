import { app, BrowserWindow } from "electron";
import { appManager } from "@/electron/AppManager";
import { TrayMenu } from "@/electron/TrayMenu";
import { AlarmWindow } from "@/electron/AlarmWindow";
import store from "./store";

const appElements: any = {
  tray: null,
  windows: [],
};

app.on("ready", () => {
  appElements.tray = new TrayMenu();
  appManager.setWindow("AlarmWindow", new AlarmWindow());
});

/**
 * Quando fechar tudo, sair do programa (mac)
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/**
 * Não exibir o programa na dock (do mac)
 */
if (app.dock) {
  app.dock.hide();
}
