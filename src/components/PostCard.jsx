import { useContext } from "react";
import { Card, Badge, Alert } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const PostCard = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="container">
        <Card style={{ width: "30rem" }} className="post-card">
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <AiFillDelete />
            </span>
            <Card.Text>{post.body}</Card.Text>
            {post.tags.map((item) => (
              <Badge bg="primary" key={item.id} className="hastag">
                {item}
              </Badge>
            ))}
            <Alert variant="success" className="reaction">
              <p className="mb-0">
                This post has been reacted by {post.reactions} people.
              </p>
            </Alert>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default PostCard;
