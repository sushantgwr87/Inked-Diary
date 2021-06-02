import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://ink-data.herokuapp.com/blogs/'+ id);
    const history = useHistory();

    const handleClick= () => {
        fetch('https://ink-data.herokuapp.com/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div>
            { isPending && <div className="loader"></div> }
            <div className="blog-details">
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <br />
                    <hr />
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
            </div>
        </div>
    );
}
 
export default BlogDetails;