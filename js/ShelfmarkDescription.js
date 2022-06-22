/*
 * Adding description after shelfmark filtered on shelfmark- test
 * mjm2022
 */
app.controller('AddDescriptionAfterHoldingController', ['angularLoad', function (angularLoad) {
    var vm = this;
    
    /*
     * Get location shelfmark and filter it
     */ 
    vm.description = '';
    if ('callNumber' in vm.parentCtrl.currLoc.location) {
        if(vm.parentCtrl.currLoc.location.callNumber.match(/ZAR/)) {
			vm.description = "In deposito esterno, richiesta prenotazione.";
		}
    }
}]);

app.component('prmLocationHoldingsAfter', {
    bindings: {parentCtrl: '<'},
    controller: 'AddDescriptionAfterHoldingController',
    template: '<div ng-if="$ctrl.description"><small>{{$ctrl.description}}</small></div>'
});