import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import SpiritDescription from "./SpiritDescription";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSpirit } from "../../store/slices/spiritsData";

import styles from "./SpiritList.module.css";

function SpiritList(data) {
	const dispatch = useDispatch();

	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
				<Button
					className={styles.OffCanvasButton}
					variant="primary"
					onClick={handleShow}>
					Search
				</Button>
			<Container className="mt-5">

				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Spirits</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<ListGroup>
							{data.data.map((spirit, index) => (
								<ListGroup.Item
                                action
									key={index}
									onClick={() => {
										dispatch(setSpirit(spirit));
										handleClose();
									}}>
									<p className="m-0">{spirit.name_1}</p>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Offcanvas.Body>
				</Offcanvas>
				<SpiritDescription />
			</Container>
		</>
	);
}

export default SpiritList;
