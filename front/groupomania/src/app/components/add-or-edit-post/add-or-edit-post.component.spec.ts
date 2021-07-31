import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditPostComponent } from './add-or-edit-post.component';

describe('AddOrEditPostComponent', () => {
  let component: AddOrEditPostComponent;
  let fixture: ComponentFixture<AddOrEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
