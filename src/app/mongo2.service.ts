import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class Mongo2Service {

  constructor( private _http: HttpClient) { }


  getProducts() {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    return this._http.post('/api/getProducts', { headers })
      .catch( (error: any) => Observable.throw(error || 'server error'));
  }

  getProduct(id: number) {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    const params = {'id': id};
    return this._http.post('/api/getProduct', { headers, params})
      .catch( (error: any) => Observable.throw(error || 'server error'));
  }
}
