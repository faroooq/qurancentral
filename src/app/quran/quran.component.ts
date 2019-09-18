import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { QuranService } from '../services/quran.service';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.scss']
})

export class QuranComponent implements OnInit {
  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  isThemeDark: Observable<boolean>;
  selected: string;
  formatLabel: string;
  
  chapter: string;

  chapters: Array<any>;

  public constructor(private bpo: BreakpointObserver, private themeService: ThemeService) { }

  public ngOnInit(): void {
    this.isThemeDark = this.themeService.isThemeDark;

    const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
    this.bpo.observe(breakpoints)
      .pipe(map(bst => bst.matches))
      .subscribe(matched => {
        this.determineSidenavMode();
        this.determineLayoutGap();
      });
    this.chapters = [
      { number: '1', name: 'Surah Baqara' },
      { number: '2', name: 'Surah Baqara' },
      { number: '3', name: 'Surah Baqara' },
      { number: '4', name: 'Surah Baqara' },
      { number: '5', name: 'Surah Baqara' },
      { number: '6', name: 'Surah Baqara' },
      { number: '7', name: 'Surah Baqara' },
      { number: '8', name: 'Surah Baqara' },
      { number: '9', name: 'Surah Baqara' },
      { number: '10', name: 'Surah Baqara' },
      { number: '11', name: 'Surah Baqara' },
      { number: '12', name: 'Surah Baqara' },
      { number: '13', name: 'Surah Baqara' },
      { number: '14', name: 'Surah Baqara' },
      { number: '15', name: 'Surah Baqara' },
      { number: '16', name: 'Surah Baqara' },
      { number: '17', name: 'Surah Baqara' },
      { number: '18', name: 'Surah Baqara' },
      { number: '19', name: 'Surah Baqara' },
      { number: '20', name: 'Surah Baqara' },
      { number: '21', name: 'Surah Baqara' },
      { number: '22', name: 'Surah Baqara' },
      { number: '23', name: 'Surah Baqara' },
      { number: '24', name: 'Surah Baqara' },
      { number: '25', name: 'Surah Baqara' },
      { number: '26', name: 'Surah Baqara' },
      { number: '27', name: 'Surah Baqara' },
      { number: '28', name: 'Surah Baqara' },
      { number: '29', name: 'Surah Baqara' },
      { number: '30', name: 'Surah Baqara' }
    ]
  }

  goSurah() {
    console.log('selected :: ' + this.chapter);
  }


  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  private determineSidenavMode(): void {
    if (
      this.isExtraSmallDevice() ||
      this.isSmallDevice()
    ) {
      this.fixedInViewport = false;
      this.mode = 'over';
      this.opened = false;
      return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
  }

  private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
      this.layoutGap = '0';
      return;
    }

    this.layoutGap = '64';
  }

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small)
  }
}
