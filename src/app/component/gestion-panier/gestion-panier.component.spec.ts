import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPanierComponent } from './gestion-panier.component';

describe('GestionPanierComponent', () => {
  let component: GestionPanierComponent;
  let fixture: ComponentFixture<GestionPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
