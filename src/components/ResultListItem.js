import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultListItem = ({ title, releaseDate, genres, posterPath }) => {
	const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
	const imageUrl = imageBaseUrl + posterPath;

	return (
		<>
			<View style={styles.resultsListItemContainer}>
				<Image style={styles.moviePoster} source={{ uri: imageUrl }} />

				<View style={styles.movieMajorInfo}>
					<Text style={styles.movieTitle} numberOfLines={1}>
						{title}
					</Text>

					<View style={styles.movieMinorInfo}>
						<Text style={styles.movieGenre}>{genres}</Text>
						<Text style={styles.releaseDate}>{releaseDate}</Text>
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
	moviePoster: {
		width: 48,
		height: 48,
		margin: 5,
	},
	movieTitle: {
		fontSize: 24,
		flexWrap: 'wrap',
		fontWeight: 'bold',
	},
	movieMajorInfo: {
		flex: 1,
		flexDirection: 'column',
	},
	movieMinorInfo: {
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	movieGenre: {
		// marginRight: '1rem',
		fontSize: 10,
		color: '#999',
	},
	releaseDate: {
		marginRight: 5,
		fontSize: 10,
		color: '#999',
	},
});

export default ResultListItem;
