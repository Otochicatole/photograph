import { useEffect, useState } from "react";
import { Nav } from "../../components/layout/nav";
import { getGallery } from "../../libs/get-gallery";

interface GalleryItem {
    name: string;
    images: string | null;
}

export default function Gallery() {
    const [data, setData] = useState<GalleryItem[] | null>(null);

    useEffect(() => {
        const getData = async () => {
            const response = await getGallery();
            setData(response.products);
            console.log("datos obtenidos:", response);
        };
        getData();
    }, []);

    return (
        <>
            <Nav isFixed={true} />
            <div className="mt-[110px]">
                <h1>Gallery</h1>
                <div className="grid grid-cols-3 gap-4">
                    {data?.map((item, index) => (
                        <div key={index} className="border p-4">
                            <h2>{item.name}</h2>
                            {item.images && <img src={item.images} alt={item.name} className="w-full h-auto" />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
