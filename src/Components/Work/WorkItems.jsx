import React from 'react'

const WorkItems = ({item}) => {
  return (
	<div className="work_card" key={item.id}>
		<img src={item.image} alt='' className='work_img'/>
		<h3 className="work__title">{item.title}</h3>		
	</div>
  )
}

export default WorkItems