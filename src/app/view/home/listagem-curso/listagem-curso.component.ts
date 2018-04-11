import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../service/curso.service';

@Component({
  selector: 'app-listagem-curso',
  templateUrl: './listagem-curso.component.html',
  styleUrls: ['./listagem-curso.component.css']
})
export class ListagemCursoComponent implements OnInit {

  public cabecalho: string[] = ['id', 'Cod Curso', 'Curso', 'Instituição'];

  cursos: Array<Object> = new Array<Object>();

  public buttonsCadastro = {
    editar: true,
    excluir: true,
    adicionar: false
  };

  constructor(private service: CursoService, private router: Router) { }

  ngOnInit() {
    this.service.findAll().subscribe(res => {
      this.populaLista(res);
    });
  }

  onDelete(curso) {
    this.service.deletar(curso).subscribe(res => {
      this.populaLista(res);
    });
  }

  onEdit(curso) {
     this.router.navigate(['apisys/cursos/' + curso.id]);
  }

  novo() {
    this.router.navigate(['apisys/cursos/novo']);
  }

  onLinhaTable(object) {
    console.log(object);
  }


  populaLista(res) {
    this.cursos = new Array<Object>();
    res.conteudo.forEach(item => {
      this.cursos.push({
        id: item.id,
        codigoCurso: item.codigoCurso,
        nomeCurso: item.nomeCurso,
        instituicaoEnsino: item.instituicaoEnsino,
      });
    });

  }
}
