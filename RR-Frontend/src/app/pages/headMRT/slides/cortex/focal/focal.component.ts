import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { CortexDifferentialDiagnosisTypeEnum } from '@enums/headMRT/cortex/common';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-focal',
  templateUrl: './focal.component.html',
  styleUrls: ['./focal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalComponent implements OnInit {
  constructor(private translateService: TranslateService) {}
  @Input() model: CortexFindingUiModel;
  @Input() isDWI: boolean;
  @Input() isContrastEnhanced: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions01: DropdownGroupedModel[];
  classificationFazekasOptions: DropdownModel[];
  classificationWhoOptions: DropdownModel[];
  classificationAdamsOptions: DropdownModel[];
  differentialDiagnosisOptions0203: DropdownGroupedModel[];

  whoConditionArray = [
    CortexDifferentialDiagnosisTypeEnum.Glioma,
    CortexDifferentialDiagnosisTypeEnum.Astrocytoma,
    CortexDifferentialDiagnosisTypeEnum.AstrocytomaAnapletic,
    CortexDifferentialDiagnosisTypeEnum.AstrocytomaPilocytic,
    CortexDifferentialDiagnosisTypeEnum.Xanthoastrocytoma,
    CortexDifferentialDiagnosisTypeEnum.Glioblastoma,
    CortexDifferentialDiagnosisTypeEnum.Ependymoma,
    CortexDifferentialDiagnosisTypeEnum.Medulloblastoma,
    CortexDifferentialDiagnosisTypeEnum.Oligodendroglioma,
    CortexDifferentialDiagnosisTypeEnum.Meningioma,
    CortexDifferentialDiagnosisTypeEnum.EmbryonalTumor,
    CortexDifferentialDiagnosisTypeEnum.DNET,
    CortexDifferentialDiagnosisTypeEnum.PNET,
    CortexDifferentialDiagnosisTypeEnum.Epidermoid,
    CortexDifferentialDiagnosisTypeEnum.Dermoid
  ];

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.cortex.cortexDifferentialDiagnose01').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions01 = out;
      }),
      this.translateService.stream('headMRT.cortex.cortexDifferentialDiagnose0203').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions0203 = out;
      }),
      this.translateService.stream('headMRT.cortex.classificationFazekas').subscribe((out: DropdownModel[]) => {
        this.classificationFazekasOptions = Object.values(out);
      }),
      this.translateService.stream('headMRT.cortex.classificationWHO').subscribe((out: DropdownModel[]) => {
        this.classificationWhoOptions = Object.values(out);
      }),
      this.translateService.stream('headMRT.cortex.classificationAdams').subscribe((out: DropdownModel[]) => {
        this.classificationAdamsOptions = Object.values(out);
      })
    );
  }
}
