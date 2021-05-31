import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={ `/blogs/${blog.id}` }>
                        <h2>{ blog.title }</h2>
                        <p>Written by <i>{ blog.author }</i></p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}><i className="fa fa-trash"></i></button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;