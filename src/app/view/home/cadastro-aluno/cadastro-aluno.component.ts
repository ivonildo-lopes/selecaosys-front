import { CursoService } from './../../../service/curso.service';
import { Aluno } from './../../../model/aluno';
import { Router } from '@angular/router';
import { AlunoService } from './../../../service/aluno.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { delay } from 'q';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno: Aluno;

  listaCurso: Array<Object> = new Array<Object>();
  status: Array<Object> = new Array<Object>();

  constructor(private service: AlunoService, private router: Router,
    private cursoService: CursoService, private notificacao: NotificationsService) {
    this.aluno = new Aluno();
    this.status.push({ id: 'Matriculado', descricao: 'MATRICULADO' });
    this.status.push({ id: 'Trancado', descricao: 'TRANCADO' });
    this.status.push({ id: 'jubilado', descricao: 'JUBILADO' });
  }

  ngOnInit() {
    this.populaListaCurso();
  }

  cancelar() {
    this.router.navigate(['apisys/alunos']);
  }

  onSubmit(f) {
    this.service.save(this.aluno).subscribe(res => {
      if (res.success) {
        this.notificacao.success('Aluno cadastrado');
        // delay(3000);
        this.router.navigate(['apisys/alunos']);
      }
    });
  }

  populaListaCurso() {
    this.cursoService.findAll().subscribe(res => {
      res.conteudo.forEach(item => {
        this.listaCurso.push({
          id: item.id,
          nome: item.nomeCurso,
          object: item
        });
      });
    });
  }

}
