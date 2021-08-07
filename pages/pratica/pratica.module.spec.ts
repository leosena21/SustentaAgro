import { TestBed } from '@angular/core/testing';
import { PraticaPageModule } from './pratica.module';

describe('PraticaPageModule', () => {
  let pipe: PraticaPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PraticaPageModule] });
    pipe = TestBed.inject(PraticaPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
