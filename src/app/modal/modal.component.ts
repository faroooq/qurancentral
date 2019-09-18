import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // @ViewChild() modalRef: MDBModalRef;

  heading: string;
  content: any;

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {

    // console.log('ModalRef : ' + JSON.stringify(this.modalRef));
  }

}
