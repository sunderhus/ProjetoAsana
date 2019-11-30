import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoContatosComponent } from './manutencao-contatos.component';

describe('ManutencaoContatosComponent', () => {
  let component: ManutencaoContatosComponent;
  let fixture: ComponentFixture<ManutencaoContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
