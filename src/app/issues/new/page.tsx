'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { createIssueSchema } from "@/tools/validationSchemas";

import {Button, Callout, Text, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';
import ErrorMessage from "@/components/ErrorMessage";


type IssueForm = z.infer<typeof createIssueSchema>;


function NewIssue() {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IssueForm>({
		resolver: zodResolver(createIssueSchema)
	});
	const [error, setError] = useState('');

	const submitFn = async (data :IssueForm) => {
		try {
			await axios.post('/api/issues', data);
			router.push('/issues');
		} catch(err) {
			setError('An unexpected error occurred');
		}
	};


	return <>
		<div className='max-w-xl'>
			{error && <>
				<Callout.Root color='red' className='mb-5'>
					<Callout.Text>
						{error}
					</Callout.Text>
				</Callout.Root>
			</>}

			<form className='space-y-3' onSubmit={handleSubmit(submitFn)}>
				<TextField.Root>
					<TextField.Input
						placeholder="Title..."
						{...register('title')}
					/>
				</TextField.Root>

				<ErrorMessage>
					{errors.title?.message}
				</ErrorMessage>

				{/* render the MDE textarea */}
				<Controller
					name='description'
					control={control}
					render={({ field }) => (
						<SimpleMDE placeholder="Description..." {...field} />
					)}
				/>

				<ErrorMessage>
					{errors.description?.message}
				</ErrorMessage>

				<Button>Submit new issue</Button>
			</form>
		</div>
	</>;
}

export default NewIssue;