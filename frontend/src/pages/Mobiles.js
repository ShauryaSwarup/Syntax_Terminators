import { React, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import FilterNav from '../components/FilterNav'
import MobilePage from '../components/MobilePage'

function Mobiles() {
	return (
		<div className="relative">
			<FilterNav />
			<div className="inset-y-0 right-0">
				<MobilePage />
			</div>
		</div>
	)
}

export default Mobiles
