import * as React from "react"
import { Home, Wallet, Users, CreditCard, PieChart, Settings, ChevronDown, Plus } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Sidebar navigation data
const navItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Expenses",
    icon: CreditCard,
    url: "/expenses",
    items: [
      { title: "All Expenses", url: "/expenses" },
      { title: "Add New", url: "/expenses/new" },
      { title: "Categories", url: "/expenses/categories" },
    ],
  },
  {
    title: "Groups",
    icon: Users,
    url: "/groups",
    items: [
      { title: "All Groups", url: "/groups" },
      { title: "Create Group", url: "/groups/new" },
    ],
  },
  {
    title: "Balances",
    icon: Wallet,
    url: "/balances",
  },
  {
    title: "Reports",
    icon: PieChart,
    url: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="floating"
      className="border-r border-border/50 bg-background/80 backdrop-blur-sm"
      {...props}
    >
      <SidebarHeader className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">QS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">QuickSplit</span>
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </SidebarHeader>
      
      <div className="p-3">
        <Button className="w-full gap-2" size="sm">
          <Plus className="h-4 w-4" />
          <span>Add Expense</span>
        </Button>
      </div>
      
      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild
                  variant="default"
                  className="w-full justify-start gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/30"
                >
                  <a href={item.url} className="flex items-center">
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="flex-1">{item.title}</span>
                    {item.items && <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/sidebar-button:rotate-180" />}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 pl-0">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton 
                          asChild
                          className="ml-8 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <div className="mt-auto border-t border-border/50 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-accent/30 p-3 text-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="font-medium">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate font-medium">John Doe</p>
            <p className="truncate text-xs text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
