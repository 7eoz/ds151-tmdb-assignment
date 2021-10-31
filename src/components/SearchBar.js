import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({
	onSearchQueryChange,
	onSearchQuerySubmit,
	searchQuery,
}) => {
	return (
		<View style={styles.searchContainer}>
			<TouchableOpacity
				style={styles.searchButton}
				onPress={() => onSearchQuerySubmit(searchQuery)}>
				<FontAwesome name='search' size={24} color='black' />
			</TouchableOpacity>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search'
				style={styles.searchInput}
				value={searchQuery}
				onChangeText={(newSearchQuery) => onSearchQueryChange(newSearchQuery)}
				onSubmitEditing={() => onSearchQuerySubmit(searchQuery)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		// flex: 1,
		borderWidth: 1,
		borderColor: 'black',
		marginLeft: '5%',
		marginTop: 10,
		padding: 5,
		width: '90%',
		height: 36,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	searchButton: {
		marginRight: '3%',
	},
	searchInput: {
		flex: 1,
	},
});

export default SearchBar;
