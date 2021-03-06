// Modules
import React from 'react'
import { render } from '@testing-library/react'

// Components
import { GridItemOne, GridItemTwo, GridItemThree, GridItemFour, GridItemFive, GridItemSix, GridItemSeven, GridItemEight, GridItemNine } from 'test/MyTest'

describe('[Testing] Check if all squares are at the right position.', () => {
    it('[GridOne] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemOne />)
        const firstGridItem = getByTestId('grid-one')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex justify-end")
    })
    it('[GridTwo] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemTwo />)
        const firstGridItem = getByTestId('grid-two')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex justify-end items-center")
    })
    it('[GridThree] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemThree />)
        const firstGridItem = getByTestId('grid-three')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex items-end")
    })
    it('[GridFour] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemFour />)
        const firstGridItem = getByTestId('grid-four')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex justify-center items-center")
    })
    it('[GridFive] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemFive />)
        const firstGridItem = getByTestId('grid-five')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex justify-end items-end")
    })
    it('[GridSix] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemSix />)
        const firstGridItem = getByTestId('grid-six')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex flex-col justify-end items-end")
    })
    it('[GridSeven] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemSeven />)
        const firstGridItem = getByTestId('grid-seven')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex flex-col items-end")
    })
    it('[GridEight] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemEight />)
        const firstGridItem = getByTestId('grid-eight')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex flex-col-reverse justify-end items-end")
    })
    it('[GridNine] Should be positioned correctly.', async () => {
        const { getByTestId } = render(<GridItemNine />)
        const firstGridItem = getByTestId('grid-nine')
        expect(firstGridItem).toHaveClass("relative w-full h-full bg-white flex flex-row-reverse items-end")
    })

})
