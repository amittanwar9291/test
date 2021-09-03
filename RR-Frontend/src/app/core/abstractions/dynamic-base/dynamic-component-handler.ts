import { Subject } from 'rxjs';

import { IDeletable } from '@interfaces/deletable.interface';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { LoggingService } from '@services/shared/logging/logging.service';

import { Guid } from '@models/shared/guid/guid';
import { FindingBase } from '@models/shared/finding/finding.base';

import { findingCollectionPreSaveCleanup, findingCollectionPostSaveCleanup } from './finding-save-cleanup';
import { isEmpty, remove, isArray, has, lowerFirst } from 'lodash';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';

import { FileService } from '@services/shared/file-service/file.service';
import { ServiceLocator } from '@services/shared/service-locator/service-locator';

import { nameof } from 'ts-simple-nameof';
import { AppConfig } from 'app/app.config';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';

/**
 * Class that handles basic operations on collections of dynamic elements
 * @param collection collection of items on which operations will be performed
 * @param ctor constructor of a class that collection consist of
 */
export class DynamicComponentHandler<TModel extends IDeletable> {
  /**
   * Currently selected element of collection.
   */
  public currentItem: TModel;
  /**
   * Index of currently selected element.
   */
  public currentItemIndex: number;

  public $isReinitialized = new Subject<boolean>();

  private omittedProperties: string[];

  private fileService?: FileService;
  private navigationReportDataService: NavigationReportDataService;

  private fileOperationsUrl: string;

  constructor(
    public logger: LoggingService,
    public collection: Array<TModel>,
    private ctor: INoParamConstructor<TModel>,
    private possibleEmptyCollectionMode?: boolean
  ) {
    // services injection
    this.fileService = ServiceLocator.injector.get(FileService);
    this.navigationReportDataService = ServiceLocator.injector.get(NavigationReportDataService);

    this.currentItemIndex = 0;
    this.currentItem = collection[0];
    this.omittedProperties = ['id', 'number', 'isDeleted', 'scopeId', 'validationId'];

    this.getFileOperationsUrl();
  }

  private getFileOperationsUrl() {
    const pageNumber = this.navigationReportDataService.getCurrentPageNumber();

    if (pageNumber) {
      const reportData = this.navigationReportDataService.getReportData();
      const moduleName = reportData.examinationType;
      const slideName = reportData.pages[pageNumber - 1].typeName.replace(`${moduleName}_`, '');

      this.fileOperationsUrl = AppConfig.settings.servicesUrls[lowerFirst(moduleName)][lowerFirst(slideName)].fileUpload;
    }
  }

  /**
   * Inserts new element into collection at designated position
   * @param event Event passed from UI element, disables control for the time of method execution
   */
  addElement(): void {
    this.currentItem = this.getNewInstance();
    this.collection.splice(this.getLastItemIndex() + 1, 0, this.currentItem);
    this.currentItemIndex = this.getLastItemIndex();
    this.currentItem.number = this.currentItemIndex + 1;
  }

  /**
   * Removes an item from collection at particular index, reenumerates collection afterwards
   * @param index Index of item to be removed
   */
  removeElement(index: number): void {
    this.removeAndSortDeletedItem(this.collection, index);
    if (!this.possibleEmptyCollectionMode) {
      this.ensureCollectionNotEmpty();
    }
    this.setActiveElement(index > 0 ? index - 1 : 0, true);
    this.reenumerateArray();
  }

  /**
   * Removes all elements that have a specific findingType name.
   * @param findingType a specific findingType name that all findings containing it should be removed
   * @param findingTypePropertyName a model property name that carries the findingType name
   */
  removeElementsByFindingType(findingType: string, findingTypePropertyName: string): void {
    const elementsIdsToRemove = [];
    this.collection.forEach(element => {
      if (element[findingTypePropertyName] === findingType) {
        elementsIdsToRemove.push(element.id);
      }
    });

    elementsIdsToRemove.forEach(findingId => {
      const indexToRemove = this.collection.indexOf(this.collection.find(item => item.id === findingId));
      this.removeElement(indexToRemove);
    });
  }

  /**
   * Marks all items inside collection as deleted, items will be removed on next model update.
   * Reinitializes collection with a new empty item afterwards (if 'forceNoEmptyElement' flag is not true).
   */
  deleteAllElements(forceNoDefaultEmptyElement?: boolean): void {
    this.logger.info('DYN', 'Deleting all elements...');
    this.collection.forEach(item => {
      item.isDeleted = true;
    });
    if (!forceNoDefaultEmptyElement) {
      this.ensureCollectionNotEmpty();
    }
  }

  collectionPostSaveCleanup(incomingModel?: TModel[]): void {
    if (!incomingModel) {
      remove(this.collection, item => item.isDeleted);
    } else {
      findingCollectionPostSaveCleanup(this.collection, incomingModel);
    }
  }

  collectionPreSaveCleanup(): void {
    findingCollectionPreSaveCleanup(this.collection);
  }

  /**
   * Marks item at provided index as current item.
   * @param index Index of item to be set as current item.
   * @param force An optional param to skip the condition that index !== this.currentItemIndex when removing a collection item.
   */
  setActiveElement(index: number, force?: boolean): void {
    if (index !== this.currentItemIndex || force) {
      if (this.collection.length !== 0 && !this.collection[index].isDeleted) {
        this.currentItemIndex = index;
        this.currentItem = this.collection[index];
      }
    }
  }

  /**
   * Sets last non-deleted item in collection as active
   */
  setDefaultActiveElement(): void {
    this.currentItemIndex = this.getLastItemIndex();
    this.currentItem = this.collection[this.currentItemIndex];
  }

