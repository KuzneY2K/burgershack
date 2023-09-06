import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BurgerSchema } from '../models/Burger.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Burger = mongoose.model('Burgers', BurgerSchema)
}

export const dbContext = new DbContext()
