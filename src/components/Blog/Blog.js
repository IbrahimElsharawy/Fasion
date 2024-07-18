import React from 'react'
import bgBlog from '../../assets/blog.jpg'

const Blog = () => {
  const bgStyle = {
    backgroundImage: `url(${bgBlog})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div className="w-full h-[250px] relative text-white" style={bgStyle}>
        <div
          className="w-full h-full relative z-10"
          style={{ backgroundColor: "rgba(0,0,0,.6)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h2 className="text-2xl md:text-4xl font-bold uppercase">blog</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blog