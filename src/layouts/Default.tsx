import { Outlet } from 'react-router-dom'

const Default = () => {
	return (
		<div>
			<h1>default dulu gan</h1>
			<Outlet />
		</div>
	)
}

export default Default
