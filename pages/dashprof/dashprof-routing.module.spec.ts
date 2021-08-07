import { TestBed } from '@angular/core/testing';
import { DashprofPageRoutingModule } from './dashprof-routing.module';

describe('DashprofPageRoutingModule', () => {
  let pipe: DashprofPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DashprofPageRoutingModule] });
    pipe = TestBed.inject(DashprofPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
