/// <reference path="Reference.ts" />
module masterMindApp.Controllers {
    export class CompetitionListController {
        competitionList: Array<any>;
        viewDetails:(competition:any)=>void;
        static $inject = ["$state"];
        constructor($state:any) {
            var vm = this;
            function init() {
                loadCompetitionLists();
                vm.viewDetails=showDetailData;
            }
            init();
            function loadCompetitionLists() {
                vm.competitionList = [
                    { "id": 1, "name": "FIFA WorldCup" },
                    { "id": 2, "name": "Asia Football Cup" },
                    { "id": 3, "name": "World Football Championship" }
                ];
            }
            function showDetailData(competition:any){
                $state.go("pointsTable");
            }
        }
    }
}