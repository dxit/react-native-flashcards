import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default ({input: {onChange, ...restInput}}) =>
	<View style={styles.field}>
		<TextInput
			underlineColorAndroid='transparent'
			onChangeText={onChange}
			{...restInput}
		/>
	</View>

const styles = StyleSheet.create({
	field: {
		backgroundColor: 'white',
		width: 300,
		height: 30,
		margin: 5,
		borderColor: 'grey',
		borderWidth: .5,
		borderRadius: 3,
		paddingTop: 5,
		paddingLeft: 5,
	}
})