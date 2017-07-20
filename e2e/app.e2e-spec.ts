import { AngularCarouselPage } from './app.po';

describe('angular-carousel App', () => {
  let page: AngularCarouselPage;

  beforeEach(() => {
    page = new AngularCarouselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
