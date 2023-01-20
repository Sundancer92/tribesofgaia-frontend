import { Container, Row, Col } from "react-bootstrap";
import styles from "./SpiritDescription.module.css";

function SpiritDescription(data) {
	const spirit = data.data;
	return (
		<>
			<Container className={styles.DescriptionContainer}>
				<Row md={2} sm={0}>
					<Col sm={8}>
						<h1>{spirit.name_1}</h1>
					</Col>
					<Col sm={4} className={styles.TotemCost}>
						<h7>
							Totem Cost:{" "}
							{spirit.totem_cost === null ? "Unkown" : spirit.totem_cost}
						</h7>
					</Col>
				</Row>
				<Row>
					<Col>
						<hr />
						<h4>{spirit.description}</h4>
						<hr />
						<h4> Individual Traits:</h4>
						{spirit.trait_personal === null ? (
							<p>No individual traits.</p>
						) : (
							<p>{spirit.trait_personal}</p>
						)}
						<h4> Pack Traits:</h4>
						{spirit.trait_pack === null ? (
							<p>No pack traits.</p>
						) : (
							<p>{spirit.trait_pack}</p>
						)}
            <h4>Ban:</h4>
						{spirit.ban === null ? (
							<p>No bans.</p>
						) : (
							<p>{spirit.ban}</p>
						)}

					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SpiritDescription;
