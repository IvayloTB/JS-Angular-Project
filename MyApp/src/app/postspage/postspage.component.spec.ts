import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostspageComponent } from './postspage.component';

describe('PostspageComponent', () => {
  let component: PostspageComponent;
  let fixture: ComponentFixture<PostspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostspageComponent]
    });
    fixture = TestBed.createComponent(PostspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
