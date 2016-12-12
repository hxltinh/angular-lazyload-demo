import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'crisis', loadChildren: './crisis/crisis.module#CrisisModule' },
  { path: 'hero', loadChildren: './hero/hero.module#HeroModule' },
  { path: 'simple', loadChildren: './simple/simple.module#SimpleModule' }
];
