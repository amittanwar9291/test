import { NavigationStreamPageModel } from '@models/shared/navigation/navigation-stream-page.model';

export class NavigationStreamModel {
  currentPageNumber: number;
  currentPageName: string;
  isLast: boolean;
  isFirst: boolean;

  pages: NavigationStreamPageModel[];

  constructor() {
    this.currentPageNumber = 1;
    this.currentPageName = '';
    this.isFirst = false;
    this.isLast = false;
    this.pages = [];
  }
}
