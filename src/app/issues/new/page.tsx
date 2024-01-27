'use client';

import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';


function NewIssue() {
	return <>
		<div className='max-w-xl space-y-3'>
			<TextField.Root>
				<TextField.Input placeholder="Title..."/>
			</TextField.Root>

			<SimpleMDE placeholder="Description..."/>

			<Button>Submit new issue</Button>
		</div>
	</>;
}

export default NewIssue;