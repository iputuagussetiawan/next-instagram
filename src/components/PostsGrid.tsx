'use client'
import Masonry from 'react-masonry-css'
const images=[
    'https://picsum.photos/id/33/1024/768',
    'https://picsum.photos/id/34/768/1024',
    'https://picsum.photos/id/35/1024/768',
    'https://picsum.photos/id/36/768/1024',
    'https://picsum.photos/id/37/1024/768',
    'https://picsum.photos/id/38/768/1024',
    'https://picsum.photos/id/391024/768',
    'https://picsum.photos/id/40/768/1024',
    'https://picsum.photos/id/41/1024/768',
    'https://picsum.photos/id/42/768/1024',
    'https://picsum.photos/id/43/1024/768',
    'https://picsum.photos/id/44/768/1024',
    'https://picsum.photos/id/45/1024/768',
    'https://picsum.photos/id/46/768/1024',
    'https://picsum.photos/id/47/1024/768',
    'https://picsum.photos/id/48/768/1024',
    'https://picsum.photos/id/49/1024/768',
    'https://picsum.photos/id/50/768/1024',
    'https://picsum.photos/id/51/1024/768',
    'https://picsum.photos/id/52/768/1024',
    'https://picsum.photos/id/53/1024/768',
    'https://picsum.photos/id/54/768/1024',
    'https://picsum.photos/id/55/1024/768',
    'https://picsum.photos/id/56/768/1024',
]
export default function PostsGrid() {
    return (
        <div className="max-w-4xl mx-auto">
            <Masonry
                breakpointCols={{
                    default: 4,
                    860: 3,
                    500: 2
                }}
                className="flex"
                columnClassName="pl-4">
                    {images.map(image=>
                    (   
                        <div className='mb-4 border-4' key={image}>
                            <img src={image} alt="" />
                        </div>
                    ))}
            </Masonry>
        </div>
    );
}