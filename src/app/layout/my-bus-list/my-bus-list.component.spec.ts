import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusListComponent } from './my-bus-list.component';

describe('MyBusListComponent', () => {
  let component: MyBusListComponent;
  let fixture: ComponentFixture<MyBusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
