import { Wallet, ArrowUpDown, Phone, CheckCheck } from "lucide-react";

const features = [
  {
    title: "Add to Your Group",
    description:
      "Invite our bot to your WhatsApp group. One-time setup takes less than 30 seconds.",
    icon: <Phone className="w-8 h-8 mb-4 text-primary justify-self-center" />,
  },
  {
    title: "Log Expenses",
    description:
      "Type naturally: '50 USD for dinner to @Alex @Sarah'. The bot parses and tracks everything.",
    icon: <Wallet className="w-8 h-8 mb-4 text-primary justify-self-center" />,
  },
  {
    title: "Settle Instantly",
    description:
      "Check balances anytime with 'who owes me?' or settle up with a simple command.",
    icon: <CheckCheck className="w-8 h-8 mb-4 text-primary justify-self-center" />,
  },
  {
    title: "Pay Instantly",
    description: "Pay instantly with Venmo, UPI, or any other payment method.",
    icon: <ArrowUpDown className="w-8 h-8 mb-4 text-primary justify-self-center" />,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-16">
      <div className="max-w-2xl mb-12 text-center mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-400">
          QuickSplit makes splitting expenses with friends and family simple and hassle-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
          >
            <div className="text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
