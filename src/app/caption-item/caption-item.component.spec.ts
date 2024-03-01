import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionItemComponent } from './caption-item.component';

describe('CaptionItemComponent', () => {
  let component: CaptionItemComponent;
  let fixture: ComponentFixture<CaptionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
