import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './main-page/imprint/imprint.component';
import { PolicyComponent } from './main-page/policy/policy.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'policy', component: PolicyComponent },
];
