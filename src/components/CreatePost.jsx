import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postDescriptionElement = useRef();
  const postReactElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const UserID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postDescription = postDescriptionElement.current.value;
    const postReact = postReactElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postDescriptionElement.current.value = "";
    postReactElement.current.value = "";
    postTagsElement.current.value = "";
    addPost(UserID, postDescription, postReact, postTags, postTitle);
  };
  return (
    <>
      <Form className="create-post" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userIDElement">
          <Form.Label>Post UserID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your UserID"
            required
            ref={userIDElement}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postTitleElement">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            required
            ref={postTitleElement}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postDescriptionElement">
          <Form.Label>Post Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter post descripation...."
            ref={postDescriptionElement}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postReactElement">
          <Form.Label>Post Reaction</Form.Label>
          <Form.Control
            type="number"
            placeholder="How many people reacted to this post..."
            required
            ref={postReactElement}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postTagsElement">
          <Form.Label>Enter your tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter tags using space here......"
            required
            ref={postTagsElement}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </>
  );
};

export default CreatePost;
