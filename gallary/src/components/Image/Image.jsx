import './Image.css';
import {Link} from 'react-router-dom';
function Image({title,image,id}){
    return (
        <div className="comp-detail">
            <Link to={`/photos/${id}`}>
                <div>{title}</div>
                <div><img className="detail-img" src={image} /></div>
                <div>{id}</div>
            </Link>
            
            

        </div>
        
    )
}
export default Image;