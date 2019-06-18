import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetplatComponent } from './getplat.component';

describe('GetplatComponent', () => {
  let component: GetplatComponent;
  let fixture: ComponentFixture<GetplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
