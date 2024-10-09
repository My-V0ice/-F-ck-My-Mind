import './GalleryPage.scss';
import {galleryList} from "../api/galleryList.ts";
import {GalleryCart} from "@widgets/galleryCart";

export function GalleryPage() {
    return (
        <div className="container">
            <h1>
                Gallery Page
            </h1>

            <div className="gallery__content">
                {galleryList.map((cart) => {
                    return (
                        <GalleryCart title={cart.title} img={cart.img} id={cart.id}/>
                    );
                })}
            </div>
        </div>
    )
        ;
}