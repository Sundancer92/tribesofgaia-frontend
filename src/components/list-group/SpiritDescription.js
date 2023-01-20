import { Container, Row, Col } from "react-bootstrap";

import styles from "./SpiritDescription.module.css";

import { useSelector } from "react-redux";

function SpiritDescription() {
	const spirit = useSelector((state) => state.spiritsData.spirit);
	return (
		<>
			{Object.hasOwn(spirit, "id") ? (
				<Container className={styles.DescriptionContainer}>
					<Row md={2} sm={0}>
						<Col sm={8}>
							<h1>{spirit.name_1}</h1>
						</Col>
						<Col sm={4} >
							<h6 className={styles.TotemCost}>
								Totem Cost:{" "}
								{spirit.totem_cost === null
									? "Unkown"
									: spirit.totem_cost}
							</h6>
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
			):
        <h1></h1>
      }
		</>
	);
}

export default SpiritDescription;
