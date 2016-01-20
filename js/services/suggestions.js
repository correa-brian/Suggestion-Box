app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
		{
			title: 'Life Insurance',
			upvotes: 15,
			comments: [],
		},
		{
			title: 'Renter\'s Insurance',
			upvotes: 9,
			comments: [],	
		},
		{
			title: 'Pet Insurance',
			upvotes: 7,
			comments: [],
		},
		{
			title: 'Metrocard Insurance',
			upvotes: 3,
			comments: [],
		},
	]
	};
	return demoSuggestions;
}]);