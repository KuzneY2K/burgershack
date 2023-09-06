import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { burgerService } from "../services/BurgerService.js";

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
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