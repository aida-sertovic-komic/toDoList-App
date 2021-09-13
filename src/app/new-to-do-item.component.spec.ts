import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoItemComponent } from './new-to-do-item.component';

describe('NewToDoItemComponent', () => {
  let component: NewToDoItemComponent;
  let fixture: ComponentFixture<NewToDoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewToDoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
