export class SurahInfo {
    index: Array<string>;
    arabic: Array<string>;
    english: Array<string>;

    constructor(index, arabic, english) {
        this.index = index;
        this.arabic = arabic;
        this.english = english;
    }
}