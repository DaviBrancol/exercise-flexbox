[![N|Solid](https://i.imgur.com/VYaKx4o.png)](https://nodesource.com/products/nsolid)

# Exercise - React Tailwind Flexbox

Welcome to the React Tailwind Flexbox Exercise. 
<br />

The main purpose of this exercise is to test your abilities with the Flexbox concept using the Tailwind Framework inside the React Project.
<br />

Follow the instructions to install, run and test your project. If you have any doubts, contact me via github or email.
<br />
<br />

## Objectivies

There are 9 containers in the screens, containing one or two flexible blocks and one or two gray positions.
<br />
Your objective here is to place the blue blocks above the gray blocks using only the available classes from the flexbox described below.
<br />
When the container has two blocks, you must place the lighter blue block above the lighter gray block and the darker blue block above the dark gray block.
<br />
For display: flex / flex-col / flex-row / flex-col-reverse / flex-row-reverse
For justify: justify-start / justify-center / justify-end
For items: items-start / items-center / items-end
<br />
For more information about this classes and its respective css properties, check [tailwind website](https://tailwindcss.com/)
<br />
<br />

## Installation

First of all, clone this repository into your desktop
<br />
```sh
git clone https://github.com/DaviBrancol/exercise-flexbox.git
```
<br />
After cloning the repository, move to the folder and install the dependencies
<br />
```sh
yarn # if you don't have yarn installed, you can add it with "npm install -g yarn"
```
<br />
Once installed, run the project with the following code
<br />
```sh
yarn start
```
<br />
Now, open the localhost in the port 3000 and start the test
<br />
```sh
http://localhost:3000
```
<br />
<br />

## How to start

Open the file MyTest.tsx inside the src/test directory and follow the instructions to code your test and start studying.

## How to test

You may open the page on the localhost:3000 to check if the blocks are correctly positioned. You may also run the following commands and check if all tests pass.

```sh
yarn test
```

## Blocks Order 

The blocks are mapped as described bellow

| Row / Col              | Col 1 | Col 2  | Col 3           |
| --------------------- | ------------- | ----------------- | ----------------- |
| Row 1                | GridItemOne       | GridItemTwo          | GridItemThree      |
| Row 2       | GridItemFour | GridItemFive          | GridItemSix |
| Row 3         | GridItemSeven | GridItemEight | GridItemNine |

<br />
<br />
<br />

## Copyright

MIT License, You may use it for testing your students / candidates for free.

Made by Davi Brancol ❤️
