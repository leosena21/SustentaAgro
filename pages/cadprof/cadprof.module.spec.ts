import { TestBed } from '@angular/core/testing';
import { CadprofPageModule } from './cadprof.module';

describe('CadprofPageModule', () => {
  let pipe: CadprofPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CadprofPageModule] });
    pipe = TestBed.inject(CadprofPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
