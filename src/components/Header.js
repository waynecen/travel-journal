import React from "react";
import logo from "../img/logo.png";

export default function Header() {
	return (
		<div className="header">
			<img src={logo} alt="Globe Icon Logo"></img>
			<h3>my travel journal.</h3>
		</div>
	);
}
