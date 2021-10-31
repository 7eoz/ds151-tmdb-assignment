import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultListItem from '../components/ResultListItem';
import tmdb from '../api/tmdb';

function HomeScreen() {
	const [searchQuery, setSearchQuery] = useState('');
	const [queryResults, setQueryResults] = useState([]);

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
					return (
						<>
							<ResultListItem
								title={item.title}
								releaseDate={item.release_date}
								posterPath={item.poster_path}
							/>
						</>
					);
				}}
			/>
		</>
	);
}

export default HomeScreen;
