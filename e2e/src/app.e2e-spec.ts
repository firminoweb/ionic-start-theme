import { App } from './app.po';
import { browser, by, element } from 'protractor';

class Tasks {

  public static async displayMovieAndCheckYear(app: App, title: string, year: number) {
    await app.goToPage('Top');
    await app.findAndGoToMovie(title);
    expect(app.getMovieYear()).toBe(String(year));
    browser.navigate().back();
  }

}

describe('Movies App', () => {

  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('Should navigate to Home', async () => {
    await app.navigateTo('home');
    expect(app.getTitleView()).toBe('Populares');
  });

  it('Should display Pulp Fiction detail with year 1994', async () => {
    await Tasks.displayMovieAndCheckYear(app, 'Pulp Fiction', 1994);
  });

  it('Should display El Padrino detail with year 1972', async () => {
    await Tasks.displayMovieAndCheckYear(app, 'El Padrino', 1972);
  });

  it('Should display El caballero oscuro detail with year 2008', async () => {
    await Tasks.displayMovieAndCheckYear(app, 'El caballero oscuro', 2008);
  });

  it('Should display El club de la lucha detail with year 1999', async () => {
    await Tasks.displayMovieAndCheckYear(app, 'El club de la lucha', 1999);
  });

});
