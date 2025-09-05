import {z} from "zod";

export const usernameValidation=z
  .string()
  .min(2,"username should be atlest 2 characters")
  .max(20,"username can not contain more than 20 characters")
  .regex(/^[a-zA-Z0-9]+$/,"Username ust not contain special character")

export const signUpSchema=z.object({
  username:usernameValidation,
  email:z.string().email.({message:'Invalid email Address'}),
  password:z.string().min(6,{message:'password must be more than 6 characters'})
})