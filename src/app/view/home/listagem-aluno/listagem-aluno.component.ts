import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../service/aluno.service';

@Component({
  selector: 'app-listagem-aluno',
  templateUrl: './listagem-aluno.component.html',
  styleUrls: ['./listagem-aluno.component.css']
})
export class ListagemAlunoComponent implements OnInit {

  public cabecalho: string[] = ['ID', 'Nome', 'Curso', 'Matricula', 'Semestre', 'Status'];

  alunos: Array<Object> = new Array<Object>();


  public buttonsCadastro = {
    editar: true,
    excluir: true,
    adicionar: false
  };

  constructor(private service: AlunoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.findAll().subscribe(res => {
      this.populaLista(res);
    });
  }

  onDelete(aluno) {

    if (window.confirm('Deseja Realmente deletar ?')) {
      this.service.deletar(aluno).subscribe(res => {
        this.populaLista(res);
      });

    }
  }

  onEdit(aluno) {
    this.router.navigate(['apisys/alunos/' + aluno.id]);
  }

  novo() {

    this.router.navigate(['apisys/alunos/novo']);
  }

  onLinhaTable(object) {
    console.log(object);
  }


  populaLista(res) {
    this.alunos = new Array<Object>();
    res.conteudo.forEach(item => {
      this.alunos.push({
        id: item.id,
        nome: item.nome.toUpperCase(),
        curso: item.curso.nomeCurso.toUpperCase(),
        matricula: item.matricula,
        semestre: item.semestre,
        status: item.status.toUpperCase(),
      });
    });

  }
}
