// Client Brief...
// Create an application which can be used to keep track
// of a score in a football match..

// 1. It's football there's two teams, so lets keep two scores going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

// 2. When a team one button is clicked, increment team1 score
function handleTeamOneClick() {
    teamScoreOne = teamScoreOne + 1;
}
// 3. When team two button is clicked, increment team2 score
function handleTeamTwoClick() {
    teamScoreTwo = teamScoreTwo + 1;
}
// 4. When do we finish/stop? Timer? Button?
function handleStopGame() {
    isGameStopped = true;
}