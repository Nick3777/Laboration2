import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicSongComponent } from './iconic-song.component';

describe('IconicSongComponent', () => {
  let component: IconicSongComponent;
  let fixture: ComponentFixture<IconicSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconicSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
