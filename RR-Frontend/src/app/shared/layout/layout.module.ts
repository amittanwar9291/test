import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicComponentOutletDirective } from '@directives/dynamic-component-outlet.directive';
import { DynamicComponentOutletComponent } from './dynamic-component-outlet/dynamic-component-outlet.component';

import {
  BottomHeaderComponent,
  TopHeaderComponent,
  SlideComponent,
  LeftMenuComponent,
  ContainerComponent,
  TopNavigationComponent,
  SlideHeaderComponent,
  SlideNavigationComponent
} from '.';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { ErrorToastComponent } from '@layout/error-toast/error-toast.component';
import { SuccessToastComponent } from './success-toast/success-toast.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ResizableTooltipDirective } from '@directives/resizable-tooltip.directive';
import { ResizableTooltipModule } from '@controls/resizable-tooltip/resizable-tooltip.module';
import { PipeModule } from '@pipes/pipe.module';
import { PageNumberPipe } from '@pipes/page-number.pipe';

import { SidebarModule } from 'primeng/sidebar';
import { SearchBarComponent } from '@layout/search-bar/search-bar.component';
import { CommonImportsModule } from '../common-imports/common-imports.module';
import { SearchBarZoomDirective } from '@layout/search-bar/search-bar-zoom.directive';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    InfoIconModule,
    DropdownModule,
    FormsModule,
    SidebarModule,
    CommonImportsModule,
    ScrollPanelModule,
    ResizableTooltipModule,
    PipeModule
  ],
  declarations: [
    BottomHeaderComponent,
    TopHeaderComponent,
    SlideComponent,
    LeftMenuComponent,
    ContainerComponent,
    SlideNavigationComponent,
    TopNavigationComponent,
    PageNumberPipe,
    SlideHeaderComponent,
    DynamicComponentOutletComponent,
    DynamicComponentOutletDirective,
    ResizableTooltipDirective,
    ErrorToastComponent,
    SuccessToastComponent,
    SearchBarComponent,
    SearchBarZoomDirective
  ],
  exports: [
    BottomHeaderComponent,
    TopHeaderComponent,
    SlideComponent,
    LeftMenuComponent,
    ContainerComponent,
    SlideNavigationComponent,
    TopNavigationComponent,
    SlideHeaderComponent,
    DynamicComponentOutletComponent,
    ErrorToastComponent
  ]
})
export class LayoutModule {}
