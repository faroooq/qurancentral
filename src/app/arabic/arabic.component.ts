import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-arabic',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.scss']
})
export class ArabicComponent implements OnInit {

  constructor(private meta: Meta, private title: Title ) {
  }

  ngOnInit() {
  }

}
