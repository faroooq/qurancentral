import { Component, OnInit, Inject, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { QuranService } from '../services/quran.service';
import { SurahList, SurahListData } from '../models/surahlist.model';
import { SurahIntroInfo, ChapterInfo } from '../models/surahintro.info.model';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalComponent } from '../modal/modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  elements: any[] = [];
  chapterInfo: ChapterInfo;
  surahList: SurahListData[] = [];
  modalRef: MDBModalRef;
  sub: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: any,
    public quranservice: QuranService,
    private modalService: MDBModalService) {
  }

  @HostListener('window: scroll', [])
  onScroll() {
    this.elements.forEach((element) => {
      const scrollTop = this.document.body.scrollTop;
      const elementOffset = element.getBoundingClientRect().top;
      const distance = (elementOffset - scrollTop);
      const clientHeight = this.document.documentElement.clientHeight;
      const breakPoint = clientHeight * 0.9;

      if (distance > breakPoint) {
        element.classList.add('more-padding');
      }

      if (distance < breakPoint) {
        element.classList.remove('more-padding');
      }
    });
  }

  ngOnInit() {
    // this.elements = Array.from(this.document.documentElement.querySelectorAll('.timeline-animated li'));

    // this.sub = this.quranservice.getSurahList('')
    //   .subscribe((data) => {
    //     for (let i = 0; i < data[0].data.length, data[1].chapter_info.length; i++) {
    //       this.surahList.push(new SurahListData(data[0].data[i].number, data[0].data[i].name, data[0].data[i].englishName,
    //         data[0].data[i].englishNameTranslation, data[0].data[i].numberOfAyahs, data[0].data[i].revelationType, data[1].chapter_info[i].text));
    //       // console.log(JSON.stringify(data[1].chapter_info[i].text));
    //     }
    //   });
  }

  // range: any = 0;
  // onRangeValueChange(event: any) {
  //   const value = event.value;
  //   this.range = value;
  // }

  // openModal(text, number, name) {
  //   this.modalRef = this.modalService.show(ModalComponent, {
  //     backdrop: true,
  //     keyboard: true,
  //     focus: true,
  //     show: false,
  //     ignoreBackdropClick: false,
  //     class: 'modal-side modal-top-right',
  //     containerClass: 'right',
  //     animated: true,
  //     data: {
  //       heading: number + '. ' + name,
  //       content: { text: text }
  //     }
  //   });
  //   // console.log(text)
  // }

  // ngOnDestroy() {
  //   // this.sub.unsubscribe();
  // }
}
