import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import styles from "./Spinner.module.css"

function LoadingSpinner() {
	return (
		<Container className="styles.CenterSpinner">
			<Spinner animation="border" role="status" variant="danger" size="md">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</Container>
	);
}

export default LoadingSpinner;
