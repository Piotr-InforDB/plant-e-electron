import { Routes } from '@angular/router';
import {PlongComponent} from "./apps/plong/plong.component";
import {TextComponent} from "./apps/text/text.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'plong', component: PlongComponent },
  { path: 'text', component: TextComponent },
  { path: 'home', component: HomeComponent },
];
