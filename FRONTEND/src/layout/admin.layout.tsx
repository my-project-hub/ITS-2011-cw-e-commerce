import MultiLevelSidebar from "../component/multilevel-sidebar.component";

interface Props{
    children?:any
}

export default function AdminLayout(prop:Props){
    return(
        <>
        <MultiLevelSidebar />
        <main>
            {prop.children}
        </main>
        </>
    );
}