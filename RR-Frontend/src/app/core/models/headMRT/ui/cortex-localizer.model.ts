import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CortexLocalizerModel extends EnumBase {
  // Right
  frontalLobeRight: boolean;
  superiorFrontalGyrusRight: boolean;
  middleFrontalGyrusRight: boolean;
  precentralGyrusRight: boolean;
  centrumSemiovaleRight: boolean;
  parietalLobeRight: boolean;
  postcentralLobeRight: boolean;
  occipitalLobeRight: boolean;
  insulaRight: boolean;
  temporalLobeRight: boolean;
  hippocampusRight: boolean;
  temporalPoleRight: boolean;
  operculumRight: boolean;
  cerebellarHemisphereRight: boolean;
  cerebellarTonsilRight: boolean;

  // Left
  frontalLobeLeft: boolean;
  superiorFrontalGyrusLeft: boolean;
  middleFrontalGyrusLeft: boolean;
  precentralGyrusLeft: boolean;
  centrumSemiovaleLeft: boolean;
  parietalLobeLeft: boolean;
  postcentralLobeLeft: boolean;
  occipitalLobeLeft: boolean;
  insulaLeft: boolean;
  temporalLobeLeft: boolean;
  hippocampusLeft: boolean;
  temporalPoleLeft: boolean;
  operculumLeft: boolean;
  cerebellarHemisphereLeft: boolean;
  cerebellarTonsilLeft: boolean;

  cerebellarVermis: boolean;
  cerebellum: boolean;

  constructor() {
    super();

    // Right
    this.frontalLobeRight = false;
    this.superiorFrontalGyrusRight = false;
    this.middleFrontalGyrusRight = false;
    this.precentralGyrusRight = false;
    this.centrumSemiovaleRight = false;
    this.parietalLobeRight = false;
    this.postcentralLobeRight = false;
    this.occipitalLobeRight = false;
    this.insulaRight = false;
    this.temporalLobeRight = false;
    this.hippocampusRight = false;
    this.temporalPoleRight = false;
    this.operculumRight = false;
    this.cerebellarHemisphereRight = false;
    this.cerebellarTonsilRight = false;

    // Left
    this.frontalLobeLeft = false;
    this.superiorFrontalGyrusLeft = false;
    this.middleFrontalGyrusLeft = false;
    this.precentralGyrusLeft = false;
    this.centrumSemiovaleLeft = false;
    this.parietalLobeLeft = false;
    this.postcentralLobeLeft = false;
    this.occipitalLobeLeft = false;
    this.insulaLeft = false;
    this.temporalLobeLeft = false;
    this.hippocampusLeft = false;
    this.temporalPoleLeft = false;
    this.operculumLeft = false;
    this.cerebellarHemisphereLeft = false;
    this.cerebellarTonsilLeft = false;

    this.cerebellum = false;
    this.cerebellarVermis = false;
  }
}
