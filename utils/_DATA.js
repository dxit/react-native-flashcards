const mainDB = {
	React: {
		title: 'React',
		createdAt: '1523382220809',
		questions: [
			{
				question: 'React is a framework.',
				answer: 'No, it\'s a library',
				correct: false
			},
			{
				question: 'Make Ajax requests in the componentDidMount lifecycle',
				answer: 'Yes, that\'s the best place!',
				correct: true
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		createdAt: '1523382235318',
		questions: [
			{
				question: 'JavaScript doesn\'t run in the browser',
				answer: 'Sure it does!',
				correct: false
			}
		]
	}
};

export default mainDB;