import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const FilterBar = () => {
	return (
		<View style={styles.filterContainer}>
			<TouchableOpacity style={styles.filterButton}>
				<Text>Movies</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.filterButton}>
				<Text>TV Shows</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.filterButton}>
				<Text>People</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	filterButton: {
		borderWidth: 1,
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 5,
	},
});

export default FilterBar;
