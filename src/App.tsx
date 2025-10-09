import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import { useDispatch } from "./store";
import { bindApiDeps, setApiNotifier } from "./services/base-service";
import { useToast } from "./hooks/use-toast";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "./components/ui/toaster";
import { cookieStorage } from "./lib/cookie";
import SettingsPage from "./pages/settings";
import { useAuth } from "./hooks/useAuth";

const isAuthenticated = () => {
  return !!cookieStorage.getItem("p_id");
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useAuth();

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated()) {
        navigate("/login");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
};

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/settings");
    }
  }, [navigate]);

  if (isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-background">
          <Toaster />
          <BrowserRouter>
            <ApiBinder>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/faq" element={<FAQSection />} />
                <Route
                  element={
                    <AuthRoute>
                      <Outlet />
                    </AuthRoute>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Route>

                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Outlet />
                    </ProtectedRoute>
                  }
                >
                  <Route path="dashboard" element={<DashboardHome />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </ApiBinder>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </Provider>
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
