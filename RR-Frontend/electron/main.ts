import { app } from 'electron';
import { join } from 'path';
import { is } from 'electron-util';

import { InfoMessage } from './main/enums/info-message.enum';
import { ServiceProvider } from './main/services/service-provider.service';
import { Logger } from './main/services/logger.service';
import { FileSystemService } from './main/services/file-system.service';

(async () => {
  process.on('uncaughtException', error => console.error(error));
  process.on('unhandledRejection', error => console.error(error));
  const isFirstInstance = app.requestSingleInstanceLock();
  if (isFirstInstance) {
    const serviceProvider = new ServiceProvider(configureAppPaths());
    await serviceProvider.appScope.appManager.initializeApp(serviceProvider);
  } else {
    Logger.logger.info(InfoMessage.SECOND_INSTANCE_CALL);
    app.quit();
  }
})();

function configureAppPaths(): string {
  const configFolderPath = is.development ? __dirname : app.getPath('userData');
  app.setAppLogsPath(join(configFolderPath, 'logs'));
  Logger.logger = new Logger(new FileSystemService());

  return configFolderPath;
}
