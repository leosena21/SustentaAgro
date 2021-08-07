import { TestBed } from '@angular/core/testing';
import { LoginPageRoutingModule } from './login-routing.module';

describe('LoginPageRoutingModule', () => {
  let pipe: LoginPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoginPageRoutingModule] });
    pipe = TestBed.inject(LoginPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
