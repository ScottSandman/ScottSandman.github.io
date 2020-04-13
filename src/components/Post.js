import React from "react"
import { Link } from "gatsby"
import "./post.css"

const Post = ({ title, date, description, path }) => (
  <div className="post">
    <Link to={path} className="post-title">
      {title}
    </Link>
    <p className="post-description">{description}</p>
    <p className="post-written-by">{date}</p>
  </div>
)

export default Post
