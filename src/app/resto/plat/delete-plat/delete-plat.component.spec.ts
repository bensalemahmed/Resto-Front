import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlatComponent } from './delete-plat.component';

describe('DeletePlatComponent', () => {
  let component: DeletePlatComponent;
  let fixture: ComponentFixture<DeletePlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
