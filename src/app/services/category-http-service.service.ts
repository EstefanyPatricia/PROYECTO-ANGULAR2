import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoriesModel } from '../entities/categories.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryHttpServiceService {
  readonly API_URL ="https://api.escuelajs.co/api/v1/categories";

  constructor(private httpClient: HttpClient) {}


  //Obtener
  getAll(): Observable<CategoriesModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<CategoriesModel>(url);
  }

//obtinen uno
  getOne(id:CategoriesModel['id']):Observable<CategoriesModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<CategoriesModel>(url);
  }

  //crear
  store(product:any):Observable<CategoriesModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<CategoriesModel>(url, product)
  }

  //actualizar
  update(id:CategoriesModel['id'], product:CategoriesModel):Observable<CategoriesModel>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<CategoriesModel>(url, product)
  }

  //eliminar
  destroy(id:CategoriesModel['id']):Observable<any>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: {rta:boolean}) =>{
      return response.rta;
    })
    );
  }

}

