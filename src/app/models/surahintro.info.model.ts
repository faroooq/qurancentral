

export class SurahIntroInfo {

    constructor(
        public chapterInfo: ChapterInfo[]
    ) { }
}


export class ChapterInfo {
    constructor(
        public chapterId: number,
        public languageName: string,
        public shortText: string,
        public source: string,
        public text: string,
    ) { }
}