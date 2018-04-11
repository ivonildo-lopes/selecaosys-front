import { EditaCursoComponent } from './view/home/edita-curso/edita-curso.component';
import { CadastroCursoComponent } from './view/home/cadastro-curso/cadastro-curso.component';
import { CadastroAlunoComponent } from './view/home/cadastro-aluno/cadastro-aluno.component';
import { HomeComponent } from './view/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListagemAlunoComponent } from './view/home/listagem-aluno/listagem-aluno.component';
import { ListagemCursoComponent } from './view/home/listagem-curso/listagem-curso.component';
import { EditaAlunoComponent } from './view/home/edita-aluno/edita-aluno.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apisys/home', component: HomeComponent },
    { path: 'apisys/alunos', component: ListagemAlunoComponent },
    { path: 'apisys/cursos', component: ListagemCursoComponent },
    { path: 'apisys/alunos/novo', component: CadastroAlunoComponent },
    { path: 'apisys/cursos/novo', component: CadastroCursoComponent },
    { path: 'apisys/alunos/:id', component: EditaAlunoComponent },
    { path: 'apisys/cursos/:id', component: EditaCursoComponent },
];
