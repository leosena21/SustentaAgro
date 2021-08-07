import { TestBed } from '@angular/core/testing';
import { CadagroPageModule } from './cadagro.module';

describe('CadagroPageModule', () => {
  let pipe: CadagroPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CadagroPageModule] });
    pipe = TestBed.inject(CadagroPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
