import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogomensajeComponent } from './dialogomensaje.component';

describe('DialogomensajeComponent', () => {
  let component: DialogomensajeComponent;
  let fixture: ComponentFixture<DialogomensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogomensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogomensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
