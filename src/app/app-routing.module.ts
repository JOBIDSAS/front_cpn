import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component'
import {HomeComponent} from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AvisComponent } from './avis/avis.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: VideoComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'cpn', loadChildren: () => import('./cpn/cpn.module').then(m => m.CpnModule) },
  { path: '**',component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
