import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes = [
  {path : "home", component: ExperienceComponent},
  {path : "project", component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
