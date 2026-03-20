import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getPlanById } from "@/lib/plans";
import { createRazorpayOrder, getRazorpayKeyId } from "@/lib/razorpay";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 },
      );
    }

    const body = (await req.json().catch(() => null)) as { planId?: string } | null;
    const planId = body?.planId?.trim() || "";
    const plan = getPlanById(planId);

    if (!plan) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 },
      );
    }

    const order = await createRazorpayOrder({
      amountPaise: plan.amountPaise,
      currency: "INR",
      receipt: `${plan.id}-${Date.now()}`,
      userId: user.id,
      planId: plan.id,
      planName: `${plan.planType} - ${plan.name}`,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: getRazorpayKeyId(),
      planId: plan.id,
      planName: `${plan.planType} - ${plan.name}`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create order";

    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
