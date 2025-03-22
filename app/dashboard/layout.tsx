import NavBoard from "@/components/dashboard/NavBoard";
import DemoNav from "@/components/demonav/DemoNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <div className="bg-[#f4f3ed] h-screen pb-45 pt-10">
        <DemoNav />
        <NavBoard />
        {children}
    </div>
}