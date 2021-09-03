import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { FeetSimpleComponent } from './feet-simple/feet-simple.component';
import { FootThreeSidesViewSimpleComponent } from './foot-three-sides-view/foot-three-sides-view-simple/foot-three-sides-view-simple.component';
import { FootThreeSidesViewComplexComponent } from './foot-three-sides-view/foot-three-sides-view-complex/foot-three-sides-view-complex.component';
import { FootBigBonesSimpleComponent } from './foot-big/foot-big-bones-simple/foot-big-bones-simple.component';
import { FootBigBonesComplexComponent } from './foot-big/foot-big-bones-complex/foot-big-bones-complex.component';
import { FootBigJointsSimpleComponent } from './foot-big/foot-big-joints-simple/foot-big-joints-simple.component';
import { FootBigJointsComplexComponent } from './foot-big/foot-big-joints-complex/foot-big-joints-complex.component';
import { FootBigTendonsSimpleComponent } from './foot-big/foot-big-tendons-simple/foot-big-tendons-simple.component';
import { FootBigTendonsComplexComponent } from './foot-big/foot-big-tendons-complex/foot-big-tendons-complex.component';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, CommonImportsModule, InfoIconModule],
  declarations: [
    FeetSimpleComponent,
    FootThreeSidesViewSimpleComponent,
    FootThreeSidesViewComplexComponent,
    FootBigBonesSimpleComponent,
    FootBigBonesComplexComponent,
    FootBigJointsSimpleComponent,
    FootBigJointsComplexComponent,
    FootBigTendonsSimpleComponent,
    FootBigTendonsComplexComponent
  ],
  exports: [
    FeetSimpleComponent,
    FootThreeSidesViewSimpleComponent,
    FootThreeSidesViewComplexComponent,
    FootBigBonesSimpleComponent,
    FootBigBonesComplexComponent,
    FootBigJointsSimpleComponent,
    FootBigJointsComplexComponent,
    FootBigTendonsSimpleComponent,
    FootBigTendonsComplexComponent
  ]
})
export class FeetLocalizersModule {}
