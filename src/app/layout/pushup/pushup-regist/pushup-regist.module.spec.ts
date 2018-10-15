import { PushupRegistModule } from './pushup-regist.module';

describe('PushupRegistModule', () => {
  let pushupRegistModule: PushupRegistModule;

  beforeEach(() => {
    pushupRegistModule = new PushupRegistModule();
  });

  it('should create an instance', () => {
    expect(pushupRegistModule).toBeTruthy();
  });
});
