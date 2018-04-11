import { delay } from 'q';
import { NotificationsService } from 'angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from './../../../service/aluno.service';
import { CursoService } from './../../../service/curso.service';
import { Aluno } from './../../../model/aluno';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/curso';

@Component({
  selector: 'app-edita-aluno',
  templateUrl: './edita-aluno.component.html',
  styleUrls: ['./edita-aluno.component.css']
})
export class EditaAlunoComponent implements OnInit {

  aluno: Aluno;
  id: number;
  campo = 1;
  campoStatus = 1;

  listaCurso: Array<Object> = new Array<Object>();
  status: Array<Object> = new Array<Object>();

  constructor(private service: AlunoService, private router: Router,
    private cursoService: CursoService, private route: ActivatedRoute,
    private notificacao: NotificationsService) {
    this.aluno = new Aluno();
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.findById(this.id).subscribe(res => {
      if (res.success) {
        this.aluno = res.conteudo;
      }
    });
  }

  cancelar() {
    this.router.navigate(['apisys/alunos']);
  }

  onSubmit(f) {
    this.service.update(this.id, this.aluno).subscribe(res => {
      if (res.success) {
        this.notificacao.success('Aluno alterado');
        this.router.navigate(['apisys/alunos']);
      }
    });
  }

  populaListaCurso() {
    this.listaCurso = new Array<Object>();
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

  mudaOpcao() {
    this.campo = 2;
    this.aluno.curso = new Curso();
    this.populaListaCurso();
  }

  mudaOpcaoStatus() {
    this.campoStatus = 2;
    this.status.push({ id: 'Matriculado', descricao: 'MATRICULADO' });
    this.status.push({ id: 'Trancado', descricao: 'TRANCADO' });
    this.status.push({ id: 'jubilado', descricao: 'JUBILADO' });
  }

}
