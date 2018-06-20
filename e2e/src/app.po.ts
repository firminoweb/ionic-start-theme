import { browser, by, element } from 'protractor';

export class App {

  constructor() { }

  private waitForBrowser() {
    browser.waitForAngular();
    return browser.sleep(1000);
  }

  getTitleView() {
    return element(by.tagName('h1')).getText();
  }

  getMovieYear() {
    return element(by.css('.movie-data .year')).getText();
  }

  navigateTo(path) {
    browser.get(path);
    return this.waitForBrowser();
  }

  goToPage(title: string) {
    element
      .all(by.cssContainingText('.label', title))
      .first().click();
    return this.waitForBrowser();
  }

  findAndGoToMovie(title: string) {
    const film = element.all(by.cssContainingText('.movie .title', title)).first();
    expect(film.isPresent()).toBeTruthy();
    film.click();
    return this.waitForBrowser();
  }

}
