import { Component, OnInit } from '@angular/core';

import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.css']
})
export class AddPessoaComponent implements OnInit {
  pessoa = {
    id: null,
    nome: '',
    admissao: null,
    published: false
  };
  submitted = false;
  constructor(private pessoaService: PessoaService) { }
  ngOnInit(): void {
  }
  savePessoa(): void {
    const data = {
      id: this.pessoa.id,
      nome: this.pessoa.nome,
      admissao: this.pessoa.admissao
    };
    this.pessoaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newPessoa(): void {
    this.submitted = false;
    this.pessoa = {
      id: null,
      nome: '',
      admissao: null,
      published: false
    };
  }
}
