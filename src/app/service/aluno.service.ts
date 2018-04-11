import { Aluno } from './../model/aluno';
import { Http } from '@angular/http';

import { MessageTO } from './../model/message.to';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunoService extends ApiService {

  constructor(private httpChild: Http) {
    super(httpChild);
  }

  findAll(): Observable<MessageTO> {
    return this.get('aluno').map(res => res);
  }

  findById(id: number): Observable<MessageTO> {
    return this.get('aluno/id/' + id).map(res => res);
  }

  deletar(id: number): Observable<MessageTO> {
    return this.delete('aluno/' + id).map(res => res);
  }

  save(aluno: Aluno): Observable<MessageTO> {
    return this.post('aluno/', aluno).map(res => res);
  }

  update(id: number, aluno: Aluno): Observable<MessageTO> {
    return this.put('aluno/' + id, aluno).map(res => res);
  }

}
