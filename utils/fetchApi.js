import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b245c924bcmsh70ccc1349409162p1ff4dbjsn1ba2a14421a0'
        }
    });
    return data;
}