import { Wallet, ArrowUpDown, Phone, CheckCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FeatureTab } from "./feature-tab";
import { FeatureContent } from "./feature-content";

const features = [
  {
    title: "Add to Your Group",
    description:
      "Invite our bot to your WhatsApp group. One-time setup takes less than 30 seconds.",
    icon: <Phone className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
  },
  {
    title: "Log Expenses",
    description:
      "Type naturally: '50 USD for dinner to @Alex @Sarah'. The bot parses and tracks everything.",
    icon: <Wallet className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
  },
  {
    title: "Settle Instantly",
    description:
      "Check balances anytime with 'who owes me?' or settle up with a simple command.",
    icon: <CheckCheck className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
  },
  {
    title: "Pay Instantly",
    description: "Pay instantly with Venmo, UPI, or any other payment method.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-left">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-left">
          QuickSplit is a simple and easy-to-use platform that allows you to
          split your expenses with your friends and family.
        </p>
      </div>

      <Tabs defaultValue={features[0].title} className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[50%] w-full space-y-3">
            <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  <FeatureTab
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    isActive={false}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="md:w-[50%] w-full">
            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title}
                className="mt-0 h-full"
              >
                <FeatureContent image={feature.image} title={feature.title} />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
};
