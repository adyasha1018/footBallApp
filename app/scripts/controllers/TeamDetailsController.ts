/// <reference path="Reference.ts" />
module masterMindApp.Controllers {
    export class TeamDetailsController {
        pointsTableData: Array<any>;
        teamDetails: any;
        viewDetails: (team: any) => void;
        cancel: () => void;
        static $inject = ["$mdDialog"];
        constructor($mdDialog) {
            var vm = this;
            function init() {              
               vm.cancel = cancel;
            }
            init();
        
            function cancel() {
                $mdDialog.cancel();
            }
        }
    }
}