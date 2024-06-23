import "./BlogView.css"
import { useParams } from "react-router-dom" 
import blogs from "./../../data"


 function BlogView() {
    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=>blogObject.id===id)

    


    return (
        <div className="Blog-Contain">
            <h1 className="title-style ">{selectedBlog.title}</h1>
            <p>
                <img src={selectedBlog.author.avatar} alt="author" height="50px" className="BlogView-img "/>
            </p>
           
            <p className=" author-style date-style">{selectedBlog.author.name} | {selectedBlog.date}
            </p>
            <p className="line-style">________________________________________</p>

            <p className="pare-style">
                 {selectedBlog.content}  </p><br></br>

          <p className="line-style">_____________________________________________________________</p>
          <p className="space">
              <img src={selectedBlog.url} alt="author" height="50px" className="comment-img "/> &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={selectedBlog.share} alt="author" height="50px" className="comment-img "/>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={selectedBlog.like} alt="author" height="50px" className="comment-img "/>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={selectedBlog.follow} alt="author" height="50px" className="comment-img "/>



          </p>

        </div>
    )
 }

  export default BlogView