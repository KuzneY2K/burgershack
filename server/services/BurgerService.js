import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";
import { Logger } from "../utils/Logger.js";

class BurgerService {
    async updateBurger(burgerId, burgerChanges) {
        let foundBurger = await dbContext.Burger.findById(burgerId)
        foundBurger.name = burgerChanges.name ? burgerChanges.name : foundBurger.name
        foundBurger.description = burgerChanges.description ? burgerChanges.description : foundBurger.description
        foundBurger.price = burgerChanges.price ? burgerChanges.price : foundBurger.description
        await foundBurger.save()
        return foundBurger
    }
    async getBurgers() {
        let burgers = await dbContext.Burger.find()
        return burgers
    }
    async createBurger(burgerData) {
        let burger = await dbContext.Burger.create(burgerData)
        return burger
    }

    // NODEMON INSTALL npm install -g nodemon
    // NODEMON SCRIPT nodemon --exec npm start

}

export const burgerService = new BurgerService()
