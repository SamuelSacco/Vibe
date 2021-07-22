import { connect } from 'react-redux';
import React, { useState } from 'react';
import { fetchVibe } from '../../actions/quiz_actions';
import { logout } from '../../actions/session_actions';

const mDTP = dispatch => ({
	logout: () => dispatch(logout()),
	submitQuiz: vibe => dispatch(fetchVibe(vibe))
})

export function Quiz (props) {
	
	const questions = [
		{
			questionText: 'What would you most likely do when you have free time?',
			answerOptions: [
				{ answerText: 'Boozy Brunch into a power nap for the rest of the day', points: 2},
				{ answerText: 'Sleep in, drink coffee, and start that book you\'ve been putting off', points: 1},
				{ answerText: 'Get a head start on my road trip to Vegas #BottleService', points: 4},
				{ answerText: 'Hit a SoulCycle class and reward myself with a green juice', points: 3},
			],
		},
		{
			questionText: 'What do you like to do when you\'re feeling blue?',
			answerOptions: [
				{ answerText: 'Eat a pint of ice cream and watch my favorite Ryan Gosling romcoms', points: 1},
				{ answerText: 'Let my emotions fuel my workout', points: 3},
				{ answerText: 'Put on my best pair of sweats to impress the GrubHub guy', points: 2},
				{ answerText: 'Indulge in some guilty pleasures like listening to ABBA on blast ', points: 4},
			],
		},
		{
			questionText: 'Which quote from Matthew McConaughey\'s Greenlights do you identify with most?',
			answerOptions: [
				{ answerText: 'Don’t walk into a place like you wanna buy it, walk in like you own it.', points: 4 },
				{ answerText: 'I’d rather lose money havin fun than make money being bored.', points: 3},
				{ answerText: 'We all have scars, we gonna have more.', points: 1},
				{ answerText: 'Did you know I made up, coined, and created the term McConaissance?', points: 2},
			],
		},
		{
			questionText: 'Which song lyric do you resonate with most right now?',
			answerOptions: [
				{ answerText: "'I\'m so lonely' Lonely - Justin Bieber ", mood: 'sad', points: 0},
				{ answerText: "'I got a feeling that tonight\'s gonna be a good night!' I Got a Feeling - Black Eyed Peas", mood: 'happy', points: 0},
				{ answerText: "'I\'ll be lounging on the couch, just chilling in my Snuggie' The Lazy Song - Bruno Mars", mood: 'bored', points: 0},
				{ answerText: "'It\'s Friday then, It\'s Saturday, Sunday, what?'", mood: 'lucky', points: 0},
			],
		},
	];
	
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0); // find way to make score persist to state/store upon
	const [mood, setMood] = useState('');
	
	const handleAnswerOptionClick = (points, mood) => {
		setScore(score + points);
		setMood(mood)

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true)
			let vibe = {
				score: score + points,
				mood: mood
			}
			props.submitQuiz(vibe)
		}
	};
	return (
		<div className='quiz-wrapper'>
			<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score}
				</div>
			) : (
				<>
					<div className='question-section'>
						{/* <div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div> */}
						<h2 className='question-text'>{questions[currentQuestion].questionText}</h2>
					</div>
					<div className='quiz-answers'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button 
								onClick={() => handleAnswerOptionClick(answerOption.points, answerOption.mood)}
								className='quiz-answer'
							>
								<div className='quiz-answer-text'>
									{answerOption.answerText}
								</div>
							</button>
						))}
					</div>
				</>
			)}
			</div>
		</div>
	);
}

export default connect(null, mDTP)(Quiz);