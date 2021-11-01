import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultListItem from '../components/ResultListItem';
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
		} catch (error) {
			console.log(error);
		}
	}

	async function searchTmdb(query) {
		try {
			const response = await tmdb.get('/search/movie', {
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

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				onSearchQueryChange={(sq) => setSearchQuery(sq)}
				onSearchQuerySubmit={(sq) => searchTmdb(sq)}
			/>
			<FlatList
				data={queryResults}
				keyExtractor={(result) => result.id.toString()}
				renderItem={({ item }) => {
					const genresList = item.genre_ids.map((genreId) => {
						return genres.find((g) => g.id === genreId).name;
					});
					const releaseDate = item.release_date.split('-').reverse().join('/');
					return (
						<>
							<TouchableOpacity onPress={() => navigation.navigate('Details')}>
								<ResultListItem
									title={item.title}
									genres={genresList.join(', ')}
									releaseDate={releaseDate}
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
