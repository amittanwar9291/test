import { NgModule } from '@angular/core';

import { CardsNavigationModule } from './cards-navigation/cards-navigation.module';
import { SideEffectsModule } from './side-effects/side-effects.module';
import { SequencesModule } from './sequences/sequences.module';
import { AcquisitionsModule } from '@commonTemplates/technology/acquisitions/acquisitions.module';
import { ContrastMediumSectionModule } from '@commonTemplates/technology/contrast-medium-section/contrast-medium-section.module';
import { SequencesSectionModule } from '@commonTemplates/technology/sequences-section/sequences-section.module';
import { AcquisitionsSectionModule } from '@commonTemplates/technology/acquisitions-section/acquisitions-section.module';

@NgModule({
  imports: [
    CardsNavigationModule,
    SideEffectsModule,
    SequencesModule,
    AcquisitionsModule,
    ContrastMediumSectionModule,
    SequencesSectionModule,
    AcquisitionsSectionModule
  ],
  exports: [
    CardsNavigationModule,
    SideEffectsModule,
    SequencesModule,
    AcquisitionsModule,
    ContrastMediumSectionModule,
    SequencesSectionModule,
    AcquisitionsSectionModule
  ]
})
export class TechnologyCommonTemplatesModule {}
