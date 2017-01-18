import { HTTPClientPage } from './app.po';

describe('http-client App', function() {
  let page: HTTPClientPage;

  beforeEach(() => {
    page = new HTTPClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
