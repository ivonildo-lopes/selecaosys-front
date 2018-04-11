import { Curso } from './../model/curso';
import { Http } from '@angular/http';

import { MessageTO } from './../model/message.to';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CursoService extends ApiService {

  constructor(private httpChild: Http) {
    super(httpChild);
  }

  findAll(): Observable<MessageTO> {
    return this.get('curso').map(res => res);
  }

  findById(id: number): Observable<MessageTO> {
    return this.get('curso/id/' + id).map(res => res);
  }

  deletar(id: number): Observable<MessageTO> {
    return this.delete('curso/' + id).map(res => res);
  }

  save(curso: Curso): Observable<MessageTO> {
    return this.post('curso/', curso).map(res => res);
  }

}
