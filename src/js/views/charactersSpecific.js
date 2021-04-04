import React, { useEffect, useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharactersSpecific = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();

	return (
		<>
			<Table striped bordered hover className="table-dark">
				<thead className="text-center">
					<tr>
						<th>Name</th>
						<th>Birthyear</th>
						<th>Gender</th>
						<th>Height (cm)</th>
						<th>Mass (kg)</th>
						<th>Homeworld</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{store.people.map((item, index) => {
						if (item.name == name) {
							return (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.birth_year}</td>
									<td>{item.gender}</td>
									<td>{item.height}</td>
									<td>{item.mass}</td>
									<td>{item.homeworld}</td>
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
