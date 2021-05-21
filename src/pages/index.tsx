import { GridItemOne, GridItemTwo, GridItemThree, GridItemFour, GridItemFive, GridItemSix, GridItemSeven, GridItemEight, GridItemNine } from 'test/MyTest'

const HomePage: React.VFC = () => {
    return (
        <div className="w-full h-screen grid grid-flow-row grid-cols-3 gap-4 bg-gray-900">
            <GridItemOne />
            <GridItemTwo />
            <GridItemThree />
            <GridItemFour />
            <GridItemFive />
            <GridItemSix />
            <GridItemSeven />
            <GridItemEight />
            <GridItemNine />
        </div>
    )
}

export default HomePage