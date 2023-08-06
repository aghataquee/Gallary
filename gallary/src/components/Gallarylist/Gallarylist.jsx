import './Gallarylist.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import Image from '../Image/Image';
function Gallarylist(){
    const [allinfo,setInfo]=useState([]);
    const [isloading,setloading]=useState(true);
    async function downloadimages(){
        const response=await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
        //console.log(response.data);
        const details=response.data.photos;
        const detailsgall=details.map((photo)=>{
            return{
                title:photo.title,
                image:photo.url,
                descrption:photo.description,
                id:photo.id
            }
        });
        setInfo(detailsgall);
        setloading(false);
    }
       

    useEffect(()=>{
        downloadimages();
    },[]);
    return (
        <div className="Gallary-wrapper">
            <div><h1>Gallarylist</h1></div>
            <div className="gallary-details">{(isloading)?'loading...':
             allinfo.map((p)=><Image title={p.title} image={p.image} key={p.id} id={p.id}/>)}
            </div>

        </div>
    )



}
export default Gallarylist;