  /**
   * Resets CurrentItem properties to default model values;
   */
  resetCurrentItem(): void {
    this.deleteAllFindingFiles();
    const example = this.getNewInstance();
    for (const key in example) {
      if (this.currentItem.hasOwnProperty(key)) {
        if (!this.isPropertyOmitted(key)) {
          this.currentItem[key] = example[key];
        }
      }
    }
  }

  private deleteAllFindingFiles(): void {
    const fileProps = this.getModelPropertiesWithFiles();
    if (!fileProps.length) {
      return;
    }
    if (!this.fileOperationsUrl) {
      console.error(
        'fileOperationsUrl not provided for the FindingColumnComponent' +
          '- the uploaded file(s) DELETE request cannot be sent to the backend on findingType change!'
      );
      return;
    }

    const filesIds = fileProps.map(prop => this.currentItem[prop].imageFileId).filter(id => id);
    if (filesIds.length < 1) {
      return;
    }

    this.fileService.setRoute(this.fileOperationsUrl);
    this.fileService.deleteMultiple(filesIds);
  }

  private getModelPropertiesWithFiles(): string[] {
    return Object.keys(this.currentItem).filter(prop => {
      return (
        has(
          this.currentItem[prop],
          nameof<ReferencePictureUiModel>(m => m.imageFileId)
        ) ||
        has(
          this.currentItem[prop],
          nameof<FileUiModel>(m => m.fileName)
        )
      );
    });
  }

  /**
   * This method is similar to the 'resetCurrentItem' but includes also handling of all subfindings (one level deep only)
   * that the main finding contains.
   * Basically, this method sets the 'isDeleted' property of all subfindings to 'true' because, unlike with removing the main finding,
   * when only changing the main finding's name, the backend cannot handle removing it's subfindings and needs an explicit information
   * that all subfindings should be removed.
   * @param subFindingPropNames An Array of strings containing property names representing all subfindings the given finding contains.
   */
  resetCurrentItemWithSubFindings(subFindingPropNames: string[]): void {
    const example = this.getNewInstance();
    subFindingPropNames.forEach(key => {
      // If there is a collection of subfindings
      if (isArray(this.currentItem[key])) {
        this.currentItem[key] = this.removeAndSortDeletedSubfindings(this.currentItem[key]);

        /**
         * If there are no non-deleted items in the subfinding collection it creates a new empty subfinding item
         * and places it at the beginning of the subfindings collection.
         */
        if (isEmpty(this.currentItem[key].filter(item => !item.isDeleted))) {
          this.currentItem[key].unshift(...example[key]);
        }

        for (const propName in example) {
          if (this.currentItem.hasOwnProperty(propName)) {
            if (!this.isPropertyOmitted(propName, subFindingPropNames)) {
              this.currentItem[propName] = example[propName];
            }
          }
        }

        // if the subfindings are plain objects
      } else {
        for (const propName in example) {
          if (this.currentItem.hasOwnProperty(propName)) {
            if (key === propName) {
              const previousSubfindingId = this.currentItem[key].id;
              this.currentItem[propName] = example[propName];
              this.currentItem[key].id = previousSubfindingId;
            } else if (!this.isPropertyOmitted(propName, subFindingPropNames)) {
              this.currentItem[propName] = example[propName];
            }
          }
        }
      }
    });
  }

  /**
   * Returns last non-deleted item from collection
   */
  getLastItem(): TModel {
    return this.collection[this.getLastItemIndex()];
  }

  /**
   * Returns last non-deleted item index from collection
   */
  getLastItemIndex(): number {
    return this.collection.filter(x => !x.isDeleted).length - 1;
  }

  updateCollection(collection: Array<TModel>): void {
    this.collection = collection;
    this.currentItem = this.collection[this.currentItemIndex];
  }

  /**
   * Assigns array passed as an argument as new collection in this instance.
   * Selects last non-deleted item of new collection as active item.
   * @param collection array to be assigned as new colection
   */
  reinitializeCollection(collection: Array<TModel>) {
    if (collection.length === 0 && !this.possibleEmptyCollectionMode) {
      collection.push(this.getNewInstance());
    }

    collection.sort(this.orderElementsByNumber);
    collection.push(...remove(collection, item => item.isDeleted));

    this.collection = collection;
    this.setDefaultActiveElement();

    this.$isReinitialized.next(true);
  }

  private ensureCollectionNotEmpty(): void {
    if (this.collection.filter(x => !x.isDeleted).length === 0) {
      this.currentItem = this.getNewInstance();
      this.currentItemIndex = 0;
      this.collection.splice(0, 0, this.currentItem);
      this.currentItem.number = this.currentItemIndex + 1;
    }
  }

  private getNewInstance(): TModel {
    return new this.ctor();
  }

  private reenumerateArray(): void {
    this.collection.forEach((element, i) => {
      element.number = i + 1;
    });
  }

  private removeAndSortDeletedItem(collection: FindingBase[], index: number): void {
    const removedElement = collection.splice(index, 1)[0];
    removedElement.isDeleted = true;
    collection.push(removedElement);
  }

  private removeAndSortDeletedSubfindings(collection: FindingBase[]): FindingBase[] {
    // We filter out all items that don't have GUID assigned yet.
    const subfindings = collection.filter(item => !Guid.isEmpty(item.id));
    subfindings.forEach(item => (item.isDeleted = true));
    return subfindings;
  }

  private isPropertyOmitted(key: string, additionalProperties?: string[]): boolean {
    const omittedProperties = additionalProperties ? [...this.omittedProperties, ...additionalProperties] : this.omittedProperties;
    return omittedProperties.includes(key);
  }

  private orderElementsByNumber(firstElement: FindingBase, secondElement: FindingBase): number {
    return firstElement.number > secondElement.number ? 1 : -1;
  }
}
