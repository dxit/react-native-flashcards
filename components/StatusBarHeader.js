import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { weldonBlue } from '../utils/colors';

const StatusBarHeader = () =>
	<View style={{height: Constants.statusBarHeight}}>
		<StatusBar />
	</View>;

export default StatusBarHeader;