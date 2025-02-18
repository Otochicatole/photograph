import { query } from "./strapi";

const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;

interface Image {
    id: number;
    url: string;
}

interface GalleryItem {
    id: number;
    name: string;
    Images: Image[];
}

interface ApiResponse {
    data: GalleryItem[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export function getGallery() {
    return query("galleries?populate=Images")
        .then((res: ApiResponse) => {
            const { data, meta } = res;

            const products = data.map((item: GalleryItem) => {
                const { name, Images: rawImages } = item;
                const images = rawImages.length > 0 ? `${STRAPI_HOST}${rawImages[0].url}` : null;
                return { name, images };
            });

            return { products, pagination: meta.pagination };
        });
}