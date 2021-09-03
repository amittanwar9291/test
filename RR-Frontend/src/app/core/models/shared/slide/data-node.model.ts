import { IDataNode } from './data-node.interface';

export class DataNodeModel implements IDataNode {
  nestedObjects: DataNodeModel[];
  nestedCollections: DataNodeModel[];
  observedProperties: string[];
  propertyName: string;

  constructor(propertyName: string = 'root') {
    this.propertyName = propertyName;
    this.nestedObjects = [];
    this.nestedCollections = [];
    this.observedProperties = [];
  }
}
