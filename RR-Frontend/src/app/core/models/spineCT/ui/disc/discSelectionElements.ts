import { nameof } from 'ts-simple-nameof';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';
import { IDiscSelectionElements } from '@interfaces/pages/spine/intervertebal-disc-joints/disc-selection-elements.interface';

export const discSelectionElements: IDiscSelectionElements[] = [
  {
    number: 1,
    name: nameof<SpineDiscLocationModel>(m => m.central),
    translationKey: 'spineCT.disc.discSelectionElements.central'
  },
  {
    number: 2,
    name: nameof<SpineDiscLocationModel>(m => m.paracentralRight),
    translationKey: 'spineCT.disc.discSelectionElements.paracentral'
  },
  {
    number: 3,
    name: nameof<SpineDiscLocationModel>(m => m.subarticularRight),
    translationKey: 'spineCT.disc.discSelectionElements.subarticular'
  },
  {
    number: 4,
    name: nameof<SpineDiscLocationModel>(m => m.foraminalRight),
    translationKey: 'spineCT.disc.discSelectionElements.foraminal'
  },
  {
    number: 5,
    name: nameof<SpineDiscLocationModel>(m => m.extraforaminalRight),
    translationKey: 'spineCT.disc.discSelectionElements.extraforaminal'
  },
  {
    number: 6,
    name: nameof<SpineDiscLocationModel>(m => m.paracentralLeft),
    translationKey: 'spineCT.disc.discSelectionElements.paracentral'
  },
  {
    number: 7,
    name: nameof<SpineDiscLocationModel>(m => m.subarticularLeft),
    translationKey: 'spineCT.disc.discSelectionElements.subarticular'
  },
  {
    number: 8,
    name: nameof<SpineDiscLocationModel>(m => m.foraminalLeft),
    translationKey: 'spineCT.disc.discSelectionElements.foraminal'
  },
  {
    number: 9,
    name: nameof<SpineDiscLocationModel>(m => m.extraforaminalLeft),
    translationKey: 'spineCT.disc.discSelectionElements.extraforaminal'
  }
];
