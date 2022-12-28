import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
// React Router
import {useNavigate} from 'react-router-dom'

// Cookie Monster
import Cookies from "universal-cookie";

// CSS Module
import styles from "./../../styles/Auth.module.css";

// Hooks
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Auth() {
	const cookies = new Cookies();
	const navigate = useNavigate();

	const [validated, setValidate] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		event.preventDefault()

		setValidate(true);

		axios({
			method: "post",
			url: "http://localhost:5000/validate",
			headers: { "Content-Type": "application/json" },
			data: {
				authUser: email,
				authPassword: password,
			},
		})
			.then(function (response) {
				cookies.set("token", response.data);
				console.log("Respuesta:");
				console.log(response.data);
				navigate('/')
			})
			.catch(function (error) {
				console.log("Error:");
				console.log(error);
			});
	};

	return (
		<Container className={styles.AuthFormContainer}>
			<Form
				className={styles.AuthForm}
				noValidate
				validated={validated}
				onSubmit={handleSubmit}>
				<h3 className={styles.AuthFormTitle}>Sign In</h3>
				<Form.Group className={styles.AuthFormContent} controlId="authUser">
					<Form.Label>Correo:</Form.Label>
					<Form.Control
						required
						type="email"
						placeholder="Escribe tu correo."
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						Falta tu correo.
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
		</Container>
	);
}

export default Auth;
