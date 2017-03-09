
(function() {
//Overall Angular Application
	var app = angular.module('inventory', []);

	app.controller('BeerController', function(){
		this.stock = beer;
		//Used for "ng-submit" directive to add items to array.
		this.newBeer = {}
		this.addBeer = function(){
			this.stock.push(this.newBeer);
			this.newBeer= {};
		};
		//Used in "ng-click" directive for Delete button
		this.remove=function($index){ 
	 	this.stock.splice($index,1);     
		};
	});

	/*Array*/
	var beer = [
		{
			name: 'Scurry',
			brewery: 'Off-Color Brewing',
			quantity: 4,
			style: 'Honey brown ale',
			size: '12ish oz',
		}, {
			name: 'Creme Brulee Stout',
			brewery: 'Southern Tier',
			quantity: 6,
			style: 'Stout',
			size: 'Bomber',
		}, {
			name: 'Bourbon County Barrel Stout',
			brewery: 'Goose Island',
			quantity: 0,
			style: 'Stout',
			size: 'Wine Bottle',
	}];

})();