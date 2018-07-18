import React from 'react';
import { View } from 'react-native';
import { Header, Spinner } from 'native-base';
import { Font, } from 'expo';
import StatusBarHeader from './components/StatusBarHeader';
import { stormcloud, columbiaBlue } from './utils/colors';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchInitialData } from './utils/api';
import { setInitialData } from './actions/decks';
import Navigation from './components/Navigation';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends React.Component {

	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		fetchInitialData()
			.then((data) => store.dispatch(setInitialData(data)));

		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			Ionicons: require('native-base/Fonts/Ionicons.ttf')
		});

		this.setState({fontLoaded: true});
	}

	render() {
		if (!this.state.fontLoaded) {
			return (
				<View>
					<StatusBarHeader/>
					<Header/>
					<Spinner color={stormcloud}/>
				</View>
			)
		}
		return (
			<Provider store={store}>
				<View style={{flex: 1}}>
					<StatusBarHeader backgroundColor={columbiaBlue} barStyle='light-content' />
					<Navigation/>
				</View>
			</Provider>
		);
	}
}