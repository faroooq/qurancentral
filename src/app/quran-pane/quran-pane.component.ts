import { Component, OnInit } from '@angular/core';
import { QuranService } from '../services/quran.service';

@Component({
  selector: 'app-quran-pane',
  templateUrl: './quran-pane.component.html',
  styleUrls: ['./quran-pane.component.scss']
})
export class QuranPaneComponent implements OnInit {

  surahList: any;

  constructor(private quranservice: QuranService) { }

  ngOnInit() {
    this.quranservice.getSurahList('1.fatiha').subscribe((data) => {
      // for (let i = 0; i < data[0].data.length, data[1].chapter_info.length; i++) {
      //   this.surahList.push(new SurahListData(data[0].data[i].number, data[0].data[i].name, data[0].data[i].englishName,
      //     data[0].data[i].englishNameTranslation, data[0].data[i].numberOfAyahs, data[0].data[i].revelationType, data[1].chapter_info[i].text));
      //   // console.log(JSON.stringify(data[1].chapter_info[i].text));
      // }
      // for(let i=0; i< data[0].data.length; i++) {
        
      // }
      this.surahList = data[0];
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
