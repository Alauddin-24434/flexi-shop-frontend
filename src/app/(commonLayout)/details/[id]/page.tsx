"use client";

import ProductDesplay from "@/components/ProductDesplay/ProductDesplay";
import ProductTabs from "@/components/ProductTabs/ProductTabs";
import ReviewSystem from "@/components/ReviewSystem/ReviewSystem";
import { useFindProductByIdQuery } from "@/redux/features/products/productsApi";

import { useParams } from "next/navigation";

export default function Details() {

    const params = useParams()

    const id = params?.id;

    const { data } = useFindProductByIdQuery(id)
  
    return (
        
        <div className="flex-grow container mx-auto px-4 py-8">






            <ProductDesplay  {...data?.data?.product} />

            <ProductTabs />
            <ReviewSystem />

        </div>
    )
}