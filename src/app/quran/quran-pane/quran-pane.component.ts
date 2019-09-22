import { Component, OnInit } from '@angular/core';
import { QuranService } from '../../services/quran.service';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { SurahInfo } from '../../models/surahinfo.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quran-pane',
  templateUrl: './quran-pane.component.html',
  styleUrls: ['./quran-pane.component.scss']
})
export class QuranPaneComponent implements OnInit {

  surahList: SurahInfo[] = [];
  surahId: number;

  constructor(
    private quranservice: QuranService, 
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.surahId = +params['surahId'];
      console.log(this.surahId)
    });
    // this.isThemeDark = this.themeService.isThemeDark;
    this.quranservice.getSurahInfo('baqara', 'ar_muyassar').subscribe((data: SurahInfo) => {
      for (var i = 0; data[0].aya.length, data[1].aya.length; i++) {
        let index = data[0].aya[i].index;
        // console.log(index)
        let arabic = data[0].aya[i].text;
        // console.log(arabic)
        let english = data[1].aya[i].text;
        this.surahList.push(new SurahInfo(index, arabic, english));
        // console.log(this.surahList)
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
