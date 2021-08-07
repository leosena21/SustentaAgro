import { TestBed } from '@angular/core/testing';
import { DashagroPageModule } from './dashagro.module';

describe('DashagroPageModule', () => {
  let pipe: DashagroPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DashagroPageModule] });
    pipe = TestBed.inject(DashagroPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
