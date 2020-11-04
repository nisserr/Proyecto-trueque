import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPublicComponent } from './perfil-public.component';

describe('PerfilPublicComponent', () => {
  let component: PerfilPublicComponent;
  let fixture: ComponentFixture<PerfilPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
