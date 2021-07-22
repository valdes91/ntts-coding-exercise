import { useState, useEffect } from 'react';

import CategoryPatents from './components/CategoryPatents';
import CenterPatents from './components/CenterPatents';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

function App() {
	const [patentsByCategory, setPatentsByCategory] = useState(null);
	const [patentsByCenter, setPatentsByCenter] = useState(null);

	useEffect(() => {
		fetch('/metrics')
			.then((res) => res.json())
			.then((data) => {
				setPatentsByCategory(data.patentsCountByCategory);
				setPatentsByCenter(data.patentsCountByCenter);
			});
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					{patentsByCategory === null ? (
						<h1>Loading Patents By Grouped By Category...</h1>
					) : (
						<CategoryPatents categories={patentsByCategory} />
					)}
				</Col>
			</Row>
			<Row>
				<Col>
					{patentsByCenter === null ? (
						<h1>Loading Patents Grouped By Centers...</h1>
					) : (
						<CenterPatents centers={patentsByCenter} />
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default App;
