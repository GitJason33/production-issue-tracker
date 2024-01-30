import {z} from "zod";

export const createIssueSchema = z.object({
	title: z.string().min(1, 'Title is required').max(255),
	description: z.string().min(1, 'Description is required')
});


export const createRegisterSchema = z.object({
	email: z.string().email('Invalid email format'),
	username: z.string().min(1, 'Username is Required').max(25),
	password: z.string().min(8, 'Password must be at least 8 characters')
});


export const createLoginSchema = z.object({
	email: z.string().email('Invalid email format'),
	password: z.string().min(8, 'Password must be at least 8 characters')
});