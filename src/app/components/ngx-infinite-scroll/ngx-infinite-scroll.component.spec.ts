import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInfiniteScrollComponent } from './ngx-infinite-scroll.component';

describe('NgxInfiniteScrollComponent', () => {
  let component: NgxInfiniteScrollComponent;
  let fixture: ComponentFixture<NgxInfiniteScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInfiniteScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
