import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCualquieraComponent } from './componente-cualquiera.component';

describe('ComponenteCualquieraComponent', () => {
  let component: ComponenteCualquieraComponent;
  let fixture: ComponentFixture<ComponenteCualquieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCualquieraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCualquieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
