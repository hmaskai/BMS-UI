import { BMSUIPage } from './app.po';

describe('bms-ui App', () => {
  let page: BMSUIPage;

  beforeEach(() => {
    page = new BMSUIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
