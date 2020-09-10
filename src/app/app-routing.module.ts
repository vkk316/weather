import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTownComponent } from './list-town/list-town.component';
import { TownDetailComponent } from './town-detail/town-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/towns', pathMatch: 'full' },
  { path: 'detail/:code', component: TownDetailComponent },
  { path: 'towns', component: ListTownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }