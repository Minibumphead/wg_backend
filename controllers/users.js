import mongoose from 'mongoose'
import UserModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

export const getUsers = async(req, res) => {
    try{
        const all_users = await UserModel.find()
        res.send(all_users)
    } catch(error){
        console.log(error)
    }
}

export const createUser = async(req, res) => {
    try {
        const data = req.body
        
        const hashedPw = await bcrypt.hash(data.password, 10)
        const new_user = await UserModel.create({...data, hash: hashedPw})
        res.send({id: new_user._id, username: new_user.username, email:new_user.email, score: new_user.score})
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async(req, res) => {
    const id = req.params.id
    const data = req.body
    console.log(id)
    const updated_user = await UserModel.findByIdAndUpdate(id, data)
    res.send(updated_user)
}

export const deleteUser = async(req, res) => {
    const id = req.params.id
    console.log(id)
    await UserModel.findByIdAndDelete(id)
    const rem_users = await UserModel.find()
    res.send(rem_users)
}