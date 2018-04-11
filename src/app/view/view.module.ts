import { CursoService } from './../service/curso.service';
import { AlunoService } from './../service/aluno.service';

import { VersaoService } from './../service/versao.service';
import { BaseService } from './../service/base.service';
import { ComponentModule } from './../components/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from '../service/api.service';

import { HomeComponent } from './home/home.component';
import { ListagemCursoComponent } from './home/listagem-curso/listagem-curso.component';
import { ListagemAlunoComponent } from './home/listagem-aluno/listagem-aluno.component';
import { CadastroAlunoComponent } from './home/cadastro-aluno/cadastro-aluno.component';
import { CadastroCursoComponent } from './home/cadastro-curso/cadastro-curso.component';
import { EditaAlunoComponent } from './home/edita-aluno/edita-aluno.component';
import { EditaCursoComponent } from './home/edita-curso/edita-curso.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  providers: [
    ApiService,
    VersaoService,
    CursoService,
    AlunoService
  ],
  declarations: [
    HomeComponent,
    ListagemCursoComponent,
    ListagemAlunoComponent,
    CadastroAlunoComponent,
    CadastroCursoComponent,
    EditaAlunoComponent,
    EditaCursoComponent
  ]
})
export class ViewModule { }
