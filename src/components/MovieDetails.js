import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function MovieDetails() {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.mainDetailsContainer}>
					<Image
						style={styles.moviePoster}
						source={{
							uri: 'https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg',
						}}
					/>
					{/*  */}
					<View style={styles.movieInfo}>
						<Text style={styles.movieTitle}>The Avengers</Text>
						<Text>genres</Text>
						<Text>releaseDate</Text>
						<Text>vote average</Text>
					</View>
				</View>
				<View style={styles.movieDescriptionContainer}>
					<Text style={styles.movieDescription}>
						movie description movie description movie description movie
						description movie description movie description movie description
						movie description movie description movie description movie
						description movie description movie description
					</Text>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: '100%',
		flexWrap: 'wrap',
	},
	mainDetailsContainer: {
		flexDirection: 'row',
		flex: 1,
	},
	moviePoster: {
		width: '50%',
		height: '100%',
		marginTop: 5,
		marginLeft: 5,
	},
	movieInfo: {
		flexDirection: 'column',
		flexWrap: 'wrap',
		marginLeft: 5,
	},
	movieTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 5,
	},
	movieDescription: {
		fontSize: 24,
		color: '#666666',
		fontStyle: 'italic',
	},
	movieDescriptionContainer: {
		flex: 1,
	},
});

export default MovieDetails;
