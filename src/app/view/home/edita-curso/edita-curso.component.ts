import { NotificationsService } from 'angular2-notifications';
import { delay } from 'q';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from './../../../service/curso.service';
import { Curso } from './../../../model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edita-curso',
  templateUrl: './edita-curso.component.html',
  styleUrls: ['./edita-curso.component.css']
})
export class EditaCursoComponent implements OnInit {

  curso: Curso;
  id: number;

  constructor(private service: CursoService, private route: ActivatedRoute,
    private router: Router, private notificacao: NotificationsService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.findById(this.id).subscribe(res => {
      if (res.success) {
        this.curso = res.conteudo;
      }
    });
  }

  cancelar() {
    this.router.navigate(['apisys/cursos']);
  }

  onSubmit(f) {
    this.service.save(this.curso).subscribe(res => {
      if (res.success) {
        this.notificacao.success('Curso Alterado');
        this.router.navigate(['apisys/cursos']);
      }
    });
  }

}
