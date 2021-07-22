const axios = require('axios');

async function retrieveMetrics() {
	const metrics = {
		patentsCountByCategory: {},
		patentsCountByCenter: {},
	};
	try {
		const url = 'https://technology-api.ndc.nasa.gov/api/patent';
		const response = await axios.get(url);
		const categoryIndex = 5;
		const centerIndex = 9;
		const patents = response.data.results.map((patent) => [
			patent[categoryIndex],
			patent[centerIndex],
		]);
		patents.forEach((patent) => {
			const category = patent[0];
			const center = patent[1];
			metrics.patentsCountByCategory[category] =
				(metrics.patentsCountByCategory[category] || 0) + 1;
			metrics.patentsCountByCenter[center] = (metrics.patentsCountByCenter[center] || 0) + 1;
		});
		return metrics;
	} catch (err) {
		throw new Error('An Error Occured');
	}
}

module.exports = retrieveMetrics;
