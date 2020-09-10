import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTownComponent } from './list-town.component';

describe('ListTownComponent', () => {
  let component: ListTownComponent;
  let fixture: ComponentFixture<ListTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
