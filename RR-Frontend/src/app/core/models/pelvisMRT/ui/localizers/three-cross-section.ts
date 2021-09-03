import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class ThreeCrossSection extends EnumBase {
  // Transitional zone
  tZBaseRightAnterior: boolean;
  tZBaseLeftAnterior: boolean;
  tZBaseRightPosterior: boolean;
  tZBaseLeftPosterior: boolean;
  tZMiddleGlandRightAnterior: boolean;
  tZMiddleGlandLeftAnterior: boolean;
  tZMiddleGlandRightPosterior: boolean;
  tZMiddleGlandLeftPosterior: boolean;
  tZApexRightAnterior: boolean;
  tZApexLeftAnterior: boolean;
  tZApexRightPosterior: boolean;
  tZApexLeftPosterior: boolean;

  // Peripheral zone
  pZBaseRightAnterior: boolean;
  pZBaseRightPosteriorLateral: boolean;
  pZBaseRightPosteriorMedial: boolean;
  pZBaseLeftAnterior: boolean;
  pZBaseLeftPosteriorLateral: boolean;
  pZBaseLeftPosteriorMedial: boolean;
  pZMiddleGlandRightAnterior: boolean;
  pZMiddleGlandRightPosteriorLateral: boolean;
  pZMiddleGlandRightPosteriorMedial: boolean;
  pZMiddleGlandLeftAnterior: boolean;
  pZMiddleGlandLeftPosteriorLateral: boolean;
  pZMiddleGlandLeftPosteriorMedial: boolean;
  pZApexRightAnterior: boolean;
  pZApexRightPosteriorLateral: boolean;
  pZApexRightPosteriorMedial: boolean;
  pZApexLeftAnterior: boolean;
  pZApexLeftPosteriorLateral: boolean;
  pZApexLeftPosteriorMedial: boolean;

  // Central zone
  cZRight: boolean;
  cZLeft: boolean;

  // Anterior fibromuscular zone

  aFSBaseRight: boolean;
  aFSBaseLeft: boolean;
  aFSMiddleGlandRight: boolean;
  aFSMiddleGlandLeft: boolean;
  aFSApexRight: boolean;
  aFSApexLeft: boolean;

  // Seminal vesicles
  sBRight: boolean;
  sBLeft: boolean;
  constructor() {
    super();

    this.tZBaseRightAnterior = false;
    this.tZBaseLeftAnterior = false;
    this.tZBaseRightPosterior = false;
    this.tZBaseLeftPosterior = false;
    this.tZMiddleGlandRightAnterior = false;
    this.tZMiddleGlandLeftAnterior = false;
    this.tZMiddleGlandRightPosterior = false;
    this.tZMiddleGlandLeftPosterior = false;
    this.tZApexRightAnterior = false;
    this.tZApexLeftAnterior = false;
    this.tZApexRightPosterior = false;
    this.tZApexLeftPosterior = false;

    // Peripheral zone
    this.pZBaseRightAnterior = false;
    this.pZBaseRightPosteriorLateral = false;
    this.pZBaseRightPosteriorMedial = false;
    this.pZBaseLeftAnterior = false;
    this.pZBaseLeftPosteriorLateral = false;
    this.pZBaseLeftPosteriorMedial = false;
    this.pZMiddleGlandRightAnterior = false;
    this.pZMiddleGlandRightPosteriorLateral = false;
    this.pZMiddleGlandRightPosteriorMedial = false;
    this.pZMiddleGlandLeftAnterior = false;
    this.pZMiddleGlandLeftPosteriorLateral = false;
    this.pZMiddleGlandLeftPosteriorMedial = false;
    this.pZApexRightAnterior = false;
    this.pZApexRightPosteriorLateral = false;
    this.pZApexRightPosteriorMedial = false;
    this.pZApexLeftAnterior = false;
    this.pZApexLeftPosteriorLateral = false;
    this.pZApexLeftPosteriorMedial = false;

    // Central zone
    this.cZRight = false;
    this.cZLeft = false;

    // Anterior fibromuscular zone

    this.aFSBaseRight = false;
    this.aFSBaseLeft = false;
    this.aFSMiddleGlandRight = false;
    this.aFSMiddleGlandLeft = false;
    this.aFSApexRight = false;
    this.aFSApexLeft = false;

    // Seminal vesicles
    this.sBRight = false;
    this.sBLeft = false;
  }
}
