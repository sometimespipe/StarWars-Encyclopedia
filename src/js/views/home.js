import React, { useEffect, useContext } from "react";
import { Row, Col, CardDeck } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Planets } from "./planets";
import { Characters } from "./characters";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<>
			<Row>
				{/* <Col className="col-6 d-flex justify-content-center"> */}
				<h1 style={{ color: "rgb(219,171,12)" }}>Characters</h1>
				<CardDeck>
					<Planets />
				</CardDeck>
			</Row>
			<Row>
				<h1 style={{ color: "rgb(219,171,12)" }}>Planets</h1>
				<CardDeck>
					<Characters />
				</CardDeck>
				{/* </Col> */}
			</Row>
		</>
	);
};

// import React, { useEffect, useContext } from "react";
// import { Card, CardGroup, Button } from "react-bootstrap";
// import { Context } from "../store/appContext";

// export const Home = () => {
// 	return <h1>Home</h1>;
// };
