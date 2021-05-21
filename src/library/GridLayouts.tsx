interface LayoutProps {
    className: string
}

export const GridLayoutOne: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-one" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute top-0 right-0 w-20 h-20 bg-gray-400" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
        </div>
    ) 
}

export const GridLayoutTwo: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-two" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute top-1/2 transform -translate-y-1/2 right-0 w-20 h-20 bg-gray-400" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
        </div>
    )
}

export const GridLayoutThree: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-three" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute bottom-0 left-0 w-20 h-20 bg-gray-400" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
        </div>
    )
}

export const GridLayoutFour: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-four" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute top-1/2 transform -translate-y-1/2 right-1/2 translate-x-1/2 w-20 h-20 bg-gray-400" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
        </div>
    )
}

export const GridLayoutFive: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-five" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute bottom-0 right-0 w-20 h-20 mr-20 bg-gray-400" />
            <div className="z-10 absolute bottom-0 right-0 w-20 h-20 bg-gray-600" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
            <div className="relative z-20 w-20 h-20 bg-primary-700" />
        </div>
    )
}

export const GridLayoutSix: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-six" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute bottom-0 right-0 w-20 h-20 mb-20 bg-gray-400" />
            <div className="z-10 absolute bottom-0 right-0 w-20 h-20 bg-gray-600" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
            <div className="relative z-20 w-20 h-20 bg-primary-700" />
        </div>
    )
}

export const GridLayoutSeven: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-seven" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute top-0 right-0 w-20 h-20 bg-gray-400" />
            <div className="z-10 absolute top-0 right-0 w-20 h-20 mt-20 bg-gray-600" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
            <div className="relative z-20 w-20 h-20 bg-primary-700" />
        </div>
    )
}

export const GridLayoutEight: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-eight" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute top-0 right-0 w-20 h-20 mt-20 bg-gray-400" />
            <div className="z-10 absolute top-0 right-0 w-20 h-20 bg-gray-600" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
            <div className="relative z-20 w-20 h-20 bg-primary-700" />
        </div>
    )
}

export const GridLayoutNine: React.VFC<LayoutProps> = ({ className }) => {
    return (
        <div data-testid="grid-nine" className={"relative w-full h-full bg-white " + className}>
            <div className="z-10 absolute bottom-0 right-0 w-20 h-20 bg-gray-400" />
            <div className="z-10 absolute bottom-0 right-0 w-20 h-20 mr-20 bg-gray-600" />
            <div className="relative z-20 w-20 h-20 bg-primary-500" />
            <div className="relative z-20 w-20 h-20 bg-primary-700" />
        </div>
    )
}