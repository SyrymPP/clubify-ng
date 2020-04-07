import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubItemComponent } from './club-item/club-item.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { LoginComponent } from './login/login.component';
import { EditorPanelComponent } from './editor-panel/editor-panel.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ClubListComponent,
    ClubItemComponent,
    ClubDetailComponent,
    LoginComponent,
    EditorPanelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
