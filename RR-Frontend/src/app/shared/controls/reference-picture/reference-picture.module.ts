import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { UploaderModule } from '@controls/uploader/uploader.module';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, UploaderModule, CommonImportsModule],
  declarations: [ReferencePictureComponent],
  exports: [ReferencePictureComponent]
})
export class ReferencePictureModule {}
