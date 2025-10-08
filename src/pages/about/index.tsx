import Navigation from "@/components/navigation";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen text-left bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="mb-12 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                About Us
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              <p className="text-muted-foreground text-sm">
                Simplifying group expenses, one bill at a time
              </p>
            </div>
          </div>

          <div className="glass-hover bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/50 shadow-sm mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span className="font-medium text-foreground">QuickSplit</span>, we believe that splitting expenses with friends, 
              family, or roommates should be effortless and transparent. Our mission is to 
              make financial management in groups as simple as sending a message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-hover bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where no friendship is strained by the awkwardness of splitting bills. 
                We envision a future where group expenses are handled seamlessly, allowing people to 
                focus on what truly matters - their relationships and experiences.
              </p>
            </div>

            <div className="glass-hover bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  How It Works
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                QuickSplit integrates directly with WhatsApp, making it incredibly easy to track and split expenses. 
                Simply add your expenses through our bot, and let us handle the calculations. 
                We'll keep track of who owes what, so you don't have to.
              </p>
            </div>
          </div>

          <div className="glass-hover bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold text-foreground">
                Why Choose QuickSplit?
              </h2>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Seamless Integration</h3>
                  <p className="text-muted-foreground text-sm">Works directly within WhatsApp, no need to download another app.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Real-time Updates</h3>
                  <p className="text-muted-foreground text-sm">Get instant notifications about your shared expenses and balances.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Secure & Private</h3>
                  <p className="text-muted-foreground text-sm">Your financial data is protected with bank-level security measures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
