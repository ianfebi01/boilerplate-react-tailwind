import { CookiesProvider } from 'react-cookie'
import { ReduxProvider } from './redux/provider'
import { Routes } from './routes'

function App() {

	return (
		<div className="h-full">
			<CookiesProvider>
				<ReduxProvider>
					<Routes />
				</ReduxProvider>
			</CookiesProvider>
		</div>
	)
}

export default App
