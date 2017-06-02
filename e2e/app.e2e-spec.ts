import { ZadannieCodeminePage } from './app.po';

describe('zadannie-codemine App', () => {
  let page: ZadannieCodeminePage;

  beforeEach(() => {
    page = new ZadannieCodeminePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
