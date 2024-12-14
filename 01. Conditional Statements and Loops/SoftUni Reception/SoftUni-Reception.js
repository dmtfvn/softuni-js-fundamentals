function solveCurTask(input) {
	const employee1 = Number(input[0]);
	const employee2 = Number(input[1]);
	const employee3 = Number(input[2]);
	const studentsHandled = employee1 + employee2 + employee3;

	let totalStudents = Number(input[3]);

	let timeCount = 0;

	while (totalStudents > 0) {
		timeCount++;

		if (timeCount % 4 === 0) {
		continue;
		}

		totalStudents -= studentsHandled;
	}

	console.log(`Time needed: ${timeCount}h.`);
}

solveCurTask(['5','6','4','20']);