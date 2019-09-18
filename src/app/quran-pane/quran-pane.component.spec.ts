import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranPaneComponent } from './quran-pane.component';

describe('RightPaneComponent', () => {
  let component: QuranPaneComponent;
  let fixture: ComponentFixture<QuranPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuranPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
