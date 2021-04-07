import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesViewComponent } from './annonces-view.component';

describe('AnnoncesViewComponent', () => {
  let component: AnnoncesViewComponent;
  let fixture: ComponentFixture<AnnoncesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
