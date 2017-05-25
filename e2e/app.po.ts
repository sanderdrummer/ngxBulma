import { browser, element, by } from 'protractor';

export class NgxBulmaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bu-root h1')).getText();
  }
}
