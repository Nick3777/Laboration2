import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSongComponent } from './best-song.component';

describe('BestSongComponent', () => {
  let component: BestSongComponent;
  let fixture: ComponentFixture<BestSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
