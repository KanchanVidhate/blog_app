
import  "./BlogCard.css";
function BlogCard({ title,content,author,date,categories}){
    return(
        <div className="blog-card">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-content-preview">
            { content.substring(0,70)  }...
        </p>
        <div className="author-card">

        <img src={author.avatar} alt="author" className="author-avatar"/>
            <span className="author-name">{author.name} </span>
            <span className="blog-date">{date}</span>
        </div>
        {categories.map((categories,i)=>{
        return <span key={i}  className="categories-badge">{categories}</span>
        })}

        </div>

    )
}
 
 export default BlogCard