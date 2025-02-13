import { memo } from "react";

const CardImage = memo(({ src, alt }: { src: string; alt: string }) => (
    <img className="max-w-[100px] max-h-[100px] object-cover rounded-lg" src={src} alt={alt} loading="lazy" width={100} height={100} />
));

export default CardImage;
