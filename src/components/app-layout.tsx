import type { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

interface AppLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
}

export function AppLayout({ children, title, description, breadcrumb = [] }: AppLayoutProps) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 hover:bg-accent/50 rounded-md p-1.5 transition-colors" />
            <Separator orientation="vertical" className="h-6 bg-border/60" />
            {breadcrumb.length > 0 && (
              <nav className="flex items-center gap-2 text-sm">
                {breadcrumb.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-muted-foreground/40">/</span>}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-foreground">{item.label}</span>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
