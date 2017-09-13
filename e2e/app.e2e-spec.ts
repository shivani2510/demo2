import { A2NewPage } from './app.po';

describe('a2-new App', () => {
  let page: A2NewPage;

  beforeEach(() => {
    page = new A2NewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
