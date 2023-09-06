import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";
import { Logger } from "../utils/Logger.js";

class BurgerService {
    async getBurgers() {
        let burgers = await dbContext.Burger.find()
        return burgers
    }
    async createBurger(burgerData) {
        let burger = await dbContext.Burger.create(burgerData)
        return burger
    }

}

export const burgerService = new BurgerService()