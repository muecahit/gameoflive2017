import { Gameoflive2017Page } from './app.po';

describe('gameoflive2017 App', () => {
  let page: Gameoflive2017Page;

  beforeEach(() => {
    page = new Gameoflive2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
