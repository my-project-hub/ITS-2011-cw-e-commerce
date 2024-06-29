import BarChart from "../../component/bar-chart.component.tsx";
import InfoCard from "../../component/info-card.component.tsx";
import OrderStatistics from "../../component/order-static.component.tsx";
import useAuth from "../../hooks/auth.hook.ts";
import AdminLayout from "../../layout/admin.layout.tsx";

export default function AdminDashboard(){


    const {api,token} = useAuth();
    // console.log("tt",token)
    

    return(
        <>
            <AdminLayout>
                <div className="flex justify-between gap-5">
                    <InfoCard withbackGroudStyle={true} cardName="Total products" cardValue={"5"} cardColor="bg-[#009EFB]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total orders" cardValue={"5"} cardColor="bg-[#963BF1]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total sells" cardValue={"5"} cardColor="bg-[#04B440]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total customers" cardValue={"5"} cardColor="bg-[#FAAB34]"/>
                </div>
                <div>
                    <BarChart />
                    <OrderStatistics />
                </div>
            </AdminLayout>
        </>
    );
}