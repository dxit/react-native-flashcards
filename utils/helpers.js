export const getFlipTransformation = (frontFacing, flipValue) => {
	const getOutputRange = () =>
		frontFacing
			? ['0deg', '180deg']
			: ['180deg', '360deg'];

	return {
		transform: [
			{
				rotateX: flipValue.interpolate({
					inputRange: [0, 180],
					outputRange: getOutputRange(),
				})
			}
		]
	}
};