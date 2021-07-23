import { connect } from 'react-redux';
import React, { useState } from 'react';
import { fetchVibe } from '../../actions/quiz_actions';
import { logout } from '../../actions/session_actions';

const mDTP = dispatch => ({
	logout: () => dispatch(logout()),
	submitQuiz: vibe => dispatch(fetchVibe(vibe))
})



export function Quiz (props) {
	const genres = ["Pop", "Hip Hop", "In the car", "Gaming"]
	const questions = [
		{
			questionText: 'What would you most likely do when you have free time?',
			answerOptions: [
				{ answerText: 'Boozy Brunch into a power nap for the rest of the day', activity: "Mood"},
				{ answerText: 'Sleep in, drink coffee, and start that book you\'ve been putting off', activity: "At Home"},
				{ answerText: 'Get a head start on your road trip to Vegas #BottleService', activity: "In the car"},
				{ answerText: 'Hit a SoulCycle class and reward yourself with a green smoothie', activity: "Workout"},
			],
		},
		{
			questionText: 'Which song lyric do you resonate with most right now?',
			answerOptions: [
				{ answerText: "'I'm so lonely' \nLonely by Justin Bieber ", mood: "Sad"},
				{ answerText: "'I got a feeling that tonight's gonna be a good night!' I Got a Feeling by Black Eyed Peas", mood: "Happy"},
				{ answerText: "'I'll be lounging on the couch, just chilling in my Snuggie' The Lazy Song by Bruno Mars", mood: "Sad"},
				{ answerText: "'It's Friday then, It's Saturday, Sunday, what?' Push the Feeling On by Nightcrawlers", mood: "Happy"},
			],
		},
		{
			questionText: 'Which quote from Matthew McConaughey\'s Greenlights do you identify with most?',
			answerOptions: [
				{ answerText: 'Don’t walk into a place like you wanna buy it, walk in like you own it.'},
				{ answerText: 'I’d rather lose money havin fun than make money being bored.'},
				{ answerText: 'We all have scars, we gonna have more.'},
				{ answerText: 'Did you know I made up, coined, and created the term McConaissance?'},
			],
		},
		{
			questionText: 'What do you like to do when you\'re feeling blue?',
			answerOptions: [
				{ answerText: 'Eat a pint of ice cream and watch your favorite Ryan Gosling romcoms', activity: "Chill"},
				{ answerText: 'Let my emotions fuel your workout', activity: "Workout"},
				{ answerText: 'Put on your best pair of sweats to impress the GrubHub guy', activity: "Party"},
				{ answerText: 'Turn Adele up to 11', activity: "Pop"},
			],
		},
	];
	
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	// const [showScore, setShowScore] = useState(false);
	const [activity, setActivity] = useState(''); // find way to make score persist to state/store upon
	const [mood, setMood] = useState('');
	
	const handleAnswerOptionClick = (activity, mood) => {
		// setActivity(activity);
		setMood(mood)

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} 
		else if (nextQuestion === 1 || nextQuestion === 2){ 
			setActivity(activity);
		} else {
			// setShowScore(true)
			let vibe = {
				activity: activity,
				mood: mood
			}

			props.submitQuiz(vibe)
			props.history.push(`/playlists`)
		 }
		
	};

	return (
		<div className='quiz-wrapper'>
			<div className='quiz'>
			{/* {showScore ? (
				<div className='score-section'>
					You scored {score}
				</div>
			) : ( */}
				<>
					<div className='question-section'>
						{/* <div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div> */}
						<h2 className='question-text'>{questions[currentQuestion].questionText}</h2>
					</div>
					<div className='quiz-answers'>
						{questions[currentQuestion].answerOptions.map((answerOption, idx) => (
							<button 
								onClick={() => handleAnswerOptionClick(answerOption.activity, answerOption.mood)}
								className='quiz-answer'
                key={idx}
							>
								<div className='quiz-answer-text'>
									{answerOption.answerText}
								</div>
							</button>
						))}
					</div>
				</>
			{/* )} */}
			</div>
		</div>
	);
}

export default connect(null, mDTP)(Quiz);