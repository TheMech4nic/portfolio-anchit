import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Personal Journey</span>

			<div className="qualification__container container">
				<div className="qualification_tabs">
					<div
						className={
							toggleState === 1
								? "qualification_button qualification_active button--flex" :
								"qualification_button button--flex"}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap 
				        qualification_icon"></i>
						Education
					</div>

					<div
						className={
							toggleState === 1
								? "qualification_button qualification_active button--flex" :
								"qualification_button button--flex"}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-briefcase-alt 
				qualification_icon"></i>{" "}
						Experience
					</div>
				</div>

				<div className="qualification_sections">
					<div className=
						{toggleState === 1 ?
							"qualification_content qualification_content-active"
							: "qualification_content"}>

						<div className="qualification_data">
							<div>
								<h3 className="qualification__title">SSC</h3>
								<span className="qualification__subtitle">Kendriya Vidyalaya Dongargarh</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i>
									2015-2016
								</div>
							</div>

							<div>
								<span className="qualification_rounder"></span>
								<div className="qualification_line"></div>
							</div>
						</div>


						<div className="qualification_data">
							<div></div>

							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>

							<div>
								<h3 className="qualification__title">HSC</h3>
								<span className="qualification__subtitle">Kendriya Vidyalaya Dongargarh</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i>
									2017-2018
								</div>
							</div>
						</div>


						<div className="qualification_data">
							<div>
								<h3 className="qualification__title">Bachelor of Engineering <br />(Mechanical)</h3>
								<span className="qualification__subtitle">Shri Shankaracharya Technical Campus, Bhilai</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i>
									2018-2022
								</div>
							</div>

							<div>
								<span className="qualification_rounder"></span>
								<div className="qualification_line"></div>
							</div>
						</div>


						<div className="qualification_data">
							<div></div>

							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>

							<div>
								<h3 className="qualification__title">Software Developement Intern</h3>
								<span className="qualification__subtitle">Shopweb Private LTD.</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i>
									03/2022-04/2022
								</div>
							</div>
						</div>


						<div className=
							{toggleState === 2 ?
								"qualification_content qualification_content-active"
								: "qualification_content"}></div>

						<div className="qualification_data">
							<div>
								<h3 className="qualification__title">Fullstack Web developer Intern</h3>
								<span className="qualification__subtitle">DevTown</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i>
									10/2022-12/2022
								</div>
							</div>

							<div>
								<span className="qualification_rounder"></span>
								<div className="qualification_line"></div>
							</div>
						</div>


						<div className="qualification_data">
							<div></div>

							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>

							<div>
								<h3 className="qualification__title">Software Developer</h3>
								<span className="qualification__subtitle">IT4T Solutions Pvt Ltd</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i>
									01/2023-Present
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification