import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SpiritDescription from "./SpiritDescription";

function SpiritList(data) {
	return (
		<Container className="mt-5">
			<Tab.Container id="spirits-details-list">
				<Row>
					<Col sm={4}>
						<ListGroup>
							{data.data.map((spirit, index) => (
								<ListGroup.Item action href={'#' + spirit.id} key={index}>
									<p >{spirit.name_1}</p>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
					<Col sm={8}>
						<Tab.Content>
							{data.data.map((spirit, index) => (
								<Tab.Pane eventKey={'#' + spirit.id} key={spirit.name_1 + index}>
									<SpiritDescription data={spirit}/>
								</Tab.Pane>
							))}
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	);
}

export default SpiritList;
