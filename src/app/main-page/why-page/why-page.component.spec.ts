import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPageComponent } from './why-page.component';

describe('WhyPageComponent', () => {
  let component: WhyPageComponent;
  let fixture: ComponentFixture<WhyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
