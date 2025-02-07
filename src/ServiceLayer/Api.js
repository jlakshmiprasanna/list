import { getPosts } from "./Constants";

export const getPostsUrlData = async () => {
    const response = await fetch(getPosts)
    const data = await response.json()
    return data
}