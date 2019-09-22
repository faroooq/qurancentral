import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { QuranService } from '../../services/quran.service';
import { SurahList } from '../../models/surahlist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quran-left',
  templateUrl: './quran-left.component.html',
  styleUrls: ['./quran-left.component.scss']
})

export class QuranLeftComponent implements OnInit {
  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  isThemeDark: Observable<boolean>;
  selected: string;
  formatLabel: string;

  chapter: string;

  chapters: SurahList[] = [];

  public constructor(
    private quranservice: QuranService, 
    private themeService: ThemeService,
    public router: Router) { }

  public ngOnInit(): void {
    this.isThemeDark = this.themeService.isThemeDark;

    this.quranservice.getSurahList().subscribe((data) => {
      for (var i = 0; i < data[0].data.length; i++) {
        this.chapters.push(new SurahList(
          data[0].data[i].number, data[0].data[i].name,
          data[0].data[i].englishName, data[0].data[i].englishNameTranslation,
          data[0].data[i].numberOfAyahs, data[0].data[i].revelationType));
      }
    });
  }

  goSurah(chapter: string) {
    this.router.navigate(['quran', this.chapter]);
    console.log('selected :: ' + this.chapter);
  }

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
