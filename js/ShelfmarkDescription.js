/*
 * Adding description after shelfmark filtered on shelfmark- test
 * mjm2022
 */

app.controller('LocationAfterController', ['angularLoad', function (angularLoad) {
    var vm = this;
    
    /*
     * Get location shelfmark and filter it
     */ 
    vm.coll = '';
    if ('callNumber' in vm.parentCtrl.loc.location) {
		var colloc= vm.parentCtrl.loc.location.callNumber
		if (colloc.match(/NSIAD/)){
			vm.coll = 'In deposito esterno, richiesta prenotazione.';
		}
    }
}]);

app.component('prmLocationAfter', {
    bindings: {parentCtrl: '<'},
    controller: 'LocationAfterController',
    template: `<div ng-if="$ctrl.coll"><small>{{$ctrl.coll}}</small></div>`
	});
