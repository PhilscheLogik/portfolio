import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjSectionComponent } from './proj-section.component';

describe('ProjSectionComponent', () => {
  let component: ProjSectionComponent;
  let fixture: ComponentFixture<ProjSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
