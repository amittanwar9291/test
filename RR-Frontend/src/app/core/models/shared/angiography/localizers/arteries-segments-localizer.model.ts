import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class ArteriesSegmentsLocalizerModel extends EnumBase {
  None: boolean;
  // right
  aCAa1Right: boolean;
  aCAa2Right: boolean;
  mCAm1Right: boolean;
  mCAm2Right: boolean;
  mCAm3Right: boolean;
  pCOMRight: boolean;
  pCAp1Right: boolean;
  pCAp2Right: boolean;
  sCARight: boolean;
  pontineArteriesRight: boolean;
  labyrintineArteryRight: boolean;
  aICARight: boolean;
  pICARight: boolean;

  // Unpaired arteries
  aCOM: boolean;
  bA: boolean;
  antSpinalArtery: boolean;

  // left
  aCAa1Left: boolean;
  aCAa2Left: boolean;
  mCAm1Left: boolean;
  mCAm2Left: boolean;
  mCAm3Left: boolean;
  pCOMLeft: boolean;
  pCAp1Left: boolean;
  pCAp2Left: boolean;
  sCALeft: boolean;
  pontineArteriesLeft: boolean;
  labyrintineArteryLeft: boolean;
  aICALeft: boolean;
  pICALeft: boolean;

  // values used only on fronted - should be removed before mapping to string and set after mapping to object
  allACARight: boolean; // true if aCAa1Right aCAa2Right
  allACALeft: boolean; // true if  aCAa1Left', 'aCAa2Left
  allMCARight: boolean; // true if mCAm1Right mCAm2Right mCAm3Right
  allMCALeft: boolean; // true if mCAm1Left mCAm2Left mCAm3Left
  allPCARight: boolean; // true if pCAp1Right pCAp2Right
  allPCALeft: boolean; // true if pCAp1Left pCAp2Left

  constructor() {
    super();

    // right
    this.aCAa1Right = false;
    this.aCAa2Right = false;
    this.mCAm1Right = false;
    this.mCAm2Right = false;
    this.mCAm3Right = false;
    this.pCOMRight = false;
    this.pCAp1Right = false;
    this.pCAp2Right = false;
    this.sCARight = false;
    this.pontineArteriesRight = false;
    this.labyrintineArteryRight = false;
    this.aICARight = false;
    this.pICARight = false;

    // Unpaired arteries
    this.aCOM = false;
    this.bA = false;
    this.antSpinalArtery = false;

    // left
    this.aCAa1Left = false;
    this.aCAa2Left = false;
    this.mCAm1Left = false;
    this.mCAm2Left = false;
    this.mCAm3Left = false;
    this.pCOMLeft = false;
    this.pCAp1Left = false;
    this.pCAp2Left = false;
    this.sCALeft = false;
    this.pontineArteriesLeft = false;
    this.labyrintineArteryLeft = false;
    this.aICALeft = false;
    this.pICALeft = false;

    this.allACARight = false;
    this.allACALeft = false;
    this.allMCARight = false;
    this.allMCALeft = false;
    this.allPCARight = false;
    this.allPCALeft = false;
  }
}
