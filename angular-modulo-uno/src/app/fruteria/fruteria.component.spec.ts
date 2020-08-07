import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruteriaComponent } from './fruteria.component';

describe('FruteriaComponent', () => {
  let component: FruteriaComponent;
  let fixture: ComponentFixture<FruteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
