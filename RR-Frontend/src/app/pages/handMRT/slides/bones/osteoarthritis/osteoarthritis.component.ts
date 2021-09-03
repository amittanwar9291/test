import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SignificanceTypeEnum, StagingTypeEnum } from '@enums/handMRT/bones/';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { compact } from 'lodash';
import { Subscription } from 'rxjs';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';

@Component({
  selector: 'rr-osteoarthritis',
  templateUrl: './osteoarthritis.component.html',
  styleUrls: ['./osteoarthritis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteoarthritisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  side: LocationTypeEnum;

  subscriptions: Subscription[] = [];
  slacWrist: DropdownModel[];
  snacWrist: DropdownModel[];

  significanceType = SignificanceTypeEnum;
  stagingTypeEnum = StagingTypeEnum;

  constructor(private translate: TranslateService, private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.bonesHelperService.localizationSide.subscribe(value => {
        this.side = value;
      })
    );
    this.initTranslations();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  isSingleSelectionOnLocalizer(): boolean {
    return compact(Object.values(this.model.handJointsLocalizer)).length === 1;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.bones.slacAndSnacWrist.options').subscribe((out: DropdownModel[]) => {
        this.slacWrist = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('handMRT.bones.slacAndSnacWrist.options').subscribe((out: DropdownModel[]) => {
        this.snacWrist = Object.keys(out).map(e => out[e]);
      })
    );
  }

  openLargeLocalizer() {
    const cleanup = (m: BonesFindingUiModel) => {
      const { cmcJoints, drug, radioCarpalJoint } = m.handJointsLocalizer;
      if (!cmcJoints) {
        m.eatonLitterStagingType = StagingTypeEnum.None;
      }
      if (!drug) {
        m.isRemodellingAtIncisuraUlnaris = false;
        m.isIntraArticularBodies = false;
      }
      if (!radioCarpalJoint) {
        m.isJoinSurfaceMoreThan20 = false;
        m.isShortenedRadius = false;
        m.isDepressionOfJointSurface = false;
        m.isGapInJoinSurface = false;
        m.isPosttraumatic = false;
      }
      m.isJointSpaceNarrowing = false;
      m.isSubchondralSclerosis = false;
      m.isOsteophyte = false;
      m.isSubchondralCyts = false;
      m.osteoarthritisSnacWristType = StagingTypeEnum.None;
      m.osteoarthritisSlacWristType = StagingTypeEnum.None;
      m.significanceType = SignificanceTypeEnum.None;
    };
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('joints', false, false, false, false, cleanup));
  }
}
