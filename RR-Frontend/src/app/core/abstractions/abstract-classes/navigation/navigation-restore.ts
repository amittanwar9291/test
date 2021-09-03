import { INavigationRestore } from '@interfaces/navigation/navigation-restore.interface';

export abstract class AbstractNavigationRestore implements INavigationRestore {
  abstract retriveCurrentPageUrl(): string;
}
