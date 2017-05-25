import { NgxBulmaPage } from './app.po';

describe('ngx-bulma App', () => {
  let page: NgxBulmaPage;

  beforeEach(() => {
    page = new NgxBulmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bu works!');
  });
});
