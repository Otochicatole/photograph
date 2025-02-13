import { memo } from "react";

type Props = {
    src: string;
    className?: string;
};

const LazyImage = memo(({ src, className }: Props) => (
    <img className={className} src={src} alt="" loading="lazy" />
));

export default LazyImage;
