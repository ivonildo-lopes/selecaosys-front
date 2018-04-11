import { delay } from 'q';
import { NotificationsService } from 'angular2-notifications';
import { Curso } from './../../../model/curso';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../service/curso.service';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {


  curso: Curso;

  constructor(private service: CursoService, private router: Router,
    private notificacao: NotificationsService ) {
    this.curso = new Curso();
  }

  ngOnInit() {
  }

  cancelar() {
     this.router.navigate(['apisys/cursos']);
  }

  onSubmit(f) {
    this.service.save(this.curso).subscribe(res => {
      if (res.success) {
        this.notificacao.success('Curso Cadastrado');
        this.router.navigate(['apisys/cursos']);
      }
    });
  }
}
