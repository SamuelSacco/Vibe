import React, { useState } from 'react';

export default function Quiz () {
	const questions = [
		{
			questionText: 'What do you like to do when you\'re happy?',
			answerOptions: [
				{ answerText: 'Let\'s go to the mall (with Valerie)...today!'},
				{ answerText: 'Hit the gym with Sohrob, what a beefcake.'},
				{ answerText: 'Take a road trip with Paul, coast to coast.' },
				{ answerText: 'DANCEDANCEDANCEDANCEDANCERAPHDANCEDANCEDANCEDANCE.'},
			],
		},
		{
			questionText: 'What do you like to do when you\'re sad?',
			answerOptions: [
				{ answerText: 'Why even bother, Sam left me on read.'},
				{ answerText: 'Invite Ali over to eat Taco Bell and cry.' },
				{ answerText: 'Even though he doesn\'t have his license, have Kyle pick you up for a drive.'},
				{ answerText: 'Avoid the sadness at all costs with Jack.'},
			],
		},
		{
			questionText: 'What do you like to do when you\'re angry?',
			answerOptions: [
				{ answerText: 'Start a fight club with Ali.' },
				{ answerText: 'Challenge Eric to a rap battle.'},
				{ answerText: 'Try to bench more than Justin.'},
				{ answerText: 'Go to www.fullstackacademy.com.'},
			],
		},
		{
			questionText: 'Are we still taking this quiz?',
			answerOptions: [
				{ answerText: 'Yeah, but I wanna hit the beach with Chen.'},
				{ answerText: 'Yeah, but I wanna hit the open pastures with Ernst.'},
				{ answerText: 'Yeah, but I wanna hit the slopes with Lee-Anne.'},
				{ answerText: 'Yeah, but I wanna hit the town with Donnie.' },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		// if (isCorrect) {
		// 	setScore(score + 1);
		// }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}