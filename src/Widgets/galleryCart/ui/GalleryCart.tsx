import {NavLink} from "react-router-dom";
import './galleryCart.scss';

export function GalleryCart({img, title, id}) {
    return (
        <NavLink to={`/gallery/cart/${id}`} className="galleryCart">
            <div className="">
                <img src={img} alt={title} className="galleryCart__img"/>
            </div>
        </NavLink>
    );
}
