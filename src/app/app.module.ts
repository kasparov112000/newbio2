import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { Home2Module } from './home2/home2.module';
import { Home3Module } from './home3/home3.module';
import { RouterModule, Routes } from '@angular/router';
import { ProgressInterceptor } from './shared/interceptors/progress.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  FooterComponent,
  HeaderComponent,
  AppMyNavComponent,
  SharedModule
} from './shared';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatMenuModule
} from '@angular/material';
import { ProgressBarService } from './core/shared/progress-bar.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [ AppComponent, AppMyNavComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
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
export class AppModule { }
