import { ChapterInfo } from './surahintro.info.model';

export class SurahList {

    constructor(
        public code: number,
        public status: string,
        public surahListData: SurahListData
    ) {}
}

export class SurahListData {
    constructor(
        public number: number,
        public name: string,
        public englishName: string,
        public englishNameTranslation: string,
        public numberOfAyahs: number,
        public revelationType: string,
        public text: string
    ) { }
}