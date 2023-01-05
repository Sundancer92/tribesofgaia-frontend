import Spinner from "react-bootstrap/Spinner";

function UserAuthSpinner() {
	return (
		<>
			<h2>Cargando </h2>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
      
		</>
	);
}

export default UserAuthSpinner;
