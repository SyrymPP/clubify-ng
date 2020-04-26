export interface IClub {
    name: string,
    category: {
        id: number,
        name: string
    }
    desc: string,
    img: string,
    text: string,
    id?: number,
    author?: {
        username: string,
        id: number,
        password: string
    },
    author2?: string,
    category2?: string
}