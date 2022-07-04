import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizReferenciaComponent } from './matriz-referencia.component';

describe('MatrizReferenciaComponent', () => {
  let component: MatrizReferenciaComponent;
  let fixture: ComponentFixture<MatrizReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizReferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
