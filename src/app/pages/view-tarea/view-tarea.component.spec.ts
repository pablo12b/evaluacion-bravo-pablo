import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTareaComponent } from './view-tarea.component';

describe('ViewRecetaComponent', () => {
  let component: ViewTareaComponent;
  let fixture: ComponentFixture<ViewTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTareaComponent]
    });
    fixture = TestBed.createComponent(ViewTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
