import { KadeAppPage } from './app.po';

describe('kade-app App', function() {
  let page: KadeAppPage;

  beforeEach(() => {
    page = new KadeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
