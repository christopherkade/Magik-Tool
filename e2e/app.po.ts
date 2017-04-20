import { browser, element, by } from 'protractor';

export class KadeAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('components-root h1')).getText();
  }
}
