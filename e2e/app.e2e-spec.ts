import { WwwSnagscopePage } from './app.po';

describe('www-snagscope App', () => {
  let page: WwwSnagscopePage;

  beforeEach(() => {
    page = new WwwSnagscopePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
