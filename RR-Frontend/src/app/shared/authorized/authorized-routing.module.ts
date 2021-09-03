import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '@services/shared/guards/admin.guard';

import { ContainerComponent } from '@layout/container/container.component';

import { ReportListComponent } from '@sharedPages/report-list/report-list.component';
import { UserListComponent } from '@sharedPages/user-list/user-list.component';
import { UserProfileComponent } from '@sharedPages/user-profile/user-profile.component';
import { AuthorizedComponent } from './authorized.component';
import { PresetListComponent } from '@sharedPages/preset-list/preset-list.component';
import { CenterspecificPreferencesComponent } from '@sharedPages/centerspecific-preferences/centerspecific-preferences.component';
import { HelpComponent } from '@sharedPages/help/help.component';
import { AboutrrComponent } from '@sharedPages/aboutrr/aboutrr.component';
import { SettingsComponent } from '@sharedPages/settings/settings.component';
import { StatisticsComponent } from '@sharedPages/statistics/statistics.component';
import { TrackingStatisticsComponent } from '@sharedPages/tracking-statistics/tracking-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedComponent,
    children: [
      {
        path: 'mammaMRT',
        loadChildren: () => import('./../../pages/mammaMRT/mammaMRT.module').then(m => m.MammaMRTModule)
      },
      {
        path: 'shoulderMRT',
        loadChildren: () => import('./../../pages/shoulderMRT/shoulderMRT.module').then(m => m.ShoulderMRTModule)
      },
      {
        path: 'kneeMRT',
        loadChildren: () => import('./../../pages/kneeMRT/kneeMRT.module').then(m => m.KneeMRTModule)
      },
      {
        path: 'spineMRT',
        loadChildren: () => import('./../../pages/spineMRT/spineMRT.module').then(m => m.SpineMRTModule)
      },
      {
        path: 'cardioMRT',
        loadChildren: () => import('./../../pages/cardioMRT/cardioMRT.module').then(m => m.CardioMRTModule)
      },
      {
        path: 'thoraxCT',
        loadChildren: () => import('./../../pages/thoraxCT/thoraxCT.module').then(m => m.ThoraxCTModule)
      },
      {
        path: 'hipMRT',
        loadChildren: () => import('./../../pages/hipMRT/hipMRT.module').then(m => m.HipMRTModule)
      },
      {
        path: 'angiographyMRT',
        loadChildren: () => import('./../../pages/angiographyMRT/angiographyMRT.module').then(m => m.AngiographyMRTModule)
      },
      {
        path: 'angiographyCT',
        loadChildren: () => import('./../../pages/angiographyCT/angiographyCT.module').then(m => m.AngiographyCTModule)
      },
      {
        path: 'handMRT',
        loadChildren: () => import('./../../pages/handMRT/handMRT.module').then(m => m.HandMRTModule)
      },
      {
        path: 'spineCT',
        loadChildren: () => import('./../../pages/spineCT/spineCT.module').then(m => m.SpineCTModule)
      },
      {
        path: 'elbowMRT',
        loadChildren: () => import('./../../pages/elbowMRT/elbowMRT.module').then(m => m.ElbowMRTModule)
      },
      {
        path: 'pelvisMRT',
        loadChildren: () => import('./../../pages/pelvisMRT/pelvisMRT.module').then(m => m.PelvisMRTModule)
      },
      {
        path: 'feetMRT',
        loadChildren: () => import('./../../pages/feetMRT/feetMRT.module').then(m => m.FeetMRTModule)
      },
      {
        path: 'mammaMX',
        loadChildren: () => import('./../../pages/mammaMX/mammaMX.module').then(m => m.MammaMXModule)
      },
      {
        path: 'abdomenMRT',
        loadChildren: () => import('./../../pages/abdomenMRT/abdomenMRT.module').then(m => m.AbdomenMRTModule)
      },
      {
        path: 'thoraxMRT',
        loadChildren: () => import('./../../pages/thoraxMRT/thoraxMRT.module').then(m => m.ThoraxMRTModule)
      },
      {
        path: 'neckMRT',
        loadChildren: () => import('./../../pages/neckMRT/neckMRT.module').then(m => m.NeckMRTModule)
      },
      {
        path: 'headMRT',
        loadChildren: () => import('./../../pages/headMRT/headMRT.module').then(m => m.HeadMRTModule)
      },
      {
        path: 'headCT',
        loadChildren: () => import('./../../pages/headCT/headCT.module').then(m => m.HeadCTModule)
      },
      {
        path: 'abdomenCT',
        loadChildren: () => import('./../../pages/abdomenCT/abdomenCT.module').then(m => m.AbdomenCTModule)
      },
      {
        path: '',
        component: ContainerComponent,
        children: [
          { path: '', component: ReportListComponent, pathMatch: 'full' },
          { path: 'reports', component: ReportListComponent }
        ]
      },
      {
        path: 'users',
        component: ContainerComponent,
        children: [
          { path: '', component: UserListComponent, canActivate: [AdminGuard] },
          { path: 'new', component: UserProfileComponent, canActivate: [AdminGuard] },
          { path: ':id', component: UserProfileComponent }
        ]
      },
      {
        path: 'presets',
        component: ContainerComponent,
        children: [{ path: '', component: PresetListComponent }]
      },
      {
        path: 'centerspecificPreferences',
        component: ContainerComponent,
        children: [{ path: '', component: CenterspecificPreferencesComponent, canActivate: [AdminGuard] }]
      },
      {
        path: 'statistics',
        component: ContainerComponent,
        children: [{ path: '', component: StatisticsComponent }]
      },
      {
        path: 'settings',
        component: ContainerComponent,
        children: [{ path: '', component: SettingsComponent, canActivate: [AdminGuard] }]
      },
      {
        path: 'help',
        component: ContainerComponent,
        children: [{ path: '', component: HelpComponent }]
      },
      {
        path: 'aboutrr',
        component: ContainerComponent,
        children: [{ path: '', component: AboutrrComponent }]
      },
      {
        path: 'tracking-statistics',
        component: ContainerComponent,
        children: [{ path: '', component: TrackingStatisticsComponent, canActivate: [AdminGuard] }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule {}
