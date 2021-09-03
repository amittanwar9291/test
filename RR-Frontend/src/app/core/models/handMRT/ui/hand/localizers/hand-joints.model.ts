import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class HandJoints extends EnumBase {
  ptJoint: boolean;
  sttJoint: boolean;
  slJoint: boolean;
  radioCarpalJoint: boolean;
  ulnocarpalJoint: boolean;
  drug: boolean;
  dipJoints: boolean;
  dip2: boolean;
  dip3: boolean;
  dip4: boolean;
  dip5: boolean;
  pipJoints: boolean;
  pip2: boolean;
  pip3: boolean;
  pip4: boolean;
  pip5: boolean;
  ip: boolean;
  mcpJoints: boolean;
  mcp1: boolean;
  mcp2: boolean;
  mcp3: boolean;
  mcp4: boolean;
  mcp5: boolean;
  cmcJoints: boolean;
  cmc1: boolean;
  cmc2: boolean;
  cmc3: boolean;
  cmc4: boolean;
  cmc5: boolean;

  constructor() {
    super();

    this.ptJoint = false;
    this.sttJoint = false;
    this.slJoint = false;
    this.radioCarpalJoint = false;
    this.ulnocarpalJoint = false;
    this.drug = false;
    this.dipJoints = false;
    this.dip2 = false;
    this.dip3 = false;
    this.dip4 = false;
    this.dip5 = false;
    this.pipJoints = false;
    this.pip2 = false;
    this.pip3 = false;
    this.pip4 = false;
    this.pip5 = false;
    this.ip = false;
    this.mcpJoints = false;
    this.mcp1 = false;
    this.mcp2 = false;
    this.mcp3 = false;
    this.mcp4 = false;
    this.mcp5 = false;
    this.cmcJoints = false;
    this.cmc1 = false;
    this.cmc2 = false;
    this.cmc3 = false;
    this.cmc4 = false;
    this.cmc5 = false;
  }
}
