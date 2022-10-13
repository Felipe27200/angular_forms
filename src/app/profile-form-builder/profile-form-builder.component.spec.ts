import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormBuilderComponent } from './profile-form-builder.component';

describe('ProfileFormBuilderComponent', () => {
  let component: ProfileFormBuilderComponent;
  let fixture: ComponentFixture<ProfileFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
