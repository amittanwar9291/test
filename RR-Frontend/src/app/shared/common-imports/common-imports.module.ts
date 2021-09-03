import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayActivePipe } from '@pipes/display-active.pipe';

import { UnClickRadioDirective } from '@directives/un-click-radio.directive';
import { ContentResetDirective } from '@directives/content-reset.directive';
import { InputMinMaxValidationDirective } from '@directives/input-min-max-validation.directive';
import { InputSpecialCharactersRestrictedDirective } from '@directives/input-special-characters-restricted.directive';
import { DropdownClearDirective } from '@directives/dropdown-clear.directive';
import { DisableDirective } from '@directives/disable.directive';
import { InfoIconDirective } from '@directives/info-icon.directive';
import { BlockFormDirective } from '@directives/block-form.directive';
import { BlockLocalizerDirective } from '@directives/block-localizer.directive';
import { SafeHtmlTagsDirective } from '@directives/safe-html-tags.directive';
import { ValidationDirective } from '@directives/validation.directive';
import { DropdownExcludedOptionsDirective } from '@directives/dropdown-excluded-options.directive';
import { DifferentialDiagnosisPresetDirective } from '@directives/differential-diagnosis-preset.directive';
import { MetaKeyBlockDirective } from '@directives/meta-key-block.directive';
import { SearchHighlightPipe } from '@pipes/search-highlight.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UnClickRadioDirective,
    ContentResetDirective,
    InputMinMaxValidationDirective,
    InputSpecialCharactersRestrictedDirective,
    DropdownClearDirective,
    DisableDirective,
    InfoIconDirective,
    BlockFormDirective,
    BlockLocalizerDirective,
    DisplayActivePipe,
    SafeHtmlTagsDirective,
    ValidationDirective,
    DropdownExcludedOptionsDirective,
    DifferentialDiagnosisPresetDirective,
    MetaKeyBlockDirective,
    SearchHighlightPipe
  ],
  exports: [
    UnClickRadioDirective,
    ContentResetDirective,
    InputMinMaxValidationDirective,
    InputSpecialCharactersRestrictedDirective,
    DropdownClearDirective,
    DisableDirective,
    InfoIconDirective,
    BlockFormDirective,
    BlockLocalizerDirective,
    DisplayActivePipe,
    SafeHtmlTagsDirective,
    ValidationDirective,
    DropdownExcludedOptionsDirective,
    DifferentialDiagnosisPresetDirective,
    MetaKeyBlockDirective,
    SearchHighlightPipe
  ]
})
export class CommonImportsModule {}
