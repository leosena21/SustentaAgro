import { TestBed } from '@angular/core/testing';
import { DashprofPageModule } from './dashprof.module';

describe('DashprofPageModule', () => {
  let pipe: DashprofPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DashprofPageModule] });
    pipe = TestBed.inject(DashprofPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
