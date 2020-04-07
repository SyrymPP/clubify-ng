import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { LoginComponent } from './login/login.component';
import { EditorPanelComponent } from './editor-panel/editor-panel.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: ':id', component: ClubListComponent},
    {path: ':id/:club_name', component: ClubDetailComponent},
  ]},
  {path: 'editor', component: EditorPanelComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
