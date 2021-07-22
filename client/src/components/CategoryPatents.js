import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Bar } from 'react-chartjs-2';

export default function CategoryPatents({ categories }) {
	const data = {
		labels: Object.keys(categories),
		datasets: [
			{
				label: '# of patents in category',
				data: Object.values(categories),
				backgroundColor: [
					'#02475e',
					'#687980',
					'#e1701a',
					'#c6ffc1',
					'#ffc288',
					'#a799b7',
					'#2978b5',
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
		<Container className="patent-container">
			<Row>
				<Col>
					<h1>Patents Grouped by Category</h1>
					<Bar data={data} />
				</Col>
			</Row>
		</Container>
	);
}
