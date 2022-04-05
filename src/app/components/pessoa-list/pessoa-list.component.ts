import { Component, OnInit } from '@angular/core';

import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  pessoas: any;
  currentPessoa = null;
  currentIndex = -1;
  id = null;
  constructor(private pessoaService: PessoaService) { }
  ngOnInit(): void {
    this.retrievePessoa();
  }
  retrievePessoa(): void {
    this.pessoaService.getAll()
      .subscribe(
        data => {
          this.pessoas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrievePessoa();
    this.currentPessoa = null;
    this.currentIndex = -1;
  }
  setActivePessoa(pessoa: null, index: number): void {
    this.currentPessoa = pessoa;
    this.currentIndex = index;
  }
  removePessoa(): void {
    this.pessoaService.delete(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.retrievePessoa();
        },
        error => {
          console.log(error);
        });
  }
  searchPessoa(): void {
    this.pessoaService.findByPessoa(this.id)
      .subscribe(
        data => {
          this.pessoas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}