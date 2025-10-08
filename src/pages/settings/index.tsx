import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import authServices from "@/services/auth/auth.services";
import { HttpStatusCode } from "axios";
import { useDispatch } from "@/store";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { logoutThunk } from "@/store/thunks/authThunks";

type ProfileFormData = {
  name: string;
  email: string;
  phone: string;
};

type SecurityFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function SettingsPage() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileData] = useState<ProfileFormData>({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
  });

  const [securityData, setSecurityData] = useState<SecurityFormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (securityData.newPassword !== securityData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setSecurityData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      toast({
        title: "Success",
        description: "Your password has been updated.",
      });
    }, 1000);
  };

  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const response = await authServices.signOut();
      if (response && response.status === HttpStatusCode.NoContent) {
        dispatch(logoutThunk());
        toast({ title: "Logout", description: "You have been logged out successfully." });
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="Settings" description="Manage your account settings and preferences." breadcrumb={[{ label: "Settings" }]}>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          {/* <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger> */}
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your profile information.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" disabled value={profileData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" disabled value={profileData.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" disabled value={profileData.phone} />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="destructive" onClick={() => handleSignOut()} className="w-full sm:w-auto">
                    Logout {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSecuritySubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={securityData.currentPassword}
                    onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={securityData.newPassword}
                    onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={securityData.confirmPassword}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Update Password</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">SMS Authentication</h4>
                  <p className="text-sm text-muted-foreground">Use your phone to verify your identity</p>
                </div>
                {/* <Switch /> */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Email Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-medium">Account updates</h5>
                      <p className="text-sm text-muted-foreground">Important updates about your account</p>
                    </div>
                    {/* <Switch
                      checked={notifications.email}
                      onCheckedChange={() => toggleNotification("email")}
                    /> */}
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-medium">Monthly reports</h5>
                      <p className="text-sm text-muted-foreground">Monthly spending and activity reports</p>
                    </div>
                    {/* <Switch
                      checked={notifications.monthlyReports}
                      onCheckedChange={() => toggleNotification("monthlyReports")}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Push Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-medium">Payment reminders</h5>
                      <p className="text-sm text-muted-foreground">Reminders for upcoming payments</p>
                    </div>
                    {/* <Switch
                      checked={notifications.paymentReminders}
                      onCheckedChange={() => toggleNotification("paymentReminders")}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your subscription and payment methods.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">QuickSplit Pro</h4>
                      <p className="text-sm text-muted-foreground">Current Plan</p>
                    </div>
                    <Button variant="outline">Change Plan</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Payment Methods</h4>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">No payment methods on file</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Add Payment Method
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Billing History</h4>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">No billing history available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
