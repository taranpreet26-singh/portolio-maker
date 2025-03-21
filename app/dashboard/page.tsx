
import DashboardField from "@/components/dashboard/Dashboard";
import NavBoard from "@/components/dashboard/NavBoard";
import DemoNav from "@/components/demonav/DemoNav";

export default async function Dashboard(){
    return <div className="bg-[#f4f3ed] h-fit pb-45 pt-10">
        <DemoNav/>
        <NavBoard/>
        <DashboardField/>
    </div>
}