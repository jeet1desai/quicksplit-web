import Navigation from "@/components/navigation";

const TermsAndConditions = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen text-left bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="mb-12 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              <p className="text-muted-foreground text-sm">
                Last updated: October 7, 2024
              </p>
            </div>
          </div>

          <div className="glass-hover bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/50 shadow-sm">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Welcome to{" "}
              <span className="font-medium text-foreground">QuickSplit</span>.
              These Terms & Conditions outline the rules and regulations for
              using our service.
            </p>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Acceptance & Eligibility
                </h2>
              </div>
              <div className="bg-muted/20 p-6 rounded-xl border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  By using QuickSplit, you confirm you are at least 13 years old
                  and have the legal capacity to enter into these Terms. If you
                  do not agree, do not use the Service.
                </p>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Description of Service
                </h2>
              </div>
              <ul className="space-y-3 pl-6">
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  Capture expenses via WhatsApp messages, manual entries,
                  uploads (files/photos/voice notes), and connected or forwarded
                  emails.
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  Parse and categorize transactions; generate
                  daily/weekly/monthly reports and budgeting insights.
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  Optional reminders, summaries, and notifications via WhatsApp
                  or email (opt-in).
                </li>
              </ul>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  3. Accounts & Security
                </h2>
              </div>
              <div className="bg-muted/20 p-6 rounded-xl border border-border/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>
                      You are responsible for the accuracy of your account
                      details and for keeping access credentials secure.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>
                      Notify us immediately of any suspected unauthorized
                      access. We are not liable for losses due to compromised
                      accounts under your control.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  4. User Content
                </h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You retain ownership of content you provide, including files,
                photos, voice notes, and emails ("User Content"). You grant us a
                limited, revocable license to process User Content solely to
                provide the Service (e.g., OCR, transcription, classification,
                reporting).
              </p>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Acceptable Use
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Prohibited Activities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • No unlawful, harmful, fraudulent, or abusive activity
                    </li>
                    <li>
                      • No attempts to reverse engineer or disrupt the Service
                    </li>
                    <li>
                      • No uploading of malicious code or unauthorized content
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Content Restrictions
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Only upload content you have rights to</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Maintain data accuracy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Subscriptions, Billing & Refunds
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">Billing</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Paid plans are billed in advance and renew automatically
                    </li>
                    <li>• Taxes may apply to your subscription</li>
                    <li>
                      • Free trials convert to paid plans unless cancelled
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">Refunds</h4>
                  <p className="text-sm text-muted-foreground">
                    Refunds are not provided except where required by law or as
                    expressly stated (e.g., first purchase within 7 days).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Third-Party Platforms
                </h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We integrate with platforms like WhatsApp and Gmail. Their terms
                also apply. We comply with WhatsApp/Meta policies and Gmail's
                limited-use requirements.
              </p>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  8. Intellectual Property
                </h2>
              </div>
              <div className="bg-muted/20 p-6 rounded-xl border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  The Service and related materials remain our property or that
                  of our licensors. You get a limited license to use QuickSplit.
                  Feedback you provide may be used freely by us.
                </p>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  9. No Financial Advice
                </h2>
              </div>
              <div className="bg-muted/20 p-6 rounded-xl border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  QuickSplit organizes expenses and provides insights. It is not
                  financial, investment, tax, or legal advice. All decisions
                  remain your responsibility.
                </p>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  10. Disclaimers & Liability
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Service "As Is"
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The Service is provided "as is" and "as available." We
                    disclaim warranties to the maximum extent permitted by law.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Liability
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We are not liable for indirect or consequential losses. Our
                    total liability is limited to fees paid in the past 12
                    months.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  11. Suspension & Termination
                </h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may suspend or terminate your access for non-payment, abuse,
                or legal reasons. You may terminate by cancelling your
                subscription and requesting data deletion.
              </p>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  12. Governing Law
                </h2>
              </div>
              <div className="bg-muted/20 p-6 rounded-xl border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India. Courts at
                  [City/State] have exclusive jurisdiction. We encourage
                  resolving disputes informally before legal action.
                </p>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  13. Contact
                </h2>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Have Questions?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our support team for any questions about these Terms
                    & Conditions.
                  </p>
                  <a
                    href="mailto:support@quicksplit.app"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email Support
                  </a>
                </div>
              </div>
            </section>

            <div className="text-center text-sm text-muted-foreground mt-12">
              <p>
                By continuing to use QuickSplit, you agree to these Terms &
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
