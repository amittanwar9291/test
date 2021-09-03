import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../female-sex-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';

@Component({
  selector: 'rr-ovary-torsion',
  templateUrl: './ovary-torsion.component.html',
  styleUrls: ['./ovary-torsion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OvaryTorsionComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  ovaryTorsionDifferentialDiagnosisW044: DropdownModel[];

  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;
  isDWI: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService, private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)),
      this.femaleSexHelperService.isDWI.subscribe(value => (this.isDWI = value)),
      this.translate
        .stream('pelvisMRT.femaleGender.ovaryTorsionDifferentialDiagnosisW044.options')
        .subscribe((out: DropdownModel[]) => (this.ovaryTorsionDifferentialDiagnosisW044 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
