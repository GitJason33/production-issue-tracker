'use client';

import {Button, TextArea, TextField} from "@radix-ui/themes";


function NewIssue() {
	return <>
		<div className='max-w-xl space-y-3'>
			<TextField.Root>
				<TextField.Input placeholder="Title..."/>
			</TextField.Root>

			<TextArea placeholder="Description..."/>

			<Button>Submit new issue</Button>
		</div>
	</>;
}

export default NewIssue;