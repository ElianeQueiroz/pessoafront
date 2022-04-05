import { RouterModule, Routes } from '@angular/router';

import { AddPessoaComponent } from './components/add-pessoa/add-pessoa.component';
import { NgModule } from '@angular/core';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoaListComponent },
  { path: 'add', component: AddPessoaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }