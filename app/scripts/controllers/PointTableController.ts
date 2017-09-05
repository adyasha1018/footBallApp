/// <reference path="Reference.ts" />
module masterMindApp.Controllers {
    export class PointTableController {
        pointsTableData: Array<any>;
        teamDetails: any;
        viewDetails: (team: any) => void;
        cancel: () => void;
        static $inject = ["$mdDialog"];
        constructor($mdDialog) {
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
                ]
            }
            function viewPlayerDetails(team: any) {
                $mdDialog.show({
                    templateUrl: 'views/teamDetails.html',
                    controller: TeamDetailsController,
                    controllerAs: 'teamDetailsVM',
                    parent: angular.element(document.body),
                    targetEvent: team,
                    clickOutsideToClose: true
                });
            }

        }
    }
}