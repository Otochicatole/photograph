import {ReactNode} from "react";

export const Button = ({children, onClick, className}:{children?: ReactNode, onClick?: () => void, className?: string}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} border-2  min-w-[177px] text-[20px] font-medium min-h-[49px] rounded-[10px] text-[#999E87] border-[#999E87] hover:bg-[#999E87] hover:text-white cursor-pointer hover:border-transparent transition-all`}>
            {children}
        </button>
    )
}