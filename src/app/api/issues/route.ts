import {NextRequest, NextResponse as resp} from "next/server";
import prisma from "@/../prisma/client";
import { validationSchemas } from "@/tools/validationSchemas";


export async function POST(req :NextRequest) {
	try {
		const body = await req.json();
		const validation = validationSchemas.safeParse(body);


		if(!validation.success)
			return resp.json(validation.error.format(), { status: 400 });


		const newIssue = await prisma.issue.create({
			data: { title: body.title, description: body.description }
		});

		return resp.json(newIssue, { status: 201 });
	} catch (err: Error | any) {
		return resp.json(err.message, { status: 500 });
	}
}