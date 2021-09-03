export interface IDataNode {
  nestedObjects: IDataNode[];
  nestedCollections: IDataNode[];
  observedProperties: string[];
  propertyName: string;
}
