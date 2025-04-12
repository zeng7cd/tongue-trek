"use client";
import AppHome from "@/components/app-home/app-home";
import AppSidebar from "@/components/app-sidebar/app-sidebar";
import AppHeader from "@/components/app-header/app-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation"; // 导入 usePathname 钩子

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 使用 usePathname 钩子
  const isHome = pathname === "/"; // 检查当前路径是否为根路径

  return (
    <html lang="en">
      <body>
        {isHome && (
          <main>
            <AppHome />
          </main>
        )}
        {!isHome && (
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              <main className="p-5"> {children}</main>
            </SidebarInset>
          </SidebarProvider>
        )}
      </body>
    </html>
  );
}
