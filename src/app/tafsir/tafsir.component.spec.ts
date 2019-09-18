import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafsirComponent } from './tafsir.component';

describe('SidenavComponent', () => {
  let component: TafsirComponent;
  let fixture: ComponentFixture<TafsirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafsirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafsirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
