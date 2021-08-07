import { TestBed } from '@angular/core/testing';
import { CadprofPageRoutingModule } from './cadprof-routing.module';

describe('CadprofPageRoutingModule', () => {
  let pipe: CadprofPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CadprofPageRoutingModule] });
    pipe = TestBed.inject(CadprofPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
