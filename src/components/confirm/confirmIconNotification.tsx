import React from "react";

function Confirm({iconURL, onClick, classNameAddon ,listItem}: { iconURL: string, onClick?: () => void, classNameAddon?: string ,listItem?: boolean}) {
    let redDot = null;
    if (!listItem) {
        redDot= <div
        className=" absolute
                    bottom-auto
                    left-auto
                    -right-2
                    top-1
                    z-10
                    inline-block
                    -translate-y-1/2
                    translate-x-2/4
                    rotate-0
                    skew-x-0
                    skew-y-0
                    scale-x-100
                    scale-y-100
                    rounded-full
                    bg-red-600
                    p-1.5
                    text-xs"></div>
    }
    return (
        <div className="relative flex items-center justify-center" onClick={onClick}>
            <div className="relative">
                <img className="w-16 h-16" src={iconURL} alt="icon"/>
                {redDot && (
                    <div className="absolute top-0 right-0">
                        {redDot}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Confirm;