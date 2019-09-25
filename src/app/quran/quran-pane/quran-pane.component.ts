import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SurahInfo } from 'src/app/models/surahinfo.model';
import { Router } from '@angular/router';
import { QuranService } from 'src/app/services/quran.service';

@Component({
  selector: 'app-quran-pane',
  templateUrl: './quran-pane.component.html',
  styleUrls: ['./quran-pane.component.scss']
})
export class QuranPaneComponent implements OnInit, OnChanges {

  @Input("surah") chapter: number;
  surahList: SurahInfo[] = [];

  constructor(
    public router: Router,
    public quranService: QuranService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.router.navigate(['quran', ++this.chapter]);
    this.surahList = [];

    this.quranService.getSurahInfo(this.chapter, 'ar_muyassar').subscribe((data: SurahInfo) => {
      for (var i = 0; data[0].aya.length, data[1].aya.length; i++) {
        // console.log(data[0].aya[i])
        if (data[0].aya[i] === undefined || data[1].aya[i] === undefined) {
          break;
        }
        let index = data[0].aya[i].index;
        // console.log(index)
        let arabic = data[0].aya[i].text;
        // console.log(arabic)
        let english = data[1].aya[i].text;
        this.surahList.push(new SurahInfo(index, arabic, english));
        // this.jokeCreated.emit(new SurahInfo(index, arabic, english));
      }
    });
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return 'V' + Math.round(value / 1000);
    }
    return value;
  }
}
