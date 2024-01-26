import { NextRequest, NextResponse as resp } from "next/server";
import { z } from 'zod';
import prisma from "@/../prisma/client";


const createIssueSchema = z.object({
	title: z.string().min(1).max(255),
	description: z.string().min(1)
});


export async function POST(req :NextRequest) {
	try {
		const body = await req.json();
		const validation = createIssueSchema.safeParse(body);


		if(!validation.success)
			return resp.json(validation.error.errors, { status: 400 });


		const newIssue = await prisma.issue.create({
			data: { title: body.title, description: body.description }
		});

		return resp.json(newIssue, { status: 201 });
	} catch (err: Error | any) {
		return resp.json(err.message, { status: 500 });
	}
}