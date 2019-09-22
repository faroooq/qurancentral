import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(public http: HttpClient) { }

  book1 = '../../assets/db/madina-arabic/mabook1.json';
  book2 = '../../assets/db/madina-arabic/mabook2.json';
  book3 = '../../assets/db/madina-arabic/mabook3.json';


  getMABook1() {
    return this.http.get(`${this.book1}`);
  }

  getMABook2() {
    return this.http.get(`${this.book2}`);
  }

  getMABook3() {
    return this.http.get(`${this.book3}`);
  }
}
