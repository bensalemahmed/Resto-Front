import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestoComponent } from './delete-resto.component';

describe('DeleteRestoComponent', () => {
  let component: DeleteRestoComponent;
  let fixture: ComponentFixture<DeleteRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
