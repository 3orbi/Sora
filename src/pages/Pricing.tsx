import { useState } from "react";
import Navbar from "../components/Navbar";
import MiniPlayer from "../components/MiniPlayer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Headphones, Users, Loader2 } from "lucide-react";
import { stripePromise } from "@/lib/stripe";

const plans = [
  {
    name: "Free",
    priceId: null,
    price: "$0",
    period: "/forever",
    bg: "bg-surface-secondary",
    border: false,
    popular: false,
    filled: false,
    buttonLabel: "Start Listening",
    features: [
      { text: "Standard Audio Quality", active: true },
      { text: "Ad-supported Playback", active: true },
      { text: "Offline Downloads", active: false },
    ],
  },
  {
    name: "Standard",
    priceId: "price_standard_placeholder",
    price: "$9.99",
    period: "/month",
    bg: "bg-card",
    border: true,
    popular: true,
    filled: true,
    buttonLabel: "Choose Plan",
    features: [
      { text: "High-Fidelity Audio (320kbps)", active: true },
      { text: "Ad-Free Experience", active: true },
      { text: "Unlimited Offline Downloads", active: true },
      { text: "Exclusive Vault Releases", active: true },
    ],
  },
  {
    name: "Premium",
    priceId: "price_premium_placeholder",
    price: "$19.99",
    period: "/month",
    bg: "bg-surface-secondary",
    border: false,
    popular: false,
    filled: false,
    buttonLabel: "Choose Plan",
    features: [
      { text: "Lossless Spatial Audio", active: true },
      { text: "Master Quality Authenticated", active: true },
      { text: "Up to 6 Family Members", active: true },
      { text: "Early Ticket Access", active: true },
    ],
  },
];

const Pricing = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (priceId: string | null, planName: string) => {
    if (!priceId) return; // Free plan
    if (!stripePromise) {
      alert("Stripe is not configured yet. Add VITE_STRIPE_PUBLISHABLE_KEY to your .env file.");
      return;
    }
    setLoadingPlan(planName);
    try {
      const stripe = await stripePromise;
      // In production, you'd call your backend to create a Checkout Session
      // For now, we redirect to a Stripe payment link placeholder
      alert(`Stripe Checkout would open for plan: ${planName} (${priceId}). Configure your Stripe price IDs and backend to enable real payments.`);
    } catch (err) {
      console.error("Stripe error:", err);
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 text-center max-w-[800px] mx-auto px-8">
        <Badge className="bg-transparent text-rose-500 hover:bg-transparent px-0 font-black text-[10px] tracking-[2px] uppercase border-0">
          MEMBERSHIP
        </Badge>
        <h1 className="mt-3 font-extrabold text-[72px] leading-[72px] text-slate-heading" style={{ letterSpacing: -3.6 }}>
          Invest in Sound.
        </h1>
        <p className="mt-6 text-lg text-slate-body leading-7">
          Choose the plan that fits your listening style. Upgrade anytime to unlock the full vault experience.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-[1080px] mx-auto px-8 flex gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex-1 relative rounded-4xl border-0 shadow-none ${plan.bg} ${
              plan.border ? "ring-2 ring-rose-500 shadow-[0_8px_40px_rgba(164,48,115,0.1)]" : ""
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rose-500 hover:bg-rose-500 text-white font-bold text-[10px] tracking-[2px] uppercase border-0 px-5 py-1.5">
                MOST POPULAR
              </Badge>
            )}
            <CardHeader className="p-8 pb-0">
              <CardTitle className="text-2xl font-bold text-slate-sub">{plan.name}</CardTitle>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-5xl font-black text-slate-heading" style={{ letterSpacing: -2 }}>
                  {plan.price}
                </span>
                <span className="text-base text-slate-muted">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 flex flex-col flex-1">
              <div className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <Check
                      size={16}
                      className={plan.border ? "text-rose-500" : "text-slate-body"}
                      style={{ opacity: feature.active ? 1 : 0.4 }}
                    />
                    <span
                      className={`text-sm ${
                        plan.border ? "text-slate-heading font-medium" : "text-slate-body"
                      } ${!feature.active ? "opacity-40 line-through" : ""}`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.filled ? "default" : "outline"}
                onClick={() => handleCheckout(plan.priceId, plan.name)}
                disabled={loadingPlan === plan.name}
                className={`w-full rounded-full py-6 text-sm font-semibold transition-all hover:scale-[1.03] ${
                  plan.filled
                    ? "bg-secondary hover:bg-secondary/90 text-white shadow-lg"
                    : "text-slate-sub hover:bg-rose-50"
                }`}
              >
                {loadingPlan === plan.name ? <Loader2 size={16} className="animate-spin" /> : plan.buttonLabel}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Beyond Section */}
      <div className="max-w-[1080px] mx-auto px-8 py-24">
        <div className="flex gap-12 items-center">
          <div className="flex-1 h-[400px] relative overflow-hidden rounded-4xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />
          </div>

          <div className="flex-1">
            <h2 className="font-extrabold text-[30px] text-slate-heading" style={{ letterSpacing: -0.9 }}>
              Beyond just a stream, it's an archive.
            </h2>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-50">
                  <Headphones size={20} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-heading">Lossless Precision</h4>
                  <p className="mt-1 text-sm text-slate-body leading-[23px]">
                    Experience every note as the artist intended, with studio-quality lossless audio streaming.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-50">
                  <Users size={20} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-heading">Human Curation</h4>
                  <p className="mt-1 text-sm text-slate-body leading-[23px]">
                    No algorithms. Real curators handpick every playlist and recommendation just for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 text-center border-t">
        <p className="text-xs text-slate-muted">© 2026 Sonic Atelier. All rights reserved.</p>
      </footer>

      <MiniPlayer />
    </div>
  );
};

export default Pricing;
