$(function () {
	var exerciseNames = [
		'Push up',
		'Jump squat',
		'Deadlift',
		'Switch lunge'
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