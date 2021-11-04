import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tmdb from '../api/tmdb';
import MovieDetails from '../components/MovieDetails';

function DetailsScreen({ navigation, route }) {
	const [movieDetails, setmovieDetails] = useState({});

	async function fetchMovieDetails() {
		const movieId = route.params.id;
		try {
			const response = await tmdb.get(`/movie/${movieId}`, {
				params: {
					include_adult: false,
				},
			});
			setmovieDetails(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchMovieDetails();
	}, []);

	return (
		<MovieDetails
			title={route.params.title}
			genres={route.params.genres}
			releaseDate={route.params.releaseDate}
			posterPath={route.params.posterPath}
			overview={movieDetails.overview}
		/>
	);
}

const styles = StyleSheet.create({});

export default DetailsScreen;
