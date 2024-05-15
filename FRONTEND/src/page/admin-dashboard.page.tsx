import BarChart from "../component/bar-chart.component";
import InfoCard from "../component/info-card.component";
import OrderStatistics from "../component/order-static.component";
import AdminLayout from "../layout/admin.layout";

export default function AdminDashboard(){
    return(
        <>
            <AdminLayout>
                <div className="flex justify-between gap-5">
                    <InfoCard cardName="Total products" cardValue={"5"} cardColor="bg-[#fef7da]"/>
                    <InfoCard cardName="Total orders" cardValue={"5"} cardColor="bg-[#e9fdfb]"/>
                    <InfoCard cardName="Total sells" cardValue={"5"} cardColor="bg-[#feeced]"/>
                </div>
                <div>
                    <BarChart />
                    <OrderStatistics />
                </div>
            </AdminLayout>
        </>
    );
}