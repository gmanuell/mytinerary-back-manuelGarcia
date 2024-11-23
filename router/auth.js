import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signout from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";

const routerAuth = Router()

routerAuth.post('/signin', accountNoExist, isValidadPassword, generateToken, signIn)
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signout)

// Ruta para iniciar sesion con google
routerAuth.get(
    '/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)
routerAuth.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signInGoogle
)



export default routerAuth