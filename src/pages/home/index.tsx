import { FeaturesSection } from "@/components/features-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import CTABackground from "@/assets/cta-bg.png";
import Conversation from "@/components/conversation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen text-foreground mx-auto text-center">
      <Navigation />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-center mb-4 px-4 py-1.5 rounded-full glass mx-auto"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            WhatsApp first <span className="text-primary font-bold">
              ·
            </span>{" "}
            Alpha mode
          </span>
        </motion.div>

        <div className="max-w-4xl relative z-10 mx-auto">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-center">
            <span className="text-gray-200 font-semibold mb-4">
              Split Bills
            </span>
            <br />
            <span className="text-white font-semibold">Not Friendships</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center mx-auto"
          >
            Track shared expenses effortlessly in your WhatsApp groups. <br />
            No apps to download, no spreadsheets to manage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center mx-auto justify-center"
          >
            <Link target="_blank" to="https://wa.me/message/B7TFROF4KEZNM1">
              <Button size="lg" className="button-gradient">
                Try on WhatsApp
              </Button>
            </Link>

            <Link to="/about">
              <Button size="lg" variant="link" className="text-white">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <Conversation />
          </div>
        </motion.div>
      </motion.section>

      {/* <LogoCarousel /> */}

      <div id="features" className="">
        <FeaturesSection />
      </div>

      <section className="container px-4 py-20 relative">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${CTABackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try QuickSplit on WhatsApp
          </h2>
          <Button size="lg" className="button-gradient">
            Create Account
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      <div className="text-center mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
