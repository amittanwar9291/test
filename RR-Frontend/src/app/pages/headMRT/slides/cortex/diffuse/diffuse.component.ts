import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CortexDifferentialDiagnosisTypeEnum } from '@enums/headMRT/cortex/common';

@Component({
  selector: 'rr-diffuse',
  templateUrl: './diffuse.component.html',
  styleUrls: ['./diffuse.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseComponent implements OnInit {
  constructor(private translateService: TranslateService) {}
  @Input() model: CortexFindingUiModel;
  @Input() isDWI: boolean;
  @Input() isContrastEnhanced: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions01: DropdownGroupedModel[];
  classificationFazekasOptions: DropdownModel[];
  classificationWhoOptions: DropdownModel[];
  classificationAdamsOptions: DropdownModel[];

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
      this.translateService.stream('headMRT.cortex.cortexDifferentialDiagnoseDiffuse').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions01 = out;
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
