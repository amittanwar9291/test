import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export interface ISpineLocationOptions {
  isOpen: boolean;
  title?: string;
  type?: string;
  logicType?: string;
  model?: SpineLocation;
  descriptionVersion?: string;
}
