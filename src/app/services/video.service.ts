import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { SurahList } from '../models/surahlist.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(public http: HttpClient) { }

  book1 = '../../assets/db/mabook1.json';
  book2 = '../../assets/db/mabook2.json';
  book3 = '../../assets/db/mabook3.json';


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
