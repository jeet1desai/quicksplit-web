import { Toaster } from "sonner";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndConditions from "./pages/terms-conditions";
import AboutPage from "./pages/about";
import { FAQSection } from "./components/faq-section";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import DashboardHome from "./pages/dashboard";
import { DashboardLayout } from "./pages/dashboard/layout";
import { useDispatch } from "./store";
import { bindApiDeps, setApiNotifier } from "./services/base-service";
import { useToast } from "./hooks/use-toast";

const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  if (!isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <ApiBinder>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-background">
          <Toaster position="top-center" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/faq" element={<FAQSection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardHome />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </ApiBinder>
  );
}

function ApiBinder({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { toast } = useToast();

  useEffect(() => {
    bindApiDeps({ navigate, dispatch, location });
    setApiNotifier(({ title, description }) => {
      toast({ title, description });
    });
  }, [navigate, dispatch, location]);

  return <>{children}</>;
}
