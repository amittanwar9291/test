import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { HandJointsPageTypeEnum } from './hand-joints-page-type.enum';
import { HandJoints } from '@models/handMRT/ui/hand/localizers/hand-joints.model';

@Component({
  selector: 'rr-hand-joints-large',
  templateUrl: './hand-joints-large.component.html',
  styleUrls: ['./hand-joints-large.component.scss'],
  providers: [MakeProvider(HandJointsLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HandJointsLargeComponent extends LocalizerBase<HandJoints> {
  @Output() close = new EventEmitter();
  @Input() side: LocationTypeEnum;
  @Input() showInfoIcons = true;
  @Input() page: HandJointsPageTypeEnum;

  locationSideType = LocationTypeEnum;
  infoIconsRRIds = {
    [HandJointsPageTypeEnum.Bones]: {
      dipJoints: 'han_m_04_08',
      pipJoints: 'han_m_04_07'
    },
    [HandJointsPageTypeEnum.SoftTissue]: {
      dipJoints: 'han_m_08_02',
      pipJoints: 'han_m_08_03'
    }
  };

  constructor() {
    super(HandJoints);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }

  selectElement(name: string) {
    const groups: { [id: string]: string[] } = {};
    groups.dipJoints = ['dip2', 'dip3', 'dip4', 'dip5'];
    groups.pipJoints = ['pip2', 'pip3', 'pip4', 'pip5'];
    groups.mcpJoints = ['mcp1', 'mcp2', 'mcp3', 'mcp4', 'mcp5'];
    groups.cmcJoints = ['cmc1', 'cmc2', 'cmc3', 'cmc4', 'cmc5'];

    for (const key of Object.keys(groups)) {
      if (groups[key].includes(name)) {
        this.ngValue[name] = !this.ngValue[name];

        let isAllSelected = true;
        groups[key].forEach(dips => {
          if (!this.ngValue[dips]) {
            isAllSelected = false;
          }
        });
        this.ngValue[key] = isAllSelected;
        return;
      }

      if (name === key) {
        this.ngValue[name] = !this.ngValue[name];
        groups[key].forEach(dips => {
          this.ngValue[dips] = this.ngValue[name];
        });
        return;
      }
    }
    this.ngValue[name] = !this.ngValue[name];
  }
}
