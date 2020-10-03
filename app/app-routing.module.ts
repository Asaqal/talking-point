import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, RouterEvent, NavigationStart } from '@angular/router';
import { InputSpeechComponent } from './input-speech/input-speech.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'input-speech', component: InputSpeechComponent},
  {path: '**', redirectTo: '/landing-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
