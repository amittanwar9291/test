import { nameof } from 'ts-simple-nameof';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';
import { IDiscSelectionElements } from '@interfaces/pages/spine/intervertebal-disc-joints/disc-selection-elements.interface';

export const discSelectionElements: IDiscSelectionElements[] = [
  {
    number: 1,
    name: nameof<SpineDiscLocationModel>(m => m.central),
    translationKey: 'spineMRT.disc.discSelectionElements.central'
  },
  {
    number: 2,
    name: nameof<SpineDiscLocationModel>(m => m.paracentralRight),
    translationKey: 'spineMRT.disc.discSelectionElements.paracentral'
  },
  {
    number: 3,
    name: nameof<SpineDiscLocationModel>(m => m.subarticularRight),
    translationKey: 'spineMRT.disc.discSelectionElements.subarticular'
  },
  {
    number: 4,
    name: nameof<SpineDiscLocationModel>(m => m.foraminalRight),
    translationKey: 'spineMRT.disc.discSelectionElements.foraminal'
  },
  {
    number: 5,
    name: nameof<SpineDiscLocationModel>(m => m.extraforaminalRight),
    translationKey: 'spineMRT.disc.discSelectionElements.extraforaminal'
  },
  {
    number: 6,
    name: nameof<SpineDiscLocationModel>(m => m.paracentralLeft),
    translationKey: 'spineMRT.disc.discSelectionElements.paracentral'
  },
  {
    number: 7,
    name: nameof<SpineDiscLocationModel>(m => m.subarticularLeft),
    translationKey: 'spineMRT.disc.discSelectionElements.subarticular'
  },
  {
    number: 8,
    name: nameof<SpineDiscLocationModel>(m => m.foraminalLeft),
    translationKey: 'spineMRT.disc.discSelectionElements.foraminal'
  },
  {
    number: 9,
    name: nameof<SpineDiscLocationModel>(m => m.extraforaminalLeft),
    translationKey: 'spineMRT.disc.discSelectionElements.extraforaminal'
  }
];
