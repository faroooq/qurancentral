import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, forkJoin } from 'rxjs';
import { map, filter, scan, retry, catchError } from 'rxjs/operators';
import { SurahList } from '../models/surahlist.model';

// const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
// headers.set('Access-Control-Allow-Origin', '*');
// headers.set('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS');
// headers.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Accept-Encoding, Authorization, X-Requested-With');

@Injectable()
export class QuranService {

    quran_path = '../../assets/db/quran-trans/';
    chapterInfo = 'https://raw.githubusercontent.com/faroooq/qc_db/master/quran-translations/ar/muyassar/2_baqara.json';
    chapterInfo1 = 'https://raw.githubusercontent.com/faroooq/qc_db/master/quran-translations/en/sahih/2_baqara.json';
    // chapterInfo = '../../assets/db/quran-trans/baqara.json';
    surahList = 'https://raw.githubusercontent.com/faroooq/qc_db/master/surah-list.json';

    constructor(private http: HttpClient) { }

    getSurahInfo(surahName, translation): Observable<any> {
        if (translation === null || translation === undefined) {
            translation = 'ar_muyassar';
        }
        let arabic = this.http.get(this.chapterInfo).pipe(
            map((data: any) => {
                // console.log(data);
                return data;
            }),
        );
        let english = this.http.get(this.chapterInfo1).pipe(
            map((data: any) => {
                // console.log(data);
                return data;
            }),
        );
        return forkJoin(arabic, english);
    }

    getSurahList(): Observable<any> {
        let surahs = this.http.get(this.surahList).pipe(
            map((data: any) => {
                return data;
            }),
        );
        return forkJoin(surahs);
    }
}

