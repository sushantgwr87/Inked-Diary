import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://ink-data.herokuapp.com/blogs');

    return (
        <div className="home">
            { error && <div className="error">{ error }</div>}
            { isPending && <div className="loader"></div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
    );
}
 
export default Home;