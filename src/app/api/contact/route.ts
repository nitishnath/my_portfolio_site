import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // In a real app, integrate with email or database here.
  // Simulate processing delay.
  await new Promise((r) => setTimeout(r, 500));
  if (!data?.email || !data?.message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}