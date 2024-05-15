import MultiLevelSidebar from "../component/multilevel-sidebar.component";
import TopMenuBar from "../component/top-menubar.component";

interface Props {
    children?: any
}

export default function AdminLayout(prop: Props) {
    return (
        <>
            <div className="flex">
                <div>
                    <MultiLevelSidebar />
                </div>
                <div className=" bg-white w-screen border-b-2 flex-row">
                    <TopMenuBar />
                    <div className="p-5">
                        {prop.children}
                    </div>
                    
                </div>

            </div>

            {/* <main>
                {prop.children}
            </main> */}
        </>
    );
}