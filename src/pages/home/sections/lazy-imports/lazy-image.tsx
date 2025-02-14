import { memo } from "react";

type Props = {
    src: string;
    alt: string;
};

const LazyImage = memo(({ src, alt }: Props) => (
    <img
        className="w-[20%] h-auto object-cover hover:scale-[101%] transition-transform duration-300"
        src={src}
        alt={alt}
        loading="lazy"
    />
));

export default LazyImage;
