import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageArticlesComponent } from './affichage-articles.component';

describe('AffichageArticlesComponent', () => {
  let component: AffichageArticlesComponent;
  let fixture: ComponentFixture<AffichageArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
