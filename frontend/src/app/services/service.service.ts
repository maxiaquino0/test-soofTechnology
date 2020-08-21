import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CantanteModel } from '../models/cantante.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user: any;
  url: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
    this.user = environment.user;
    this.url = environment.urlBackend;
  }

  login(username: string, password: string) {

    return this.httpClient.post(`${this.url}/auth`, {UserName: username, Password: password})
      .pipe(map( res => {
        console.log(res);
        if (res == true) {
          sessionStorage.setItem('userLogin', JSON.stringify(res));
        }
        return res;
      }
      ));
  }

  logout(){
    sessionStorage.removeItem('userLogin');
    this.router.navigateByUrl('/login');
  }

  isAuthenticate(): boolean {

    if (!sessionStorage.getItem('userLogin')) {
      return false;
    } else {
      return true;
    }
  }


  getCantantes() {
    return this.httpClient.get(`${this.url}/cantantes`);
  }

  postCantante(cantante: CantanteModel) {
    return this.httpClient.post(`${this.url}/cantantes`, cantante);
  }

  getCantanteByKindOfMusic(kindOfMusic: string) {
    return this.httpClient.get(`${this.url}/GetCantantesByKindOfMusic/${kindOfMusic}`);
  }
}
