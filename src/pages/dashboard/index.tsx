import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 hover:bg-accent/50 rounded-md p-1.5 transition-colors" />
            <Separator orientation="vertical" className="h-6 bg-border/60" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-muted-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-sm font-medium">
                    Overview
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your account.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-sm font-medium text-muted-foreground">Total Balance</CardDescription>
                <CardTitle className="text-3xl font-bold">$12,345.67</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-500 flex items-center">
                  <span className="font-medium">+12.5%</span>
                  <span className="ml-1 text-muted-foreground text-xs">from last month</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-sm font-medium text-muted-foreground">Recent Transactions</CardDescription>
                <CardTitle className="text-2xl font-bold">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">5</span> pending
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-sm font-medium text-muted-foreground">Upcoming Bills</CardDescription>
                <CardTitle className="text-2xl font-bold">3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Next bill: <span className="font-medium">Oct 15</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/30 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-sm font-medium">JD</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">Paid you $45.00 for dinner</p>
                        <p className="text-xs text-muted-foreground/70 mt-0.5">2 hours ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-foreground">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-background/50">
                    <span className="text-2xl">➕</span>
                    <span className="text-sm font-medium">Add Expense</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-background/50">
                    <span className="text-2xl">👥</span>
                    <span className="text-sm font-medium">Split Bill</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-background/50">
                    <span className="text-2xl">📊</span>
                    <span className="text-sm font-medium">View Reports</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-background/50">
                    <span className="text-2xl">⚙️</span>
                    <span className="text-sm font-medium">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
