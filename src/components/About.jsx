/* eslint-disable react/no-unescaped-entities */
import { Box, Stack, Typography } from "@mui/material";
import me from "../assets/images/me.jpg";
import { useState } from "react";

const About = () => {
	const [isSkill, setIsSkill] = useState(false);
	const [isEducation, setIsEducation] = useState(false);
	const [isExperience, setIsExperience] = useState(false);

	const handleTabOpen = (tabName) => {
		if (tabName === "skills") {
			setIsSkill(false);
			setIsEducation(false);
			setIsExperience(false);
		}
		if (tabName === "education") {
			setIsEducation(true);
			setIsSkill(true);
			setIsExperience(false);
		}
		if (tabName === "experience") {
			setIsExperience(true);
			setIsEducation(false);
			setIsSkill(true);
		}
	};

	return (
		<Box className="about" id="about">
			<img src={me} alt="me" width="40%" />
			<Stack className="about-box">
				<Typography variant="h2" sx={{ fontWeight: "bold" }}>
					About me
				</Typography>
				<Typography sx={{ marginTop: "30px" }}>
					I'm a graduate in Bsc. IT and have experience in both front-end and
					backend development.
					<br /> My previous roles as a freelancer enabled me develop strong
					skills in the related field.
				</Typography>

				<Stack className="tab-titles" direction="row" spacing={2}>
					<Typography
						className={`tab-links ${!isSkill ? "active-link" : ""}`}
						onClick={() => handleTabOpen("skills")}
					>
						Skills
					</Typography>
					<Typography
						className={`tab-links ${isExperience ? "active-link" : ""}`}
						onClick={() => handleTabOpen("experience")}
					>
						Experience
					</Typography>
					<Typography
						className={`tab-links ${isEducation ? "active-link" : ""}`}
						onClick={() => handleTabOpen("education")}
					>
						Education
					</Typography>
				</Stack>

				<Box className={`tab-contents ${!isSkill ? "active-tab" : ""}`}>
					<ul>
						<li>
							<span> Frontend Development </span>
							<br />
							ReactJs
							<br />
							HTML
							<br />
							Sass
						</li>
						<li>
							<span> Backend Development</span>
							<br />
							NodeJs
							<br />
							ExpressJs
							<br />
							Django
						</li>
					</ul>
				</Box>

				<Box className={`tab-contents ${isExperience ? "active-tab" : ""}`}>
					<ul>
						<li>
							<span>
								June, 2024 - Date [Frontend Developer - ABYA University]
							</span>
							<br />
							Developed user interfaces for a blockchain website honing my
							skills in
							<br />
							frontend development enabling me to create responsive and
							intuitive <br />
							designs that ensure a seamless user experience across various
							devices.
						</li>
						<li>
							<span>2023 - Date [Equity Bank - Volunteer]</span>
							<br />
							Undertook volunteering at Equity bank's EGF department by helping
							in
							<br />
							back to school support for scholars while performing data entry
							tasks.
						</li>
						<li>
							<span>2022 - 2023 [Freelancer] </span>
							<br />
							Developed web apps and backend applications as a freelancer.
						</li>
					</ul>
				</Box>

				<Box className={`tab-contents ${isEducation ? "active-tab" : ""}`}>
					<ul>
						<li>
							<span> 2021 - 2025 </span>
							<br />
							Multimedia University of Kenya
						</li>
						<li>
							<span>2017 - 2020</span>
							<br />
							Friends School Kamusinga
						</li>
					</ul>
				</Box>
			</Stack>
		</Box>
	);
};

export default About;
