import { Router } from 'express'
import { userGet } from '../dependency-injection/container'
// A QUI EL VALIDATE SKEMA **DDD-AKK

export const register = (router: Router): void => {
	router.get('/users', userGet.run)
}
