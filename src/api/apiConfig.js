const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0a9166ff166af8e5d002090cb24c40e3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;