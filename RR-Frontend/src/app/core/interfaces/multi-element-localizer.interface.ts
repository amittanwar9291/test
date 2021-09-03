import { CortexLocationsEnum } from '@enums/shared/cortex-locations.enum';

export interface MultiElementLocalizer {
  name: CortexLocationsEnum;
  children: CortexLocationsEnum[];
}
