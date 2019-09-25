import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { VERSION } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { SurahInfo } from 'src/app/models/surahinfo.model';
import { QuranService } from 'src/app/services/quran.service';
import { QuranPaneComponent } from '../quran-pane/quran-pane.component';

@Component({
  selector: 'app-quran-main',
  templateUrl: './quran-main.component.html',
  styleUrls: ['./quran-main.component.scss']
})
export class QuranMainComponent implements OnInit {

  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  isThemeDark: Observable<boolean>;
  selected: string;
  formatLabel: string;
  
  surahId: number;
  @Output() getSurahs = new EventEmitter();
  chapterId: string;

  constructor(
    private themeService: ThemeService,
    private bpo: BreakpointObserver,
    private route: ActivatedRoute,
    private quranservice: QuranService,
    public router: Router) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;

    const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
    this.bpo.observe(breakpoints)
      .pipe(map(bst => bst.matches))
      .subscribe(matched => {
        this.determineSidenavMode();
        this.determineLayoutGap();
      });

    this.route.params.forEach((params: Params) => {
      this.surahId = +params['surahId'];
      // console.log(this.surahId)
    });
    this.getSurahInfo(this.surahId.toString());
  }

  getSurahInfo(chapter: string) {
    this.chapterId = chapter;
    // console.log('chapter :  ' + this.chapterId)
    // this.router.navigate(['quran', chapter]);
    // this.getSurahs.emit(chapter);
  }

  toggleDarkTheme(checked: boolean) {
    // console.log('Checked : ' + checked)
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
