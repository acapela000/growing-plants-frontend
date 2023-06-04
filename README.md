## Installation

```bash
npm i
```

## Getting Started

To begin, execute the following command to start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description of `Gardener` 

### Concepts

+ A 3D web application designed to monitor energy consumption within households.

+ Visualize the current energy usage and provide users with better control over their energy consumption.

+ Incorporate gamification elements to encourage users to adopt smarter energy consumption habits, resulting in both energy and cost savings.

+ An eco-friendly application designed to alleviate tension and reduce stress every time consumers check and pay their bills.

### Explanation of the rule

The "Remaining water" status indicates:

+ `High`: No households are currently utilizing the energy.

+ `Medium`: Some households are consuming the energy, but if the user decides to utilize it, they will receive fewer rewards for their garden.

+ `Low`: A significant number of households are consuming the energy, and the user should refrain from using it during this time.

The amount of seeds a gardener can obtain when the consumer uses energy while the "Remaining water" status is:
- `High`: +10 seeds for their garden.
- `Medium`: +5 seeds for their garden.
- `Low`: -1 seeds for their garden.

### Explanation of symbols

`Gardener` <img src="/public/house.png" width="50"> = `Household`

`Water` = `Energy`
+ `High` <img src="/public/level/high-water.png" width="50">
+ `Medium` <img src="/public/level/medium-water.png" width="50">
+ `Low` <img src="/public/level/low-water.png" width="50">

`Tree` <img src="/public/tree.png" width="30"> = `Quantity of seeds` 

`Seed` <img src="/public/seed.png" width="30"> = `Individual point`

### Conversion of seeds/trees to yen

+ 1 point = 1 seed
+ 1000 seeds = 1 tree
+ 1 tree = 10 yen

## Exchanging trees/seeds to pay the water/electricity/gas bills

Every month, the gardeners gather seeds and grow as many trees as possible. They can then exchange these seeds or trees for real money, which will be deposited into the consumer's account and can be used to pay their energy bills.

