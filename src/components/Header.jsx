import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
	console.log("Header.jsx component");
	return (
		<Stack className="header" direction="row">
			<Typography variant="h4" sx={{ fontWeight: 600, flex: 1 }}>
				<span style={{ color: "#ff004f", fontWeight: "bolder" }}>K</span>assim.
			</Typography>

			<ul>
				<li>
					<a href="#"> Home </a>
				</li>
				<li>
					<a href="#about"> About </a>
				</li>
				<li>
					<a href="#services"> Services </a>
				</li>
				<li>
					<Link to="#"> Portfolio </Link>
				</li>
				<li>
					<a href="#contact"> Contact </a>
				</li>
			</ul>
		</Stack>
	);
};

export default Header;
