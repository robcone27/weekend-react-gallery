import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({list, onlike}) {
    return (
        <div id="gallery">
            {list.map(item => {
                return (<GalleryItem
                    key={item.id}
                    object={item}
                    onlike={onlike}
                />);
            })}
        </div>
    );
};
 export default GalleryList;