import InfoCard from "./info-card.component";

export default function OrderStatistics() {
    return (
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
                <InfoCard cardColor="bg-white" cardName="order cancelled" cardValue="0" />
                <InfoCard cardColor="bg-white" cardName="Pending orders" cardValue="0" />
                <InfoCard cardColor="bg-white" cardName="Confirmed orders" cardValue="0" />
                <InfoCard cardColor="bg-white" cardName="Package picked up" cardValue="0" />
                <InfoCard cardColor="bg-white" cardName="On the way" cardValue="0" />
                <InfoCard cardColor="bg-white" cardName="delivered" cardValue="0" />
            </div>
            {/* <div className="flex mt-3 bg-white px-5 py-4 rounded-xl gap-4">
                <div className="flex-1">
                    <p>Top category</p>
                    <table className="w-full mt-4">
                        <thead className="bg-blue-gray-400 h-10  rounded-t-xl w-full">
                            <th>Title</th>
                            <th>Sold</th>
                            <th>Amount</th>
                        </thead>
                        <tbody className="border">
                            <td className="border">
                                <span></span>
                                <p>Home & Living</p>
                            </td>
                            <td className="border">
                                <p>108</p>
                            </td>
                            <td className="border">
                                <p>$100</p>
                            </td>
                        </tbody>
                    </table>
                </div>
                <div className="flex-1">

                </div>
            </div> */}
            <div className="mt-3 bg-white p-6 rounded-xl">
                <p className="font-bold mb-5">Top products</p>
                <div className="w-full flex gap-x-3">
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-[#e8f0fe] justify-between text-[#666]">
                                <th className="text-left px-3 rounded-tl-xl py-2">Title</th>
                                <th className="text-left px-3 py-2">Sold</th>
                                <th className="text-left px-3 rounded-tr-xl py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                        </tbody>
                    </table>
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-[#e8f0fe] justify-between text-[#666]">
                                <th className="text-left px-3 rounded-tl-xl py-2">Title</th>
                                <th className="text-left px-3 py-2">Sold</th>
                                <th className="text-left px-3 rounded-tr-xl py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


interface tableBodyProp{
    imgUrl:string;
    column1Value:string;
    column2Value:string;
    column3Value:string;
}

function TopProductTableBody(prop:tableBodyProp) {
    return (
        <tr className="border-b hover:bg-[#f3f6ff]">
            <td className="px-3 flex items-center">
                <span>
                    <img width={"60px"} src={`${prop.imgUrl}`} alt="" />
                </span>
                <a href="">{prop.column1Value}</a>
            </td>
            <td className="px-3">
                <p>{prop.column2Value}</p>
            </td>
            <td className="px-3">
                <p>{prop.column3Value}</p>
            </td>
        </tr>
    );
}