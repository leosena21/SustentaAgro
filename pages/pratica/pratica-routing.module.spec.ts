import { TestBed } from '@angular/core/testing';
import { PraticaPageRoutingModule } from './pratica-routing.module';

describe('PraticaPageRoutingModule', () => {
  let pipe: PraticaPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PraticaPageRoutingModule] });
    pipe = TestBed.inject(PraticaPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
