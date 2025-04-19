import AppSidebar from "@/components/app-sidebar/app-sidebar";
import AppHeader from "@/components/app-header/app-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { headers } from "next/headers";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers(); // 获取请求头信息
  const pathname = headersList.get("x-next-router-path") || "/"; // 获取当前路由
  const isHome = pathname === "/"; // 检查当前路径是否为根路径

  return (
    <html lang="en">
      <body>
        {isHome && <main>{children}</main>}
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
