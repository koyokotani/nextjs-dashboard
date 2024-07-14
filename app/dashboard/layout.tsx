import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:orverflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
        <div className="flex-grow p-6 md:orverflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
