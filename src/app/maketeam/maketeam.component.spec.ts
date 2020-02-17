import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketeamComponent } from './maketeam.component';

describe('MaketeamComponent', () => {
  let component: MaketeamComponent;
  let fixture: ComponentFixture<MaketeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaketeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaketeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
