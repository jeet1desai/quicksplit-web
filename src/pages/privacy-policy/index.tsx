import Navigation from "@/components/navigation";

const PrivacyPolicy = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen text-left bg-gradient-to-b from-background to-muted/20 pt-16">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="mb-12 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              <p className="text-muted-foreground text-sm">
                Last updated: October 7, 2024
              </p>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/50 shadow-sm">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At <span className="font-medium text-foreground">QuickSplit</span>
              , we respect your privacy and are committed to protecting your
              personal data. This Privacy Policy explains how we collect, use,
              and share your information when you use our service.
            </p>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                We collect the minimum information necessary to deliver and
                improve QuickSplit. The exact data you share depends on the
                features you use.
              </p>
              <ul className="space-y-3 pl-6">
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  <span className="font-medium text-foreground">
                    Account Information:
                  </span>{" "}
                  Name, email address, and phone number (when you sign up).
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  <span className="font-medium text-foreground">
                    Expense Data:
                  </span>{" "}
                  Transaction details, amounts, categories, and any notes you
                  add.
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  <span className="font-medium text-foreground">
                    Usage Data:
                  </span>{" "}
                  How you interact with our app, including features used and
                  time spent.
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  <span className="font-medium text-foreground">
                    Device Information:
                  </span>{" "}
                  Device type, operating system, and browser information.
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
                  <span className="font-medium text-foreground">
                    Location Data:
                  </span>{" "}
                  Only if you choose to enable location-based features.
                </li>
              </ul>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  2. How We Use Information
                </h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 pl-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Provide and maintain our service</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Personalize your experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Improve our services and develop new features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Communicate with you about updates and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>Detect and prevent fraud</span>
                </li>
              </ul>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  3. How We Share Information
                </h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may share your information with:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Service Providers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Companies that help us operate our services under strict
                    confidentiality agreements.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Group Members
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Other users in your expense groups (only the necessary
                    information).
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Legal Requirements
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    When required by law or to protect our rights and safety.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50">
                  <h4 className="font-medium text-foreground mb-2">
                    Business Transfers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    In case of merger, acquisition, or sale of assets.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  4. Data Security
                </h2>
              </div>
              <div className="bg-muted/20 p-6 rounded-xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement{" "}
                      <span className="font-medium text-foreground">
                        enterprise-grade security measures
                      </span>{" "}
                      including encryption, access controls, and regular
                      security audits to protect your personal data. However, no
                      method of transmission over the internet is 100% secure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Your Rights & Choices
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M2 12s3-7.5 10-7.5 10 7.5 10 7.5-3 7.5-10 7.5S2 12 2 12Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Access Your Data
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Request a copy of the personal data we hold about you.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    </svg>
                    Correct Information
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Update or correct any inaccurate personal information.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    Delete Data
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Request deletion of your personal information.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Restrict Processing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Limit how we use your personal information.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                      <path d="M16 16h5v5"></path>
                    </svg>
                    Data Portability
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Request your data in a structured, machine-readable format.
                  </p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-8 8"></path>
                      <path d="M9 17v-2a3 3 0 0 1 6 0v2"></path>
                    </svg>
                    Withdraw Consent
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Withdraw your consent at any time where applicable.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Data Retention
                </h2>
              </div>
              <div className="relative p-6 bg-muted/20 rounded-xl border border-border/50 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="relative">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We retain your personal data only as long as necessary to
                    provide our services and for legitimate business purposes.
                    You can request deletion of your account at any time.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Account Data: Until Deletion
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Activity Logs: 90 Days
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Backups: 30 Days
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  7. International Transfers
                </h2>
              </div>
              <div className="p-6 bg-muted/20 rounded-xl border border-border/50 flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in
                    countries other than your own. We implement{" "}
                    <span className="font-medium text-foreground">
                      Standard Contractual Clauses (SCCs)
                    </span>{" "}
                    and other appropriate safeguards to ensure your data remains
                    protected in accordance with applicable data protection
                    laws.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  8. Children's Privacy
                </h2>
              </div>
              <div className="p-6 bg-muted/20 rounded-xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M12 2a5 5 0 0 0-5 5v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-4-4.85V2Z"></path>
                      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Our service is{" "}
                      <span className="font-medium text-foreground">
                        not intended for users under 16 years of age
                      </span>
                      . We do not knowingly collect personal information from
                      children. If you are a parent or guardian and believe your
                      child has provided us with personal information, please
                      contact us immediately at{" "}
                      <a
                        href="mailto:privacy@quicksplit.app"
                        className="text-primary hover:underline"
                      >
                        privacy@quicksplit.app
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  9. Changes to This Policy
                </h2>
              </div>
              <div className="p-6 bg-muted/20 rounded-xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                      <path d="M16 16h5v5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time. When
                      we make changes, we'll update the "Last updated" date at
                      the top of this page and, if the changes are significant,
                      we'll provide a more prominent notice (including, for
                      certain services, email notification of privacy policy
                      changes).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-semibold text-foreground">
                  10. Contact Us
                </h2>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Questions About Our Privacy Policy?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're here to help you understand how we handle your data.
                    Reach out to our privacy team with any questions or
                    concerns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:privacy@quicksplit.app"
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
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
