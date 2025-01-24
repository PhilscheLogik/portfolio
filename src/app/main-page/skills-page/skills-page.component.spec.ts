import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPageComponent } from './skills-page.component';

describe('SkillsPageComponent', () => {
  let component: SkillsPageComponent;
  let fixture: ComponentFixture<SkillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
