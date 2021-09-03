import { IModel } from '@interfaces/model.interface';
import { ModelBase } from '@models/model-base';
import { DataNodeModel } from './data-node.model';
import { remove } from 'lodash';
import { IDataNode } from './data-node.interface';
import { IDeletable } from '@interfaces/deletable.interface';

export class DataStructure {
  public root: IDataNode;

  constructor(model: IModel) {
    this.root = new DataNodeModel();
    this.createModelStructure(model);
  }

  public updateModelStructure(model: IModel): void {
    this.updateStructure(model, this.root);
  }

  public createModelStructure(model: IModel): void {
    this.analyzeModelStructure(model, this.root);
  }

  public mapModelIds(src: IModel, out: IModel): void {
    this.updateModelIds(src, out, this.root);
  }

  private updateModelIds(src: IModel, out: IModel, node: IDataNode) {
    out.id = src.id;
    node.nestedObjects.forEach(innerNode => {
      this.updateModelIds(src[innerNode.propertyName], out[innerNode.propertyName], innerNode);
    });
    node.nestedCollections.forEach(innerNode => {
      out[innerNode.propertyName].forEach((item: IDeletable) => {
        const element = src[innerNode.propertyName].find(x => x.scopeId === item.scopeId);
        if (element) {
          this.updateModelIds(element, item, innerNode);
        }
      });
    });
  }

  private updateStructure(model: IModel, dataNode: IDataNode): void {
    this.reanalyzeObservedProperties(model, dataNode);
    this.updateNestedCollections(model, dataNode);
    this.updateNestedObjects(model, dataNode);
  }

  private analyzeModelStructure(model: IModel, dataNode: IDataNode): void {
    for (const key in model) {
      if (this.isPropertyUnrecognizable(model[key])) {
        this.pushToObservedProperties(key, dataNode);
      } else if (this.isPropertyInstanceOfModelBase(model[key])) {
        this.analyzeNestedObject(model, key, dataNode);
      } else if (this.isPropertyInstanceOfArray(model[key])) {
        this.analyzeNestedArray(model, key, dataNode);
      }
    }
  }

  private isPropertyUnrecognizable(property: any): boolean {
    return property === null || (Array.isArray(property) && property.length === 0);
  }

  private isPropertyInstanceOfModelBase(property: any): boolean {
    return property instanceof ModelBase;
  }

  private isPropertyInstanceOfArray(property: any): boolean {
    return Array.isArray(property) && property.length !== 0;
  }

  private analyzeNestedObject(model: IModel, key: string, dataNode: IDataNode): void {
    if (!dataNode.nestedObjects.find(x => x.propertyName === key)) {
      const newNode = new DataNodeModel(key);
      dataNode.nestedObjects.push(newNode);
      this.analyzeModelStructure(model[key], newNode);
    }
  }

  private analyzeNestedArray(model: IModel, key: string, dataNode: IDataNode): void {
    if (!dataNode.nestedCollections.find(x => x.propertyName === key)) {
      const modelProperty = model[key];
      if (modelProperty[0]) {
        const newNode = new DataNodeModel(key);
        dataNode.nestedCollections.push(newNode);
        modelProperty.forEach(instance => {
          this.analyzeModelStructure(instance, newNode);
        });
      } else {
        this.pushToObservedProperties(key, dataNode);
      }
    }
  }

  private updateNestedCollections(model: IModel, dataNode: IDataNode): void {
    dataNode.nestedCollections.forEach(node => {
      model[node.propertyName].forEach(item => {
        this.updateStructure(item, node);
      });
    });
  }

  private updateNestedObjects(model: IModel, dataNode: IDataNode): void {
    dataNode.nestedObjects.forEach(node => {
      this.updateStructure(model[node.propertyName], node);
    });
  }

  private reanalyzeObservedProperties(model: IModel, dataNode: IDataNode): void {
    dataNode.observedProperties.forEach(observedPropertyName => {
      const modelProperty = model[observedPropertyName];
      if (modelProperty && modelProperty.length > 0) {
        this.analyzeModelStructure(model, dataNode);
        remove(dataNode.observedProperties, item => item === observedPropertyName);
      }
    });
  }

  private pushToObservedProperties(propertyName: string, dataNode: IDataNode): void {
    if (!dataNode.observedProperties.find(x => x === propertyName)) {
      dataNode.observedProperties.push(propertyName);
    }
  }
}
