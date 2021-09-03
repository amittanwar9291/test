import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BasalGangliaLocationsModel extends EnumBase {
  // Right
  thalamusRight: boolean;
  putamenRight: boolean;
  globusPallidusRight: boolean;
  globusPallidusInternalRight: boolean;
  globusPallidusExternalRight: boolean;
  caudateNucleusRight: boolean;
  headCaudateNucleusRight: boolean;
  bodyCaudateNucleusRight: boolean;
  tailCcaudateNucleusRight: boolean;
  internalCapsuleRight: boolean;
  anteriorLimbInternalCapsuleRight: boolean;
  genuInternalCapsuleRight: boolean;
  posteriorLimbInternalCapsuleRight: boolean;
  externalCapsuleRight: boolean;
  extremeCapsuleRight: boolean;
  claustrumRight: boolean;

  // Left
  thalamusLeft: boolean;
  putamenLeft: boolean;
  globusPallidusLeft: boolean;
  globusPallidusInternalLeft: boolean;
  globusPallidusExternalLeft: boolean;
  caudateNucleusLeft: boolean;
  headCaudateNucleusLeft: boolean;
  bodyCaudateNucleusLeft: boolean;
  tailCcaudateNucleusLeft: boolean;
  internalCapsuleLeft: boolean;
  anteriorLimbInternalCapsuleLeft: boolean;
  genuInternalCapsuleLeft: boolean;
  posteriorLimbInternalCapsuleLeft: boolean;
  externalCapsuleLeft: boolean;
  extremeCapsuleLeft: boolean;
  claustrumLeft: boolean;

  constructor() {
    super();

    // Right
    this.thalamusRight = false;
    this.putamenRight = false;
    this.globusPallidusRight = false;
    this.globusPallidusInternalRight = false;
    this.globusPallidusExternalRight = false;
    this.caudateNucleusRight = false;
    this.headCaudateNucleusRight = false;
    this.bodyCaudateNucleusRight = false;
    this.tailCcaudateNucleusRight = false;
    this.internalCapsuleRight = false;
    this.anteriorLimbInternalCapsuleRight = false;
    this.genuInternalCapsuleRight = false;
    this.posteriorLimbInternalCapsuleRight = false;
    this.externalCapsuleRight = false;
    this.extremeCapsuleRight = false;
    this.claustrumRight = false;

    // Left
    this.thalamusLeft = false;
    this.putamenLeft = false;
    this.globusPallidusLeft = false;
    this.globusPallidusInternalLeft = false;
    this.globusPallidusExternalLeft = false;
    this.caudateNucleusLeft = false;
    this.headCaudateNucleusLeft = false;
    this.bodyCaudateNucleusLeft = false;
    this.tailCcaudateNucleusLeft = false;
    this.internalCapsuleLeft = false;
    this.anteriorLimbInternalCapsuleLeft = false;
    this.genuInternalCapsuleLeft = false;
    this.posteriorLimbInternalCapsuleLeft = false;
    this.externalCapsuleLeft = false;
    this.extremeCapsuleLeft = false;
    this.claustrumLeft = false;
  }
}
