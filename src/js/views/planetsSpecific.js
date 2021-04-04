import React, { useEffect, useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const PlanetsSpecific = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();

	return (
		<>
			<Table striped bordered hover className="table-dark">
				<thead className="text-center">
					<tr>
						<th>Name</th>
						<th>Rotation period (h)</th>
						<th>Orbital period (days)</th>
						<th>Gravitational force</th>
						<th>Population</th>
						<th>Climate</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{store.planets.map((item, index) => {
						if (item.name == name) {
							return (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.rotation_period}</td>
									<td>{item.orbital_period}</td>
									<td>{item.gravity}</td>
									<td>{item.population}</td>
									<td>{item.climate}</td>
								</tr>
							);
						}
					})}
				</tbody>
			</Table>

			<Link to="/">
				<Button variant="primary" size="lg" className="btn-light" block>
					Return home
				</Button>
			</Link>
		</>
	);
};
