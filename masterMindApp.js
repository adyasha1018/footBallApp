var masterMindApp;
(function (masterMindApp) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
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
        };
        return Router;
    }());
    masterMindApp.Router = Router;
})(masterMindApp || (masterMindApp = {}));
var masterMindApp;
(function (masterMindApp) {
    var Bootstraper = (function () {
        function Bootstraper(module, router) {
            this.module = module;
            this.router = router;
        }
        Bootstraper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider",
                function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider);
                }]);
        };
        Bootstraper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
        };
        Bootstraper.prototype.initRestangular = function (RestangularProvider) {
            RestangularProvider.setParentless(true, []);
            RestangularProvider.setBaseUrl("http://localhost:9292/drum");
        };
        return Bootstraper;
    }());
    masterMindApp.Bootstraper = Bootstraper;
})(masterMindApp || (masterMindApp = {}));
var masterMindApp;
(function (masterMindApp) {
    var Controllers;
    (function (Controllers) {
        var CompetitionListController = (function () {
            function CompetitionListController($state) {
                var vm = this;
                function init() {
                    loadCompetitionLists();
                    vm.viewDetails = showDetailData;
                }
                init();
                function loadCompetitionLists() {
                    vm.competitionList = [
                        { "id": 1, "name": "FIFA WorldCup" },
                        { "id": 2, "name": "Asia Football Cup" },
                        { "id": 3, "name": "World Football Championship" }
                    ];
                }
                function showDetailData(competition) {
                    $state.go("pointsTable");
                }
            }
            CompetitionListController.$inject = ["$state"];
            return CompetitionListController;
        }());
        Controllers.CompetitionListController = CompetitionListController;
    })(Controllers = masterMindApp.Controllers || (masterMindApp.Controllers = {}));
})(masterMindApp || (masterMindApp = {}));
var masterMindApp;
(function (masterMindApp) {
    var Controllers;
    (function (Controllers) {
        var PointTableController = (function () {
            function PointTableController($mdDialog) {
                var vm = this;
                function init() {
                    loadPointsTableData();
                    vm.viewDetails = viewPlayerDetails;
                }
                init();
                function loadPointsTableData() {
                    vm.pointsTableData = [
                        { "id": 1, "name": "Manchester United", "played": 9, "won": 7, "lost": 1, "draw": 1, "points": "50" },
                        { "id": 2, "name": "Chelsea", "played": 8, "won": 5, "lost": 1, "draw": 2, "points": "60" },
                        { "id": 3, "name": "LiverPool", "played": 7, "won": 7, "lost": 0, "draw": 0, "points": "70" }
                    ];
                }
                function viewPlayerDetails(team) {
                    $mdDialog.show({
                        templateUrl: 'views/teamDetails.html',
                        controller: Controllers.TeamDetailsController,
                        controllerAs: 'teamDetailsVM',
                        parent: angular.element(document.body),
                        targetEvent: team,
                        clickOutsideToClose: true
                    });
                }
            }
            PointTableController.$inject = ["$mdDialog"];
            return PointTableController;
        }());
        Controllers.PointTableController = PointTableController;
    })(Controllers = masterMindApp.Controllers || (masterMindApp.Controllers = {}));
})(masterMindApp || (masterMindApp = {}));
var masterMindApp;
(function (masterMindApp) {
    var Controllers;
    (function (Controllers) {
        var TeamDetailsController = (function () {
            function TeamDetailsController($mdDialog) {
                var vm = this;
                function init() {
                    vm.cancel = cancel;
                }
                init();
                function cancel() {
                    $mdDialog.cancel();
                }
            }
            TeamDetailsController.$inject = ["$mdDialog"];
            return TeamDetailsController;
        }());
        Controllers.TeamDetailsController = TeamDetailsController;
    })(Controllers = masterMindApp.Controllers || (masterMindApp.Controllers = {}));
})(masterMindApp || (masterMindApp = {}));
angular.module('masterMindApp.Controllers', []).controller(masterMindApp.Controllers);
var masterMindApp;
(function (masterMindApp) {
    var App = (function () {
        function App() {
            this.module = angular.module('masterMindApp', ['masterMindApp.Controllers', 'restangular', 'ui.router',
                'ngMaterial']);
            var router = new masterMindApp.Router();
            var bootstrapper = new masterMindApp.Bootstraper(this.module, router);
            bootstrapper.bootstrap();
        }
        return App;
    }());
    masterMindApp.App = App;
    new App();
})(masterMindApp || (masterMindApp = {}));
//# sourceMappingURL=masterMindApp.js.map