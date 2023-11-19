import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatercardComponent } from './theatercard.component';

describe('TheatercardComponent', () => {
  let component: TheatercardComponent;
  let fixture: ComponentFixture<TheatercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatercardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheatercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
