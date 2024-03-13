import axios from "axios"

export function searchImages(imageName) {
    const BASE_URL = "https://pixabay.com/api/"
    const params = {
        key: '11070675-9db3ad99120a3eae94c3d42ec',
        q: imageName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }
return axios.get(BASE_URL,{params})
}