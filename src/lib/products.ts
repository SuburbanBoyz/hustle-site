import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const productId = String(formData.get("productId") || "");
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: "Invalid productId" }, { status: 400 });
  }

  // If Stripe isn't connected yet, don't crash — just redirect
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.redirect(new URL("/setup/stripe", req.url));
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2025-01-27.acacia",
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: product.priceCents,
          product_data: {
            name: product.name,
            description: product.description,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/success`,
    cancel_url: `${siteUrl}/shop`,
  });

  return NextResponse.redirect(session.url!, 303);
}