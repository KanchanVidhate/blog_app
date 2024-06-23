

const blogs=[
{
    id: "a",
    title: "Introduction to React",
    content: "ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It is also referred to as a front-end JavaScript library. It was developed by Facebook and is widely used for creating dynamic and interactive web applications. In this article, we'll explore the key concepts of React.React is a JavaScript library for building user interfaces (UIs) on the web. React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.Start by deciding what features your blog will have. For instance, you might want to include the ability to add and delete blog posts, display details about each post, and fetch data from a local JSON server,Keep in mind that this will be a purely React-based blog, meaning there won't be any back-end servers involved. Changes made on the page won't be saved between refreshes. Before diving into coding, make sure you have Node.js and NPM installed on your system. If not, you can download them from the official website. npm  helps manage dependencies and modules for your back-end.Set up a new React project using tools like Create React App or manually configure your project.Create components for your blog, such as a list of blog posts, a form for adding new posts, and a component to display post details.Use React Router to handle navigation between different views (e.g., list view and individual post view). Fetch blog data from a local JSON server or an API (if you decide to add a back-end later).Display the fetched data in your blog components.",
    author:{
        name: "Kanchan Vidhate",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    date:"June  01, 2023",
    categories:["React","Javascripts","Frontend"],
    url:"https://th.bing.com/th/id/R.294510907907cf92c791018a81c77a3d?rik=2VGLyZcrY9qrXg&pid=ImgRaw&r=0",
    share:"https://th.bing.com/th/id/R.29abfc59909042617715062c2e6cbdee?rik=Yua1qLc%2bGEVdJw&pid=ImgRaw&r=0",
    like:"https://th.bing.com/th/id/R.874fe8dda7ed11084eb771cb55a292bd?rik=p7eNBMfBa8bEiQ&pid=ImgRaw&r=0",
    follow:"https://media.baamboozle.com/uploads/images/1332/1654575332_85660_gif-url.gif"

},
{ 
    id: "b",
    title: "Introduction to HTML",
    content: "HTML stands for HyperText Markup Language. It is a language that is used to create web pages and web applications. HTML uses tags and elements to define the structure and content of a web page. HTML is one of the core technologies of the World Wide Web, along with CSS and JavaScriptHTML is easy to learn and use. It has a clear and simple syntax that is based on tags and attributes. HTML tags are predefined and have specific meanings and functions. HTML also allows users to embed other media types, such as images, audio, video, etc., into web pages.HTML elements are the building blocks of a webpage. They can be structural elements like headings (<h1> to <h6>), paragraphs (<p>), lists (<ul>, <ol>, <li>), or semantic elements like <header>, <footer>, <nav>, and <article>. Each element serves a specific purpose in organizing and presenting content. Attributes provide additional information about an element and are defined within the opening tag. For example, the href attribute in an anchor tag (<a>) specifies the URL of the link. Attributes can influence the behavior, appearance, or functionality of an element.HTML elements can be nested within each other to create a hierarchical structure. It is essential to maintain proper nesting to ensure the integrity of the document. For instance, a paragraph <p> element should be contained within a <div> or another block-level element.Semantic HTML refers to using elements that convey meaning beyond just presentation. Elements like <header>, <footer>, <nav>, and <article> provide context to the content, making it more accessible to both users and search engines.In conclusion, HTML forms the foundation of web development, allowing developers to create structured and meaningful content for the web. Understanding HTML is crucial for anyone looking to build websites or work with web technologies effectively.",
    author:{
        name: "Vaishu Badakh",
        avatar: "https://i.pravatar.cc/150?img=15"
    },
    date:"May 01, 2023",
    categories:["HTML","CSS","Web Development"],
    url:"https://th.bing.com/th/id/R.294510907907cf92c791018a81c77a3d?rik=2VGLyZcrY9qrXg&pid=ImgRaw&r=0",
    share:"https://th.bing.com/th/id/R.29abfc59909042617715062c2e6cbdee?rik=Yua1qLc%2bGEVdJw&pid=ImgRaw&r=0",
   like:"https://i.pinimg.com/originals/5f/af/7c/5faf7ccc5463be7263e43e468026effd.jpg",
       follow:"https://media.baamboozle.com/uploads/images/1332/1654575332_85660_gif-url.gif",

},
{
    id:"c",
    title: "Introduction to NodeJs",
    content: "NodeJS is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.You can use Application Insights for Node.js services that are hosted in your datacenter, Azure VMs and web apps, and even in other public clouds.Node.js is a powerful runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications. NPM (Node Package Manager): Node.js comes with npm, a package manager that hosts thousands of libraries and tools, making it easy to extend Node.js functionality and reuse code.Performance: Node.js offers high performance by leveraging the V8 engine and optimizing code execution.Scalability: Node.js is highly scalable due to its event-driven architecture. It can handle a large number of concurrent connections with minimal overhead, making it suitable for real-time applications like chat servers, gaming platforms, and streaming services.Cross-Platform: Node.js is cross-platform, meaning it can run on various operating systems like Windows, macOS, and Linux, providing flexibility for developers to work on different environments.Extensive Ecosystem: The Node.js ecosystem is vast, with a wide range of modules and frameworks available to simplify development tasks. Popular frameworks like Express.js, Nest.js, and Socket.io enhance the capabilities of Node.js for building web applications, APIs, and real-time communication systems. Its unique features and ecosystem make it a popular choice for modern web development projects.",
    author:{
        name: "Gabbar Sing",
        avatar: "https://i.pravatar.cc/150?img=4"
    },
    date:"May 24, 2024",
    categories:["NodeJs","Web Development"],
    url:"https://th.bing.com/th/id/R.294510907907cf92c791018a81c77a3d?rik=2VGLyZcrY9qrXg&pid=ImgRaw&r=0",
    share:"https://th.bing.com/th/id/R.29abfc59909042617715062c2e6cbdee?rik=Yua1qLc%2bGEVdJw&pid=ImgRaw&r=0",
   like:"https://th.bing.com/th/id/R.874fe8dda7ed11084eb771cb55a292bd?rik=p7eNBMfBa8bEiQ&pid=ImgRaw&r=0",
       follow:"https://media.baamboozle.com/uploads/images/1332/1654575332_85660_gif-url.gif",

},
{ 
    id:"d",
    title: "Introduction to MongoDB",
    content: "MongoDB is a popular NoSQL database that stores data in a flexible and schema-less format. It is used for storing a wide range of data types, including JSON, binary data, and documents with nested structures. MongoDB is designed to work well with large datasets and can handle millions of documents efficiently.MongoDB does not require a schema or a predefined data structure. This means that you can store any type of data, including complex and nested data structures, without having to define a specific schema for your data. MongoDB is a popular NoSQL database that offers flexibility and scalability for handling large volumes of data. Let's delve into the details to grasp the intricacies of MongoDB:MongoDB is a document-oriented database, which means it stores data in flexible, JSON-like documents. Each document can have a different structure, allowing for dynamic schemas and easy data manipulation.In conclusion, MongoDB's flexibility, scalability, and rich feature set make it a powerful choice for various applications.Embedding: Data can be nested within a document for better performance.Referencing: Relationships between data can be established using references.Schema Design: Requires a good understanding of data access patterns for optimal performance. Understanding its core concepts and best practices is essential for leveraging its full potential in database management and application development.",
    author:{
        name: "Manav Shekh" ,
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    date:"Jan 21, 2024",
    categories:["MongoDB","WebD","BackEnd"],
    url:"https://th.bing.com/th/id/R.294510907907cf92c791018a81c77a3d?rik=2VGLyZcrY9qrXg&pid=ImgRaw&r=0",
    share:"https://th.bing.com/th/id/R.29abfc59909042617715062c2e6cbdee?rik=Yua1qLc%2bGEVdJw&pid=ImgRaw&r=0",
    like:"https://i.pinimg.com/originals/5f/af/7c/5faf7ccc5463be7263e43e468026effd.jpg",
        follow:"https://media.baamboozle.com/uploads/images/1332/1654575332_85660_gif-url.gif",

}

]

export default blogs