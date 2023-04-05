function CategoryFilter( video , Category) {
    switch (Category) {
        case "Coding":
            return [...video.filter((item) => item.tag === "Coding")]
        case "Talks":
            return [...video.filter((item) => item.tag === "Talks")]
        case "Finanace":
            return [...video.filter((item) => item.tag === "Finanace")]
        case "StockMarket":
            return [...video.filter((item) => item.tag === "StockMarket")]
        case "Cyrpto":
            return [...video.filter((item) => item.tag === "Cyrpto")]
        case "Bollywood":
            return [...video.filter((item) => item.tag === "Bollywood")]
        case "Spirituality":
            return [...video.filter((item) => item.tag === "Spirituality")]
        case "Mystery":
            return [...video.filter((item) => item.tag === "Mystery")]
        default:
            return video
    }
}
export {CategoryFilter}