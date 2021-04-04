import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						height="40"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>
			<DropdownButton
				variant="warning"
				className="ml-auto "
				id="dropdown-basic-button"
				title={`Favorites ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index} href="#/action-1">
							{item}{" "}
							<span className="float-right" onClick={() => actions.removeFavorite(item)}>
								<i className="fas fa-times" style={{ color: "red" }} />
							</span>
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
