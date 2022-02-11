const apiKey = "FqSzssTEHwRyUpbRjUCeq0PT7DKLFYFY"
export const getGifs = ({ keyword = "gatitos" } = {}) => {
  // Parte externa a react | fetch
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  ).then((response) =>
    response.json().then((response) => {
      const { data } = response
      const gifs = data.map((image) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
  )
}
