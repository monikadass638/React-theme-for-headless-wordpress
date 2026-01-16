
import { WP_API_URL } from '../config';

function BlogCard({ post }) {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];

    const image =
        media?.media_details?.sizes?.medium?.source_url ||
        media?.media_details?.sizes?.large?.source_url;


    return (
        <div className='bg-white shadow rounded-3 p-4'>

            <div className='mb-3 post-img'> {image && < a href={post.link}><img src={image} alt={media?.alt_text || "Blog image"} /></a>}</div>
            <h3 className="post-title">
                <a href={`/blog/${post.slug}`}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
            </h3>

            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
            <a href='/' className='mt-2 post-rm'>Read More</a>
        </div>
    )
}

export default BlogCard