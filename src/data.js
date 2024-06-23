

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

},
{ 
    id: "b",
    title: "Introduction to HTML",
    content: "HTML stands for HyperText Markup Language. It is a language that is used to create web pages and web applications. HTML uses tags and elements to define the structure and content of a web page. HTML is one of the core technologies of the World Wide Web, along with CSS and JavaScriptHTML is easy to learn and use. It has a clear and simple syntax that is based on tags and attributes. HTML tags are predefined and have specific meanings and functions. HTML also allows users to embed other media types, such as images, audio, video, etc., into web pages",
    author:{
        name: "Vaishu Badakh",
        avatar: "https://i.pravatar.cc/150?img=15"
    },
    date:"May 01, 2023",
    categories:["HTML","CSS","Web Development"],
},
{
    id:"c",
    title: "Introduction to NodeJs",
    content: "NodeJS is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.You can use Application Insights for Node.js services that are hosted in your datacenter, Azure VMs and web apps, and even in other public clouds.",
    author:{
        name: "Gabbar Sing",
        avatar: "https://i.pravatar.cc/150?img=4"
    },
    date:"May 24, 2024",
    categories:["NodeJs","Web Development"],
},
{ 
    id:"d",
    title: "Introduction to MongoDB",
    content: "MongoDB is a popular NoSQL database that stores data in a flexible and schema-less format. It is used for storing a wide range of data types, including JSON, binary data, and documents with nested structures. MongoDB is designed to work well with large datasets and can handle millions of documents efficiently.MongoDB does not require a schema or a predefined data structure. This means that you can store any type of data, including complex and nested data structures, without having to define a specific schema for your data.",
    author:{
        name: "Manav Shekh" ,
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    date:"Jan 21, 2024",
    categories:["MongoDB","WebD","BackEnd"],
}

]

export default blogs