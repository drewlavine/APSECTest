import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';
import { BehaviorSubject } from 'rxjs';



const API = "https://jsonplaceholder.typicode.com/photos";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private _loading = new BehaviorSubject<boolean>(true);
  public loading$ = this._loading.asObservable();

  public get loading(): boolean {
    return this._loading.value;
  }

  public set loading(isLoading: boolean) {
    this._loading.next(isLoading);
  }


  constructor(
    private http: HttpClient
  ) { }

  public getPhotos() {
    return this.http.get<Photo[]>(API);

  }
}
