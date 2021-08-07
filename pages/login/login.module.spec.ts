import { TestBed } from '@angular/core/testing';
import { LoginPageModule } from './login.module';

describe('LoginPageModule', () => {
  let pipe: LoginPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoginPageModule] });
    pipe = TestBed.inject(LoginPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
