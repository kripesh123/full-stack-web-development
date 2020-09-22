// Import 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//App Imports
import serverConfig from '../../config/server.json'
import parmas from '../../config/params.json'
import models from '../../setup/models'

//SignUp
export async function signUp(parentValue, { name, email, password }) {

    //Check Users exists with same email 
    const user = await models.User.findOne({where: {email}})

    if(!user) {
        const passwordHash = await bcrypt.hash(password, serverConfig.saltRound)

        return await models.User.create({
            name,
            email,
            password: passwordHash,
            role: parmas.user.roles.user
        })
    } else {
        throw new Error(`The email ${ email } is already registered.`)
    }

}

//Login
export async function login(parentValue, { email, password }) {

    const user = await models.User.findOne({where: { email }})

    if(!user) {
        throw new Error(`No user found with ${email} email address.`)
    } else {
        const userDetails = user.get();

        const passwordMatch = await bcrypt.compare(password, userDetails.password)

        if(!passwordMatch) {
            throw new Error('Sorry password in incorrect')
        } else {
            const userDetailsToken = {
                id: userDetails.id,
                name: userDetails.name,
                email: userDetails.email,
                role: userDetails.role
            }

            return {
                user: userDetails,
                token: jwt.sign(userDetailsToken, serverConfig.secret, { expiresIn: 3600})
            }
        }

    }
}


// Get All
export async function getAll(parentValue, {}, { auth } ) {
    if( auth.isAuthenticated && auth.isAdmin) {
        return await models.User.findAll({ order: [['id', 'DESC']]})
    } else {
        return new Error('Operation denied')
    }
}

// update
export async function update(parentValue, {id, name, email, password, role}, { auth }) {
    if(auth.isAuthenticated && auth.isAdmin ) {
        return await models.User.update(
            {
                name, email, password, role
            },
            {where : { id }}
        )
    } else {
        return new Error('Operation denied')
    }
}

// get by id
export async function getById(parentValue, {id}, {auth}) {
    if(auth.isAuthenticated && auth.isAdmin ) {
        return models.User.findOne({ where: { id }})
    } else {
        return new Error('Operation denied')
    }
}

// remove 
export async function remove(parentValue, { id }, { auth }) {
    if(auth.isAuthenticated && auth.isAdmin ) {
        return models.User.destroy({ where: { id }})
    } else {
        return new Error('Operation denied')
    }
}

// Get Genders
export async function getGenders() {
    return Object.values(parmas.user.gender);
}

