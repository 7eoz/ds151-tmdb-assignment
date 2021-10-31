import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResultListItem = ({ title, releaseDate, posterPath }) => {
	const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
	const imageUrl = imageBaseUrl + posterPath;

	return (
		<TouchableOpacity>
			<View style={styles.resultsListItemContainer}>
				<Image style={styles.moviePoster} source={{ uri: imageUrl }} />
				<View style={styles.movieMajorInfo}>
					<Text style={styles.movieTitle}>{title}</Text>
					<View style={styles.movieMinorInfo}>
						<Text style={styles.movieGenre}>{posterPath}</Text>
						<Text style={styles.releaseDate}>{releaseDate}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
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
	},
	releaseDate: {
		marginRight: 5,
	},
});

export default ResultListItem;