import axios from 'axios';

const apiKey = '7a86a9891b803b83aeed83f14726bf0f';

export default axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: apiKey,
	},
});
