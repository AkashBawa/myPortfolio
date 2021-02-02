import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstHomeComponent } from './first-home/first-home.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './pages/project/project.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import {TypedTextModule} from 'ngx-typed-text';
import {MainService} from './main.service'
import {MatTabsModule} from '@angular/material/tabs';
import { AbilityComponent } from './pages/ability/ability.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import {MatCardModule} from '@angular/material/card';
import {AngularFittextModule} from 'angular-fittext';
@NgModule({
  declarations: [
    AppComponent,
    FirstHomeComponent,
    TopNavBarComponent,
    ExperienceComponent,
    ProjectComponent,
    MainNavComponent,
    AbilityComponent,
    SkillsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // TypedTextModule,
    MatTabsModule,
    MatCardModule,
    AngularFittextModule
  ],
  providers: [
    // TypewriterService, 
    // TypewriterContent
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
