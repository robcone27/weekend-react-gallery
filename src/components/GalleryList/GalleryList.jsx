import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({list}) {
    return (
        <div id="gallery">
            {list.map(item => {
                return (<GalleryItem
                    key={item.id}
                    object={item}

                />);
            })}
        </div>
    );
};
 export default GalleryList;