'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { createIssueSchema } from "@/tools/validationSchemas";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";

import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';


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
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitFn = async (data :IssueForm) => {
		try {
			setIsSubmitting(true);
			await axios.post('/api/issues', data);
			router.push('/issues');
		} catch(err) {
			setError('An unexpected error occurred');
		} finally {
			setIsSubmitting(false);
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

				<Button disabled={isSubmitting}>
					Submit new issue {isSubmitting && <Spinner/>}
				</Button>
			</form>
		</div>
	</>;
}

export default NewIssue;