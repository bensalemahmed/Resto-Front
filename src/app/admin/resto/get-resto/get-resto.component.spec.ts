import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRestoComponent } from './get-resto.component';

describe('GetRestoComponent', () => {
  let component: GetRestoComponent;
  let fixture: ComponentFixture<GetRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
