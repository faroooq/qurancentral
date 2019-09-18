import { Injectable } from '@angular/core';
import { Adapter } from 'src/adapters/adapter';
import { SurahIntroInfo } from 'src/app/models/surahintro.info.model';

@Injectable()
export class SurahIntroAdapter implements Adapter<SurahIntroInfo> {

    adapt(item: any): SurahIntroInfo {
        return new SurahIntroInfo(
            item.chapter_info
        );
    }
}