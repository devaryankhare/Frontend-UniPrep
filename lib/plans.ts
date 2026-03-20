export type PlanId = "basic" | "pro" | "advance";

export type PlanDefinition = {
  id: PlanId;
  highlight: boolean;
  planType: string;
  name: string;
  strikeThrough: string;
  pricing: string;
  amountPaise: number;
  description: string;
  includes: readonly string[];
};

export const PLAN_CATALOG: readonly PlanDefinition[] = [
  {
    id: "basic",
    highlight: false,
    planType: "Basic",
    name: "Mock Tests",
    strikeThrough: "Rs. 249",
    pricing: "Rs. 149",
    amountPaise: 14900,
    description: "Practice with CUET level Mocks",
    includes: [
      "Full Length Mocks",
      "Rank Prediction",
      "Leaderboard",
      "Performance Analytics",
      "Detailed Solutions",
    ],
  },
  {
    id: "pro",
    highlight: true,
    planType: "Pro",
    name: "Crash Course",
    strikeThrough: "Rs. 5999",
    pricing: "Rs. 2999",
    amountPaise: 299900,
    description: "Complete CUET preparation and college guidance.",
    includes: [
      "Fast Track Revision Classes",
      "PYQ Practice Session",
      "Marathon Revision Classes",
      "Mock Tests Access",
      "Mentorship Community",
      "CUET Aspirant Discussion Group",
      "DU Preference Filing Guidance",
      "Admission Walkthrough",
      "Accomdation & Fresher Guide",
    ],
  },
  {
    id: "advance",
    highlight: false,
    planType: "Advance",
    name: "Crash Course Pro",
    strikeThrough: "Rs. 6499",
    pricing: "Rs. 3999",
    amountPaise: 399900,
    description: "Crash Course & Bonus guidance",
    includes: [
      "Everything In Crash Course",
      "Extra Stratergy Workshop",
      "Live Mock Analysis Session",
      "DU College Deep Dive Sessions",
      "Alumini Network",
    ],
  },
] as const;

export function getPlanById(planId: string) {
  return PLAN_CATALOG.find((plan) => plan.id === planId);
}
