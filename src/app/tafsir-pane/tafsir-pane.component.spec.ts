import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafsirPaneComponent } from './tafsir-pane.component';

describe('RightPaneComponent', () => {
  let component: TafsirPaneComponent;
  let fixture: ComponentFixture<TafsirPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafsirPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafsirPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
