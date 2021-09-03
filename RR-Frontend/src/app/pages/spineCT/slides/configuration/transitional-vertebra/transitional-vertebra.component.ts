import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { LumbosacralTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/lumbosacral-type.enum';
import { DefinitionTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/definition-type.enum';
import { CastellviTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/castellvi-type.enum';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-transitional-vertebra',
  templateUrl: './transitional-vertebra.component.html',
  styleUrls: ['./transitional-vertebra.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class TransitionalVertebraComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;

  translationSubscriptions: Subscription[] = [];
  w009: DropdownModel[];

  lumbosacralTypeEnum = LumbosacralTypeEnum;
  sideTypeEnum = SideTypeEnum;
  definitionTypeEnum = DefinitionTypeEnum;
  castellviTypeEnum = CastellviTypeEnum;

  validationElements = [
    nameof<ConfigurationFindingUiModel>(m => m.isCervical),
    nameof<ConfigurationFindingUiModel>(m => m.isThoracolumbar),
    nameof<ConfigurationFindingUiModel>(m => m.isLumbosacral)
  ];

  constructor(public translate: TranslateService, private validationHelperService: ValidationHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('spineCT.configuration.W009.options').subscribe((out: DropdownModel[]) => {
        this.w009 = out;
      })
    );
  }

  ngOnDestroy() {
    this.translationSubscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  displaySideOption() {
    return (
      this.model.castellviType === this.castellviTypeEnum.Type1A ||
      this.model.castellviType === this.castellviTypeEnum.Type2A ||
      this.model.castellviType === this.castellviTypeEnum.Type3A
    );
  }

  displayDefinitionOption() {
    return this.model.castellviType === this.castellviTypeEnum.Type4;
  }

  clearDependElements() {
    this.model.sideType = this.sideTypeEnum.None;
    this.model.definitionType = this.definitionTypeEnum.None;
    this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.sideType));
  }
}
