import { HelloAngularSurGitPage } from './app.po';

describe('hello-angular-sur-git App', () => {
  let page: HelloAngularSurGitPage;

  beforeEach(() => {
    page = new HelloAngularSurGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
