import axios from 'axios';
export const baseUrl='https://bayut.p.rapidapi.com'
export const fetchApi= async (url)=>{
    const { data }=await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '638062f2bamsh6442986bfa8292ap1e499cjsn53ab5d981ca9'
          }
    })
    return data;
}
