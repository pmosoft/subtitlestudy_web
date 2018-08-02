import { SubtitleRegistModule } from './subtitle-regist.module';

describe('SubtitleRegistModule', () => {
  let subtitleRegistModule: SubtitleRegistModule;

  beforeEach(() => {
    subtitleRegistModule = new SubtitleRegistModule();
  });

  it('should create an instance', () => {
    expect(subtitleRegistModule).toBeTruthy();
  });
});
