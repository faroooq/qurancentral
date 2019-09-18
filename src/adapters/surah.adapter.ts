import { Injectable } from '@angular/core';
import { Adapter } from 'src/adapters/adapter';
import { SurahList } from 'src/app/models/surahlist.model';

@Injectable()
export class SurahAdapter implements Adapter<SurahList> {

    adapt(item: any): SurahList {
        return new SurahList(
            item.code,
            item.status,
            item.chapter_info
        );
    }
}