export interface IDrinksContext {
    id: number
    title: string
    imgUrl: string
    description: string
    sizes: sizes[]
    roast: string[]
    sweets: sweets[]
    serving: string[]
}



interface sizes {
    size: string
    price: number
}

interface sweets {
    sweet: string
    price: number
}