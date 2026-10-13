import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelResultados } from './panel-resultados';

describe('PanelResultados', () => {
  let component: PanelResultados;
  let fixture: ComponentFixture<PanelResultados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelResultados],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelResultados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
