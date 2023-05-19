import { Link } from "react-router-dom";
import queryString from 'query-string';

const Blog = ({location , match}) => {
    const parsed = queryString.parse(location.search);
    const id = match.params.id; // http Req => axios.get('/blogs/id')
    console.log(parsed);
    return ( 
        <div className="w-full flex flex-col justify-center items-center">
           <h2 className="my-8"> جزییات هر مطلب - شماره مطلب : {id}</h2>
           <Link to={`/blogs/${parseInt(id) + 1}`} className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-700">مشاهده  مطلب بعدی</Link>
        </div>
     );
}
 
export default Blog;