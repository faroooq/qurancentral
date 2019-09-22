import { Component, OnInit } from '@angular/core';
import {VERSION} from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-tafsir',
  templateUrl: './tafsir.component.html',
  styleUrls: ['./tafsir.component.scss']
})

export class TafsirComponent implements OnInit { 
  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  isThemeDark: Observable<boolean>;
  modalRef: MDBModalRef;
  chapter: string;
  tafsir = false;
  tafhim = false;
  mariful = false;
  selected: string;
  optionsSelect: Array<any>;
  chapters: Array<any>;

  public constructor(private bpo: BreakpointObserver, private themeService: ThemeService, private modalService: MDBModalService) { }

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
      {number: '1', name: 'Surah Baqara'}
    ]

    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  
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

  openModal(text, number, name) {
    this.modalRef = this.modalService.show(ModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-side modal-top-right',
      containerClass: 'right',
      animated: true,
      data: {
        heading: number + '. ' + name,
        content: { text: text }
      }
    });
    // console.log(text)
  }
}
