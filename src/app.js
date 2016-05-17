export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'decorators'], name: 'decorators', moduleId: 'decorators', nav: true, title: 'Decorators' },
      { route: 'fluent', name: 'fluent', moduleId: 'fluent', nav: true, title: 'Fluent' }
    ]);

    this.router = router;
  }
}
