import { Fragment, FunctionComponent } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import { IRoutes, IRoutesProps } from '../types/routes'
import ProtectLoginRoute from './ProtectLoginRoute'
import { useAppSelector } from '../redux/store'
import NotFound from '@/pages/404'
import ProtectedRoute from './ProtectedRoute'

const generateFlattenRoutes = ( routes: IRoutes ) => {
	if ( !routes ) return []
	if ( routes.children ) {
		if ( routes?.children?.length ) {
			return [routes, ...routes.children.map( ( item ) => item )]
		}
	} else {
		return [routes]
	}
}

export const renderRoutes = ( mainRoutes: IRoutes[] ) => {
	const Routes: FunctionComponent<IRoutesProps> = () => {
		const state = useAppSelector( ( state ) => state.mainReducer )

		const layouts = mainRoutes.map( ( item: IRoutes, index: number ) => {
			const subRoutes: IRoutes[] = generateFlattenRoutes( item ) as IRoutes[]

			return (
				<Fragment key={index}>
					{/* <Route index loader={() => redirect('/login')} /> */}

					{subRoutes.map( ( { component: Component, url, name, type } ) => {
						if ( type === 'auth' ) {
							
							return (
								Component &&
                url && (
									<Route
										key={name}
										element={
											<ProtectLoginRoute
												isAuthorized={state.isAuthorized as boolean}
											/>
										}
									>
										<Route key={index} element={<item.layout />}>
											<Route key={name} element={<Component />}
												path={url}
											/>
										</Route>
									</Route>
								)
							)
						}
						
						return (
							Component &&
              url && (
								<Route
									key={name}
									element={
										<ProtectedRoute
											isAuthorized={state.isAuthorized as boolean}
										/>
									}
								>
									<Route key={index} element={<item.layout />}>
										<Route key={name} element={<Component />}
											path={url}
										/>
									</Route>
								</Route>
							)
						)
					} )}
				</Fragment>
			)
		} )

		return (
			<ReactRoutes>
				<Route key="not-found" path="*"
					element={<NotFound />}
				/>
				{layouts}
			</ReactRoutes>
		)
	}
	
	return Routes
}
