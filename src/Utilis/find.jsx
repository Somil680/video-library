const findInArray = ( id , videos) => {
    return videos.find((item) => item._id === id)
}
export {findInArray}
