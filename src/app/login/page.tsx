'use client';

import Link from "next/link";
import { z } from "zod";
import { createLoginSchema } from "@/tools/validationSchemas";

import { useForm } from "react-hook-form";
import { Button, TextField } from "@radix-ui/themes";
import {zodResolver} from "@hookform/resolvers/zod";

type LoginForm = z.infer<typeof createLoginSchema>;


function Login() {
	const {
		register,
		handleSubmit,
	} = useForm<LoginForm>({
		resolver: zodResolver(createLoginSchema),
	});

	const submitFn = () => {
		console.log('login?');
	}


	return <>
		<form className='space-y-3 max-w-96' onSubmit={handleSubmit(submitFn)}>
			<h2 className='text-center font-bold text-2xl'>LOGIN</h2>

			<TextField.Root>
				<TextField.Input placeholder="Email..." {...register('email')}/>
			</TextField.Root>

			<TextField.Root>
				<TextField.Input placeholder="Password..." {...register('password')}/>
			</TextField.Root>

			<Button>Login</Button>

			<p>
				Don't have an account?&nbsp;
				<Link href='/register' className='underline'>register</Link>
			</p>
		</form>
	</>
}

export default Login;