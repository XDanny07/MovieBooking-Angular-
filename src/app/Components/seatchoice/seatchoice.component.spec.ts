import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatchoiceComponent } from './seatchoice.component';

describe('SeatchoiceComponent', () => {
  let component: SeatchoiceComponent;
  let fixture: ComponentFixture<SeatchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatchoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
