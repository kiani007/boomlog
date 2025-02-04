import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db'; 
import { Webhook } from 'svix';
import { headers } from 'next/headers';

interface User {
    id: string;
    email_addresses: {
      email_address: string;
      primary: boolean;
    }[];
    first_name: string;
    last_name: string;
  }

interface evt{
  type: string;
  data: User
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users });
}
export async function POST(request: Request) {
  const payload = await request.json();
  const headerList = headers();
  const svixId = (await headerList).get('svix-id');
  const svixTimestamp = (await headerList).get('svix-timestamp');
  const svixSignature = (await headerList).get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: 'Missing headers' }, { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  let evt;

  try {
    evt = wh.verify(JSON.stringify(payload), {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as evt;
  } catch (err) {
    return NextResponse.json({ error: `Invalid webhook signature: ${err}` }, { status: 400 });
  }

  if (evt.type === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data;

    // here we can use the user data to create a new user in our database
    await prisma.user.create({
      data: {
        id: id,
        name: `${first_name} ${last_name}`,
        email: email_addresses[0].email_address,
        role: 'USER',
      },
    });
  }

  return NextResponse.json({ success: true });
}