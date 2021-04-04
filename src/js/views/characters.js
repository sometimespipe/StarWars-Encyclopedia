import React, { useEffect, useContext } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.scss";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return store.planets.map((item, index) => {
		return (
			<Card key={index} style={{ width: "18rem" }} className="border-dark mb-4 mt-4">
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Misc. text</Card.Subtitle>

					<Card.Footer>
						<Link to={`/planets/${item.name}`} className="btn btn-light mr-1">
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
		);
	});
};
