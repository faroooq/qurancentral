import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, forkJoin } from 'rxjs';
import { map, filter, scan, retry, catchError } from 'rxjs/operators';
import { SurahList } from '../models/surahlist.model';
import { SurahAdapter } from 'src/adapters/surah.adapter';
import { SurahIntroInfo } from '../models/surahintro.info.model';
import { SurahIntroAdapter } from 'src/adapters/surahintro.adapter';

// const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
// headers.set('Access-Control-Allow-Origin', '*');
// headers.set('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS');
// headers.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Accept-Encoding, Authorization, X-Requested-With');

@Injectable()
export class QuranService {

    quran_path = '../../assets/db/';
    chapterInfo = '../../assets/db/moududi_intro.json';

    constructor(
        private http: HttpClient,
        private surahAdapter: SurahAdapter,
        private surahIntroAdapter: SurahIntroAdapter) { }

    getSurahList(surah_name): Observable<any> {

        let quran = this.http.get(this.quran_path + surah_name + '.json').pipe(
            map((data) => {
                // console.log('Data : ' + JSON.stringify(data));
                // return this.surahAdapter.adapt(data);
                return data;
            }),
        );
        // let suraIntroList = this.http.get(this.chapterInfo).pipe(
        //     map((data) => {
        //         // return this.surahIntroAdapter.adapt(data);
        //         // console.log("Chapter Info: " + JSON.stringify(data));
        //         return data;
        //     }),
        // );
        return forkJoin(quran);
        // return suraList;
    }

    // getSurah(): Observable<SurahIntroInfo> {

    //     return this.http.get(this.chapterInfo).pipe(
    //         map((data: SurahIntroInfo) => {
    //             return data;
    //         }),
    //     );
    // }
}

