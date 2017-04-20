import { KadeAppPage } from './app.po';

describe('kade-components App', function() {
  let page: KadeAppPage;

  beforeEach(() => {
    page = new KadeAppPage();
  });

  it('should display message saying components works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('components works!');
  });
});
