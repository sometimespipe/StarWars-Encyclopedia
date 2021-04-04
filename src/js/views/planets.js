import React, { useEffect, useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/cards.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return store.people.map((item, index) => {
		return (
			<>
				<Card key={index} style={{ width: "18rem" }} className="border-dark mb-4 mt-4">
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Misc. text</Card.Subtitle>

						<Card.Footer valign="bottom">
							<Link to={`/characters/${item.name}`} className="btn btn-light mr-1">
								Learn more!
							</Link>

							<Button
								className="btn-light"
								onClick={() => {
									actions.manageFavorites(item.name);
								}}>
								{store.favorites.includes(item.name) ? (
									<i className="fas fa-heart" />
								) : (
									<i className="far fa-heart" />
								)}
							</Button>
						</Card.Footer>
					</Card.Body>
				</Card>
			</>
		); //return
	}); //función y map
}; //component
