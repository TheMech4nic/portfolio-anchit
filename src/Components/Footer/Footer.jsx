import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
	<footer className="footer">
		<div className="footer__container container">
			<h1 className="footer__title">Anchit Mishra</h1>
			
			<ul className="footer_list">
				<li>
					 <a href="#about" 
					 className="footer_link">About</a>
				</li>
				<li>
					 <a href="#portfolio" 
					 className="footer_link">Projects</a>
				</li>
			</ul>
			
			<div className="footer_social">
			<Link
				to="https://www.instagram.com/property_of_am/"
				className='footer_social-link'
				target='_blank'
			>
			<i className="uil uil-instagram"></i>
			</Link>
			<Link
				to="https://www.linkedin.com/in/anchitmishra"
				className='footer_social-link'
				target='_blank'
			>
			<i className="uil uil-linkedin"></i>
			</Link>
			<Link
				to="https://github.com/TheMech4nic"
				className='footer_social-link'
				target='_blank'
			>
			<i className="uil uil-github"></i>
			</Link>
			<Link
				to={`mailto:mishraanchit02@gmail.com`}
				className='footer_social-link'
				target='_blank'
			>
			<i className="uil uil-envelope"></i>
			</Link>
			</div>
			
			<span className="footer_copy"> Designed and built by Anchit Mishra</span>

		</div>
	</footer>
  )
}

export default Footer