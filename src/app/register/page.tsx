'use client';

import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRegisterSchema } from "@/tools/validationSchemas";
import {z} from "zod";

type RegisterForm = z.infer<typeof createRegisterSchema>;



function Register() {
	const {
		register,
		handleSubmit,
	} = useForm<RegisterForm>({
		resolver: zodResolver(createRegisterSchema),
	});

	const submitFn = () => {
		console.log('register?');
	}


	return <>
		<form className='space-y-3 max-w-96' onSubmit={handleSubmit(submitFn)}>
			<h2 className='text-center font-bold text-2xl'>REGISTER</h2>

			<TextField.Root>
				<TextField.Input placeholder="Email..." {...register('email')}/>
			</TextField.Root>

			<TextField.Root>
				<TextField.Input placeholder="Username..." {...register('username')}/>
			</TextField.Root>

			<TextField.Root>
				<TextField.Input placeholder="Password..." {...register('password')}/>
			</TextField.Root>

			<Button>Register</Button>

			<p>
				Already have an account?&nbsp;
				<Link href='/login' className='underline'>login</Link>
			</p>
		</form>
	</>
}

export default Register;