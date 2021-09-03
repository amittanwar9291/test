import { IDeletable } from '@interfaces/deletable.interface';
import { Guid } from '@models/shared/guid/guid';
import { remove, isArray } from 'lodash';
import { FindingBase } from '@models/shared/finding/finding.base';

export function findingCollectionPreSaveCleanup(collection: IDeletable[]): void {
  const findingsToBeRemoved = collection.filter(x => x.isDeleted && x.id === Guid.EMPTY);
  findingsToBeRemoved.forEach(item => {
    remove(collection, item2 => {
      return item2.scopeId === item.scopeId;
    });
  });

  handleSubfindings(collection);
}

export function findingCollectionPostSaveCleanup(collection: IDeletable[], freshModel: IDeletable[]): void {
  const itemScopeIdsToBeRemoved: string[] = [];
  const findingsToBeRemoved = collection.filter(finding => finding.isDeleted && finding.id !== Guid.EMPTY);
  findingsToBeRemoved.forEach(finding => {
    if (!freshModel.find(x => x.scopeId === finding.scopeId)) {
      itemScopeIdsToBeRemoved.push(finding.scopeId);
    }
  });
  remove(collection, finding => {
    return itemScopeIdsToBeRemoved.find(x => x === finding.scopeId);
  });
}

function handleSubfindings(collection: IDeletable[]): void {
  collection.forEach(finding => {
    for (const prop in finding) {
      if (isCollectionOfFindings(finding, prop)) {
        if (finding.isDeleted) {
          finding[prop] = [];
        } else {
          handleSubfindings(finding[prop]);
        }
      }
    }
  });
}

function isCollectionOfFindings(finding: IDeletable, propertyName: string): boolean {
  return isArray(finding[propertyName]);
}
