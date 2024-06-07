import { CategoryHeaderBanner } from "../../../component/category-header-banner.components";
import CusotmerLayout from "../../../layout/cusotmer.layout";
import "../../../assets/css/cusotmer.css"
import ProductCard from "../../../component/product-card.component";

export function WomensCasualWear() {
    return (
        <>
            <CusotmerLayout>
                {/* <p>casual wear</p> */}
                <CategoryHeaderBanner />
                <div className="grid grid-cols-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </CusotmerLayout>
        </>
    );
}