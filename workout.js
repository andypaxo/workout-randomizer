$(function () {
	var exerciseNames = [
		'Push up',
		'Jump squat',
		'Deadlift',
		'Switch lunge',
		'Plank',
		'Low jacks',
		'Plank jacks',
		'Squat jump',
		'Skip',
		'Bicep curl',
		'Jack knife abs',
		'Elevated sit up',
		'V abs',
		'Bicycles',
		'Reverse crunch',
		'Scissor legs',
		'Flys',
		'Upright row',
		'Bent over row',
		'Superman',
		'Weighted squats',
		'Superman + levitate',
		'Leapfrog',
		'Woodchop',
		'Weight swing',
		'Squat and press',
		'Mountain climb',
		'Toe-touch abs',
		'Round the world',
		'Elevated push up',
		'Diamond push up',
		'Side plank',
		'Dive bombers',
		'Monkey push up',
		'Sumo squats',
		'One leg push up burpee',
		'Hop on one leg',
		'Rocket launcher',
		'Lunge and twist',
		'Crunch and twist',
		'Tuck jump',
		'Spiderman push up',
		'Leg drop crunch',
		'Crunch and press',
		'Bridge thrust',
		'Tuck abs',
		'Tri dip',
		'Tri abs',
		'Push up burpee'
	];

	var getExercise = function() {
		// Get random index
		var i = Math.floor(Math.random() * exerciseNames.length);
		// Get name
		var name = exerciseNames[i]
		// Remove from names
		exerciseNames.splice(i, 1);

		return name;
	};

	$('#add').click(function (e) {
		e.preventDefault();
		var exerciseName = getExercise();
		$('<div class="excersize">'+exerciseName+'</div>').appendTo('#exercises');
	});
});