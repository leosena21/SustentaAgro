import { TestBed } from '@angular/core/testing';
import { FinalizarPageModule } from './finalizar.module';

describe('FinalizarPageModule', () => {
  let pipe: FinalizarPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FinalizarPageModule] });
    pipe = TestBed.inject(FinalizarPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
