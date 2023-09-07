import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { burgerService } from "../services/BurgerService.js";

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
            .put('/:burgerId', this.updateBurger)
            .delete('/:burgerId', this.deleteBurger)
    }

    async getBurgers(request, response, next) {
        try {
            logger.log('[GETTING] BURGERS')
            const burgers = await burgerService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(request, response, next) {
        try {
            let burgerId = request.params.burgerId
            let removedBurger = await burgerService.deleteBurger(burgerId)
            response.send(removedBurger)
        } catch (error) {
            next(error)
        }
    }

    async updateBurger(request, response, next) {
        try {
            logger.log('[UPDATING] BURGER')
            let burgerId = request.params.burgerId
            let burgerChanges = request.body
            let updatedBurger = await burgerService.updateBurger(burgerId, burgerChanges)
            response.send(updatedBurger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(request, response, next) {
        try {
            logger.log('[CREATING] BURGER')
            const burger = await burgerService.createBurger(request.body)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
}