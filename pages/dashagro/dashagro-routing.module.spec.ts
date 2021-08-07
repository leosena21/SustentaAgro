import { TestBed } from '@angular/core/testing';
import { DashagroPageRoutingModule } from './dashagro-routing.module';

describe('DashagroPageRoutingModule', () => {
  let pipe: DashagroPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DashagroPageRoutingModule] });
    pipe = TestBed.inject(DashagroPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
