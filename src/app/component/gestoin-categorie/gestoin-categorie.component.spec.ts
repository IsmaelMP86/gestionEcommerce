import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoinCategorieComponent } from './gestoin-categorie.component';

describe('GestoinCategorieComponent', () => {
  let component: GestoinCategorieComponent;
  let fixture: ComponentFixture<GestoinCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestoinCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestoinCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
