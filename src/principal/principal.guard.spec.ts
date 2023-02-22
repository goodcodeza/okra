import { PrincipalGuard } from './principal.guard';

describe('PrincipalGuard', () => {
  it('should be defined', () => {
    expect(new PrincipalGuard()).toBeDefined();
  });
});
