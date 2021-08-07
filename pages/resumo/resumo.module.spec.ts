import { TestBed } from '@angular/core/testing';
import { ResumoPageModule } from './resumo.module';

describe('ResumoPageModule', () => {
  let pipe: ResumoPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ResumoPageModule] });
    pipe = TestBed.inject(ResumoPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
