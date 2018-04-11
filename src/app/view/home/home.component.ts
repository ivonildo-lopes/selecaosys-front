import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listaAlunos() {
    this.router.navigate(['apisys/alunos']);
  }

  listaCursos() {
    this.router.navigate(['apisys/cursos']);
  }

}
