import { AddPessoaComponent } from './components/add-pessoa/add-pessoa.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPessoaComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
