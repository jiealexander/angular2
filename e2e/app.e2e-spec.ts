import { SevenAppPage } from './app.po';

describe('seven-app App', () => {
  let page: SevenAppPage;

  beforeEach(() => {
    page = new SevenAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
