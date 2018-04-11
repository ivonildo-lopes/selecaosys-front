import { Aba } from './../abas/aba';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  @Input() abas: Array<Aba>;
  constructor() { }

  ngOnInit() {
  }

}
