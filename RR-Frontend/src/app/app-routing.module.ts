import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './shared/unauthorized/configuration/configuration.component';
import { LoginComponent } from './shared/unauthorized/login/login.component';

const routes: Routes = [
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
