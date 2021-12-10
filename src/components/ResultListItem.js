import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultListItem = ({
	title,
	name,
	releaseDate,
	firstAirDate,
	genres,
	posterPath,
}) => {
	const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
	const imageUrl = imageBaseUrl + posterPath;

	return (
		<>
			<View style={styles.resultsListItemContainer}>
				<Image style={styles.productionPoster} source={{ uri: imageUrl }} />

				<View style={styles.productionMajorInfo}>
					<Text style={styles.productionTitle} numberOfLines={1}>
						{title}
						{name}
					</Text>

					<View style={styles.productionMinorInfo}>
						<Text style={styles.productionGenre}>{genres}</Text>
						<Text style={styles.releaseDate}>
							{releaseDate}
							{firstAirDate}
						</Text>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	resultsListItemContainer: {
		width: '100%',
		flexDirection: 'row',
	},
	productionPoster: {
		width: 48,
		height: 48,
		margin: 5,
	},
	productionTitle: {
		fontSize: 24,
		flexWrap: 'wrap',
		fontWeight: 'bold',
		marginRight: 15,
	},
	productionMajorInfo: {
		flex: 1,
		flexDirection: 'column',
	},
	productionMinorInfo: {
		// flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	productionGenre: {
		flexWrap: 'wrap',
		fontSize: 14,
		color: '#999',
	},
	releaseDate: {
		marginRight: 5,
		fontSize: 14,
		color: '#999',
	},
});

export default ResultListItem;
