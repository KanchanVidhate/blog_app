import "./home.css"
import blogs from "./../../data"
import  BlogCard from "./../../components/BlogCard/BlogCard"

 function Home(){
    console.log(blogs)

    return (
       <>
       <div className="blogs-container">
       {
        blogs.map((blogObject,i)=>{
          const {
            id,
            title,
            content,
            author,
            date,
            categories,
            url,
            share,
            like,
            follow,
          } = blogObject

          return (
            <BlogCard
            key={i}
            id={id}
         title={title}
         content={content}
         author={author}
         date={date}
         categories={categories}
         url={url}
         share={share}
         like={like}
         follow={follow}
         />)
        })
       }
       </div>
       </>
    )
 }

  export default Home