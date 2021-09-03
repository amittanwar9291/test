import { WristModel } from '@models/handMRT/ui/hand/localizers/wrist.model';

export class HandDetails extends WristModel {
  radius: boolean;
  ulna: boolean;

  d1MetacarpalBone: boolean;
  d1ProximalPhalanx: boolean;
  d1DistalPhalanx: boolean;
  d2MetacarpalBone: boolean;
  d2ProximalPhalanx: boolean;
  d2MiddlePhalanx: boolean;
  d2DistalPhalanx: boolean;
  d3MetacarpalBone: boolean;
  d3ProximalPhalanx: boolean;
  d3MiddlePhalanx: boolean;
  d3DistalPhalanx: boolean;
  d4MetacarpalBone: boolean;
  d4ProximalPhalanx: boolean;
  d4MiddlePhalanx: boolean;
  d4DistalPhalanx: boolean;
  d5MetacarpalBone: boolean;
  d5ProximalPhalanx: boolean;
  d5MiddlePhalanx: boolean;
  d5DistalPhalanx: boolean;

  complex: boolean;

  constructor() {
    super();
    this.radius = false;
    this.ulna = false;

    this.d1MetacarpalBone = false;
    this.d1ProximalPhalanx = false;
    this.d1DistalPhalanx = false;
    this.d2MetacarpalBone = false;
    this.d2ProximalPhalanx = false;
    this.d2MiddlePhalanx = false;
    this.d2DistalPhalanx = false;
    this.d3MetacarpalBone = false;
    this.d3ProximalPhalanx = false;
    this.d3MiddlePhalanx = false;
    this.d3DistalPhalanx = false;
    this.d4MetacarpalBone = false;
    this.d4ProximalPhalanx = false;
    this.d4MiddlePhalanx = false;
    this.d4DistalPhalanx = false;
    this.d5MetacarpalBone = false;
    this.d5ProximalPhalanx = false;
    this.d5MiddlePhalanx = false;
    this.d5DistalPhalanx = false;

    this.complex = false;
  }
}
