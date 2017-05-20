import { MyPdfPage } from './app.po';

describe('my-pdf App', () => {
  let page: MyPdfPage;

  beforeEach(() => {
    page = new MyPdfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
