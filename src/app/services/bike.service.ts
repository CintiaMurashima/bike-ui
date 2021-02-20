import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//creando un objeto 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {


  constructor(private http: HttpClient) { }

  //este metodo me retornara todas las bicicletas del API REST
  getBikes(){
    return this.http.get('/server/api/v1/bikes')
  }

  // Este metodo retorna una bike por id 
  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/'+id)
  }

  //este metodo inserta una bike a la DB
  createdBikeRegistration(bike:any){
    let body= JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body , httpOptions)
  }

}
