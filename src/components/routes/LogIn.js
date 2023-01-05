import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

// React Router
import { useNavigate } from "react-router-dom";

// CSS Module
import styles from "./../../styles/Auth.module.css";

// Hooks
import { useState } from "react";

//Redux-Query
import { useLoginAuthMutation } from "../../store/api/tribesofgaiaApi";

// Redux Store
import { useDispatch } from "react-redux";
import { setUserDataName, setUserDataToken } from "../../store/slices/userData";

//Spinner
import UserAuthSpinner from "../Loading/UserAuthSpinner";

function LogIn() {
	const dispatch = useDispatch();

	const [loginAuth, { isLoading }] = useLoginAuthMutation();
	const navigate = useNavigate();

	const [validated, setValidate] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidate(true);

		const authData = {
			authUsername: username,
			authPassword: password,
		};

		const userData = await loginAuth(authData);

		dispatch(setUserDataName(userData.data.user));
		dispatch(setUserDataToken(userData.data.token));
		console.log(userData.data);

		navigate("/");
	};

	return (
		<Container className={styles.AuthFormContainer}>
			{isLoading ? (
				<UserAuthSpinner />
			) : (
				<Form
					className={styles.AuthForm}
					noValidate
					validated={validated}
					onSubmit={handleSubmit}>
					<h3 className={styles.AuthFormTitle}>Sign In</h3>
					<Form.Group
						className={styles.AuthFormContent}
						controlId="authUsername">
						<Form.Label>Usuario:</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Escribe tu nombre de usuario."
							onChange={(event) => setUsername(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Falta tu nombre de usuario.
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group
						className={styles.AuthFormContent}
						controlId="authPassword">
						<Form.Label>Contraseña:</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Escribe tu contraseña."
							onChange={(event) => setPassword(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Debes ingresar una contraseña valida!.
						</Form.Control.Feedback>
					</Form.Group>
					<div className="d-grid gap-2 mt-3 mx-2">
						<Button className="mx-5" variant="primary" type="submit">
							Submit
						</Button>
					</div>
				</Form>
			)}
		</Container>
	);
}

export default LogIn;
