///<reference path="Reference.ts"/>
module masterMindApp {
    export class Router {
        initialize($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/competitionLists");
            $stateProvider
                .state('competitionLists', {
                    "url": "/competitionLists",
                    templateUrl: 'views/competitionList.html',
                    controller: 'CompetitionListController as listCompetitionVM'
                })
                .state('pointsTable', {
                    "url": "/pointsTable",
                    templateUrl: 'views/pointsTable.html',
                    controller: 'PointTableController as pointTableVM'
                });
        }
    }
}