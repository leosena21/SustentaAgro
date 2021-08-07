import { TestBed } from '@angular/core/testing';
import { CadagroPageRoutingModule } from './cadagro-routing.module';

describe('CadagroPageRoutingModule', () => {
  let pipe: CadagroPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CadagroPageRoutingModule] });
    pipe = TestBed.inject(CadagroPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
