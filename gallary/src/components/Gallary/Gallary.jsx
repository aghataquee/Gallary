import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './Gallary.css';
function Gallary(){
    const [alldetail,setdetail]=useState({})
    const {id}=useParams();

    async function downloadDetails(){
        //const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        const details=response.data.photo;
        console.log(response.data);
       
        
        setdetail({
            title:details.title,
            image:details.url,
            description:details.description
        })
    }

    useEffect(()=>{
        downloadDetails();
    },[])
    return (
        <div className="comp-wrapper">
            
            <div className="title">{alldetail.title}</div>
            <div className="img-details">{alldetail.image}</div>
            <div className="desc">{alldetail.description}</div>
            
        </div>
    )
}
export default Gallary;