import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
	return (
		<div className="home_social">
			<Link
				to="https://www.instagram.com/property_of_am/"
				className='home_social-icon'
				target='_blank'
			>
			<i className="uil uil-instagram"></i>
			</Link>
			<Link
				to="https://www.linkedin.com/in/anchitmishra"
				className='home_social-icon'
				target='_blank'
			>
			<i className="uil uil-linkedin"></i>
			</Link>
			<Link
				to="https://github.com/TheMech4nic"
				className='home_social-icon'
				target='_blank'
			>
			<i className="uil uil-github"></i>
			</Link>
			<Link
				to={`mailto:mishraanchit02@gmail.com`}
				className='home_social-icon'
				target='_blank'
			>
			<i className="uil uil-envelope"></i>
			</Link>
		</div>

	)
}

export default Social