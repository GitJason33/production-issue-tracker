'use client';

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';


interface IssueForm {
	title: String;
	description: String;
}


function NewIssue() {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();
	const submitFn = async (data :IssueForm) => {
		await axios.post('/api/issues', data);
		router.push('/issues');
	};


	// @ts-ignore
	return <>
		<form className='max-w-xl space-y-3' onSubmit={handleSubmit(submitFn)}>
			<TextField.Root>
				<TextField.Input
					placeholder="Title..."
					{...register('title')}
				/>
			</TextField.Root>

			{/* render the MDE textarea */}
			<Controller
				name='description'
				control={control}
				render={({ field }) => (
					<SimpleMDE placeholder="Description..." {...field} />
				)}
			/>

			<Button>Submit new issue</Button>
		</form>
	</>;
}

export default NewIssue;