import { renderRoutes } from './generate-routes'

// Pages
import Default from '../layouts/Default'
import LoginLayout from '../layouts/Login'
import { IRoutes } from '@/types/routes'
import Login from '@/pages/login'
import Home from '@/pages'

export const routes: IRoutes[] = [
	{
		title     : 'Login',
		name      : 'login',
		url       : '/login',
		component : Login,
		layout    : LoginLayout,
		type      : 'auth',
	},
	{
		title     : 'Point Of Sales',
		name      : 'pos',
		url       : '/',
		layout    : Default,
		component : Home,
	},
]

// export const Routes = renderRoutes(routes);
export const Routes = renderRoutes( routes )
