/// <reference path="node_modules/definitely-typed-jquery/jquery.d.ts" />
/// <reference path="node_modules/definitely-typed-angular/angular.d.ts" />
/// <reference path="app/scripts/Misc.d.ts" />
declare module masterMindApp {
    class Router {
        initialize($stateProvider: any, $urlRouteProvider: any): void;
    }
}
declare module masterMindApp {
    class Bootstraper {
        module: ng.IModule;
        router: masterMindApp.Router;
        constructor(module: ng.IModule, router: masterMindApp.Router);
        bootstrap(): void;
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider): void;
        initRestangular(RestangularProvider: any): void;
    }
}
declare module masterMindApp.Controllers {
    class CompetitionListController {
        competitionList: Array<any>;
        viewDetails: (competition: any) => void;
        static $inject: string[];
        constructor($state: any);
    }
}
declare module masterMindApp.Controllers {
    class PointTableController {
        pointsTableData: Array<any>;
        teamDetails: any;
        viewDetails: (team: any) => void;
        static $inject: any[];
        constructor();
    }
}
declare module masterMindApp {
    class App {
        module: ng.IModule;
        constructor();
    }
}
