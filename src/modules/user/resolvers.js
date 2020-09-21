// Import 
import bcrypt from 'bcrypt'

//App Imports
import serverConfig from '../../config/server.json'
import parmas from '../../config/params.json'
import models from '../../setup/models'

//Create
export async function create(parentValue, { name, email, password }) {

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


// Get All
export async function getAll() {
    return await models.User.findAll()
}

// Get Genders
export async function getGenders() {
    return Object.values(parmas.user.gender);
}