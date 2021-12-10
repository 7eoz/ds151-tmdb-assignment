import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultListItem from '../components/ResultListItem';
import FilterBar from '../components/FilterBar';
import tmdb from '../api/tmdb';

function HomeScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState('');
	const [queryResults, setQueryResults] = useState([]);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		getGenres();
	}, []);

	async function getGenres() {
		try {
			const response = await tmdb.get('genre/movie/list');
			setGenres(response.data.genres);
			// console.log(response.data.genres);
			const response2 = await tmdb.get('genre/tv/list');
			response2.data.genres.map((genre) => {
				setGenres((currentGenges) => [...currentGenges, genre]);
			});
			// console.log(response2.data.genres);
		} catch (error) {
			console.log(error);
		}
	}
	// console.log(genres);

	// useEffect(() => {
	// 	getGenres();
	// }, []);

	// async function getGenres() {
	// 	try {
	// 		const movieResponse = await tmdb.get('genre/movie/list');
	// 		// genresList = movieResponse.data.genres;
	// 		setGenres(movieResponse.data.genres);
	// 		// console.log(movieResponse.data.genres);
	// 		// const tvResponse = await tmdb.get('genre/tv/list');
	// 		// console.log(tvResponse.data.genres);
	// 		// setGenres((currentGenges) => [...currentGenges, tvResponse.data.genres]);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	async function searchTmdb(query) {
		try {
			const response = await tmdb.get('/search/multi', {
				params: {
					query: query,
					include_adult: false,
					page: 1,
				},
			});
			setQueryResults(response.data.results);
		} catch (error) {
			console.log(error);
		}
	}

	function handleDate(item) {
		if (item.hasOwnProperty('release_date')) {
			item.release_date = item.release_date.split('-').reverse().join('/');
		}
		if (item.hasOwnProperty('first_air_date')) {
			item.first_air_date = item.first_air_date.split('-').reverse().join('/');
		}
	}

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				onSearchQueryChange={(sq) => setSearchQuery(sq)}
				onSearchQuerySubmit={(sq) => searchTmdb(sq)}
			/>
			<FilterBar />
			<FlatList
				data={queryResults}
				keyExtractor={(result) => result.id.toString()}
				renderItem={({ item }) => {
					const genresList = item.genre_ids.map((genreId) => {
						return genres.find((g) => g.id === genreId).name;
					});
					handleDate(item);
					return (
						<>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Details', {
										id: item.id,
										title: item.title,
										// genres: genresList,
										// releaseDate: releaseDate,
										posterPath: item.poster_path,
									})
								}>
								<ResultListItem
									title={item.title}
									name={item.name}
									genres={genresList.join(', ')}
									// genres={genresList.join(', ')}
									releaseDate={item.release_date}
									firstAirDate={item.first_air_date}
									posterPath={item.poster_path}
								/>
							</TouchableOpacity>
						</>
					);
				}}
			/>
		</>
	);
}

export default HomeScreen;
