import React from 'react'
import { GridLayoutOne, GridLayoutTwo, GridLayoutThree, GridLayoutFour, GridLayoutFive, GridLayoutSix, GridLayoutSeven, GridLayoutEight, GridLayoutNine } from 'library/GridLayouts'

// List of classes that can be used during this test.
// Fpr display: flex / flex-col / flex-row-reverse / flex-col-reverse
// For Justify Content: justify-start / justify-center / justify-end
// For Align Items: items-start / items-center / items-end

// For more information about this classes:
// https://tailwindcss.com/

export const GridItemOne: React.VFC = () => {
    return <GridLayoutOne className="flex justify-end" />
}

export const GridItemTwo: React.VFC = () => {
    return <GridLayoutTwo className="flex justify-end items-center" />
}

export const GridItemThree: React.VFC = () => {
    return <GridLayoutThree className="flex justify-start items-end" />
}

export const GridItemFour: React.VFC = () => {
    return <GridLayoutFour className="flex justify-center items-center" />
}

export const GridItemFive: React.VFC = () => {
    return <GridLayoutFive className="flex justify-end items-end" />
}

export const GridItemSix: React.VFC = () => {
    return <GridLayoutSix className="flex flex-col justify-end items-end" />
}

export const GridItemSeven: React.VFC = () => {
    return <GridLayoutSeven className="flex flex-col items-end justify-start" />
}

export const GridItemEight: React.VFC = () => {
    return <GridLayoutEight className="flex flex-col-reverse items-end justify-end" />
}

export const GridItemNine: React.VFC = () => {
    return <GridLayoutNine className="flex flex-row-reverse items-end" />
}