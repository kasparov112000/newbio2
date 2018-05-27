import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { Home2Module } from './home2/home2.module';
import { Home3Module } from './home3/home3.module';
import { RouterModule, Routes } from '@angular/router';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppMyNavComponent } from './app-my-nav/app-my-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { FirstPageComponent } from './first-page/first-page.component';
import { AppMyDashboardComponent } from './my-dashboard/my-dashboard.component';


@NgModule({
  declarations: [AppMyDashboardComponent, AppComponent, FooterComponent, HeaderComponent, AppMyNavComponent, FirstPageComponent],
  imports: [

    
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    Home2Module,
    Home3Module,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
