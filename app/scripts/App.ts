///<reference path="Reference.ts"/>
module masterMindApp {
    export class App {
        module: ng.IModule;
        constructor() {
            this.module = angular.module('masterMindApp',['masterMindApp.Controllers','restangular','ui.router',
            'ngMaterial']);
            let router = new masterMindApp.Router();
            let bootstrapper = new masterMindApp.Bootstraper(this.module,router);
            bootstrapper.bootstrap();
        }
    }
    new App();
}