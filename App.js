import React from 'react';
import { Text } from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import { Font, } from 'expo';
import StatusBarHeader from './components/StatusBarHeader';
import { stormcloud } from './utils/colors';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchInitialData } from './utils/api';
import { setInitialData } from './actions/decks';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends React.Component {

	state = {
		fontLoaded: false
	};

	componentDidMount() {
		fetchInitialData()
			.then((data) => store.dispatch(setInitialData(data)));

		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});

		this.setState({fontLoaded: true});
	}

	render() {
		if (!this.state.fontLoaded) {
			return (
				<Container>
					<StatusBarHeader/>
					<Header/>
					<Content>
						<Spinner color={stormcloud}/>
					</Content>
				</Container>
			)
		}
		return (
			<Provider store={store}>
				<Container>
					<StatusBarHeader/>
					<Header/>
					<Content>
						<Text>Flashcards</Text>
					</Content>
				</Container>
			</Provider>
		);
	}
}