import InfoCard from "./info-card.component";

export default function OrderStatistics(){
    return(
        <>
            <div className="rounded-xl bg-white border w-full mt-4 flex justify-between items-center px-5 py-4">
                <p className="font-bold">Order statictics</p>
                <select
                    id="order-date-seclector"
                    name="order-date-seclector"
                    autoComplete="order-date-seclector"
                    className="foucs:outline-none block max-w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option selected={true}>Today</option>
                    <option>Last Week</option>
                    <option>Last month</option>
                    <option>Last year</option>
                    <option>All</option>
                </select>
            </div>

            <div className="flex gap-3 mt-3">
                <InfoCard cardColor="bg-white" cardName="order cancelled" cardValue="0"/>
                <InfoCard cardColor="bg-white" cardName="Pending orders" cardValue="0"/>
                <InfoCard cardColor="bg-white" cardName="Confirmed orders" cardValue="0"/>
                <InfoCard cardColor="bg-white" cardName="Package picked up" cardValue="0"/>
                <InfoCard cardColor="bg-white" cardName="On the way" cardValue="0"/>
                <InfoCard cardColor="bg-white" cardName="delivered" cardValue="0"/>
            </div>
            <div className="flex mt-3 bg-white px-5 py-4 rounded-xl gap-4">
                <div className="flex-1">
                    <p>Top category</p>
                    <table className="w-full mt-4">
                        <thead className="bg-blue-gray-400 h-10">
                            <th>Title</th>
                            <th>Sold</th>
                            <th>Amount</th>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div className="flex-1">

                </div>
            </div>
        </>
    )
}