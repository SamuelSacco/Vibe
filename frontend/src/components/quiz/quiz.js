import { connect } from 'react-redux';
import React, { useState } from 'react';
import { fetchMoodScore } from '../../actions/quiz_actions';
import { logout } from '../../actions/session_actions';

const mDTP = dispatch => ({
	logout: () => dispatch(logout()),
	submitQuiz: score => dispatch(fetchMoodScore(score))
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
			questionText: 'What do you like to do when you\'re angry?',
			answerOptions: [
				{ answerText: 'Start a fight club with Ali.', points: 1 },
				{ answerText: 'Challenge Eric to a rap battle.', points: 2},
				{ answerText: 'Try to bench more than Justin.', points: 3},
				{ answerText: 'Go to www.fullstackacademy.com.', points: 4},
			],
		},
		{
			questionText: 'Are we still taking this quiz?',
			answerOptions: [
				{ answerText: 'Yeah, but I wanna hit the beach with Chen.', points: 1},
				{ answerText: 'Yeah, but I wanna hit the open pastures with Ernst.', points: 2},
				{ answerText: 'Yeah, but I wanna hit the slopes with Lee-Anne.', points: 3},
				{ answerText: 'Yeah, but I wanna hit the town with Donnie.', points: 4 },
			],
		},
	];

	
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0); // find way to make score persist to state/store upon
	
	const handleAnswerOptionClick = (points) => {
		setScore(score + points);
			
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true)
			console.log(score)
			console.log(props)
			props.submitQuiz(score + points)
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