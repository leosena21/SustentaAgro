import { TestBed } from '@angular/core/testing';
import { ResumoPageRoutingModule } from './resumo-routing.module';

describe('ResumoPageRoutingModule', () => {
  let pipe: ResumoPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ResumoPageRoutingModule] });
    pipe = TestBed.inject(ResumoPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
