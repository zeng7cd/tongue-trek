import AppSidebar from "@/components/app-sidebar/app-sidebar";
import AppHeader from "@/components/app-header/app-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <AppHeader />
            <main className="p-5"> {children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
