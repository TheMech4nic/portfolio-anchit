import React, { useState } from 'react'
import './Services.css'

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I Offer</span>

			<div className="services__container container grid">
				<div className="services_content">
					<div>
						<i className="uil uil-web-grid services_icon"></i>
						<h3 className="services_title">Intuitive <br /> User Interfaces (UI)</h3>
					</div>

					<span onClick={() => toggleTab(1)} className="services_button"
					> View More
						<i className="uil uil-arrow-right 
				services_button-icon"></i></span>

					<div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
						<div className="services_modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times 
						services_modal-close"></i>

							<h3 className="services_modal-title">Intuitive User Interfaces (UI)</h3>
							<p className="services_modal-description">
								Service with more than 1 year of experience in UI creation.
								Providing quality work to clients and companies.
							</p>
							<ul className="services_modal-services grid">
								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon" >
									</i>
									<p className="services_modal-info">
										Develop visually appealing and user-friendly interfaces using React's component-based architecture.
									</p>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
									</i>
									<p className="services_modal-info">
										Create modular UI elements for easy maintenance and scalability.
									</p>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
									</i>
									<p className="services_modal-info">
										Streamline user interactions by implementing intuitive design principles.
									</p>
								</li>

							</ul>
						</div>
					</div>
				</div>

				<div className="services_content">
					<div>
						<i className="uil uil-arrow services_icon"></i>
						<h3 className="services_title">State Management Excellence <br /> with React-Redux</h3>
					</div>

					<span className="services_button" onClick={() => toggleTab(2)}>View More
						<i className="uil uil-arrow-right 
				services_button-icon"></i></span>

					<div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
						<div className="services_modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times 
						services_modal-close"></i>

							<h3 className="services_modal-title">State Management Excellence with React-Redux</h3>
							<p className="services_modal-description">
							By combining React with Redux, you offer a robust solution for state management and application architecture, enhancing the maintainability, scalability, and performance of your front-end projects.
							</p>
							<ul className="services_modal-services grid">
								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
									</i>
									<p className="services_modal-info">
										Leverage the power of Redux to manage the state of your React applications efficiently. Organize your application's state in a centralized store, making it easier to manage and track changes.
									</p>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
									</i>
									<p className="services_modal-info">
									Implement actions and reducers to handle state modifications, ensuring a predictable and maintainable state flow. This is particularly valuable in larger applications where complex state management is essential.
										</p>
								</li>

							</ul>
						</div>
					</div>
				</div>

				<div className="services_content">
					<div>
						<i className="uil uil-edit services_icon"></i>
						<h3 className="services_title">Efficient <br /> Asynchronous Data Handling</h3>
					</div>

					<span className="services_button" onClick={() => toggleTab(3)}>View More
						<i className="uil uil-arrow-right 
				services_button-icon"></i></span>

					<div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
						<div className="services_modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times 
						services_modal-close"></i>

							<h3 className="services_modal-title">Efficient Asynchronous Data Handling</h3>
							<p className="services_modal-description">
							Proficient in React-Redux asynchronous data handling, ensuring seamless integration of middleware (Thunk or Saga) for efficient and responsive operations.
							</p>
							<ul className="services_modal-services grid">
								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
									</i>
									<p className="services_modal-info">
									Harness the capabilities of Redux middleware, such as Thunk or Saga, for handling asynchronous operations seamlessly. Implement asynchronous actions to manage data fetching, ensuring a smooth user experience while maintaining a responsive UI.
										</p>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
									</i>
									<p className="services_modal-info">
									Integrate Redux DevTools for better debugging and monitoring of state changes during development, streamlining the identification and resolution of potential issues.
										</p>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services