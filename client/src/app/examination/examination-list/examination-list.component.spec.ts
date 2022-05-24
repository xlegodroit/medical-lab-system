import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationsListComponent } from './examination-list.component';

describe('ExaminationsListComponent', () => {
  let component: ExaminationsListComponent;
  let fixture: ComponentFixture<ExaminationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
