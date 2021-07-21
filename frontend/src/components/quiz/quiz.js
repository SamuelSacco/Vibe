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
			questionText: 'What do you like to do when you\'re happy?',
			answerOptions: [
				{ answerText: 'Let\'s go to the mall (with Valerie)...today!', points: 1},
				{ answerText: 'Hit the gym with Sohrob, what a beefcake.', points: 2},
				{ answerText: 'Take a road trip with Paul, coast to coast.', points: 3},
				{ answerText: 'DANCEDANCEDANCEDANCEDANCERAPHDANCEDANCEDANCEDANCE.', points: 4},
			],
		},
		{
			questionText: 'What do you like to do when you\'re sad?',
			answerOptions: [
				{ answerText: 'Why even bother, Sam left me on read.', points: 1},
				{ answerText: 'Invite Ali over to eat Taco Bell and cry.', points: 2 },
				{ answerText: 'Even though he doesn\'t have his license, have Kyle pick you up for a drive.', points: 3},
				{ answerText: 'Avoid the sadness at all costs with Jack.', points: 4},
			],
		},
		{
			questionText: 'What do you like to do when you\'re bored?',
			answerOptions: [
				{ answerText: 'Start a fight club with Ali.', points: 1 },
				{ answerText: 'Challenge Eric to a rap battle.', points: 2},
				{ answerText: 'Try to bench more than Justin.', points: 3},
				{ answerText: 'Go to www.fullstackacademy.com.', points: 4},
			],
		},
		{
			questionText: 'How are you feeling right now?',
			answerOptions: [
				{ answerText: 'Not gonna lie, I\'m feeling low right now', mood: 'sad', points: 0},
				{ answerText: 'I\'m on top of the world', mood: 'happy', points: 0},
				{ answerText: 'Would much rather be doing something else, to be honest', mood: 'bored', points: 0},
				{ answerText: 'I\'m feeling lucky', mood: 'lucky', points: 0},
			],
		},
	];

	
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0); // find way to make score persist to state/store upon
	const [mood, setMood] = useState('');
	
	const handleAnswerOptionClick = (points) => {
		setScore(score + points);
			
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else if (nextQuestion === questions.length - 1) {
			setMood(mood)
		} else {
			setShowScore(true)
			let vibe = {
				score: score + points,
				mood: mood
			}
			console.log(score)
			console.log(props)
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
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='quiz-question'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button 
								onClick={() => handleAnswerOptionClick(answerOption.points)}
								className='quiz-answer'
							>
								{answerOption.answerText}
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