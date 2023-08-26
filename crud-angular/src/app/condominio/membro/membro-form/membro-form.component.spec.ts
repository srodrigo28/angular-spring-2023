import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroFormComponent } from './membro-form.component';

describe('MembroFormComponent', () => {
  let component: MembroFormComponent;
  let fixture: ComponentFixture<MembroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembroFormComponent]
    });
    fixture = TestBed.createComponent(MembroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
