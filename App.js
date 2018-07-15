import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import { Font, } from 'expo';
import StatusBarHeader from './components/StatusBarHeader';
import { stormcloud } from './utils/colors';

export default class App extends React.Component {
	state = {
		fontLoaded: false
	};

	componentDidMount() {
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		if (!this.state.fontLoaded) {
			return(
				<Container>
					<StatusBarHeader />
					<Header />
					<Content>
						<Spinner color={stormcloud} />
					</Content>
				</Container>
			)
		}
		return (
			<Container>
				<StatusBarHeader />
				<Header />
				<Content>
					<Text>Test</Text>
				</Content>
			</Container>
		);
	}
}