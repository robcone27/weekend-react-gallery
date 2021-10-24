import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({list, onLike}) {
    return (
        <div id="gallery">
            {list.map(item => {
                return (<GalleryItem
                    key={item.id}
                    object={item}
                    onlike={onLike}
                />);
            })}
        </div>
    );
};
 export default GalleryList;