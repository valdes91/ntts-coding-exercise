import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Pie } from 'react-chartjs-2';

function CenterPatents({ centers }) {
	const data = {
		labels: Object.keys(centers),
		datasets: [
			{
				label: 'patents at center',
				data: Object.values(centers),
				backgroundColor: [
					'#ce1212',
					'#7b113a',
					'#f7ea00',
					'#31326f',
					'#630000',
					'#c8c6a7',
					'#8ac4d0',
					'#290149',
					'#c39e5c',
					'#121013',
				],
			},
		],
	};

	return (
		<Container className="patent-container pie-container">
			<Row>
				<Col>
					<h1>Patents Grouped by Center</h1>
					<Pie data={data} />
				</Col>
			</Row>
		</Container>
	);
}

export default CenterPatents;
