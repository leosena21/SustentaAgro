import { TestBed } from '@angular/core/testing';
import { FinalizarPageRoutingModule } from './finalizar-routing.module';

describe('FinalizarPageRoutingModule', () => {
  let pipe: FinalizarPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FinalizarPageRoutingModule] });
    pipe = TestBed.inject(FinalizarPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
