import { PrismaClient } from "@prisma/client";

import { RegistrationSchema } from "@/lib/validations/auth";

const prisma = new PrismaClient();

interface CreateUser {
  display : string
}

export const getusersById = async (id : string) =>{
    try {
        
    } catch (error) {
        console.error("error fetching user :" , error);
    }
}

export const getUsers = async () =>{
    try {
        
    } catch (error) {
        console.error("error to fetch files",error);
    }
}



export const createUser = async ({data }:RegistrationSchema) =>{
    try {
        
    } catch (error) {
        console.error("error to Creating user",error);
        
    }
}