import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllTemas() {
    return this.http.get('http://localhost:8080/tema', this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(`http://localhost:8080/tema/${id}`,this.token)
  }

  postTema(tema: Tema) {
    return this.http.post('http://localhost:8080/tema', tema, this.token)
  }
}
