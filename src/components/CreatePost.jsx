import Button from "react-bootstrap/Button";
import { Form as BootstrapForm } from "react-bootstrap";
import { Form as RouterForm, redirect } from "react-router-dom";
const CreatePost = () => {
  return (
    <>
      <RouterForm className="create-post" method="POST">
        <BootstrapForm.Group className="mb-3" controlId="userIDElement">
          <BootstrapForm.Label>Post UserID</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            placeholder="Your UserID"
            required
            name="userId"
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId="postTitleElement">
          <BootstrapForm.Label>Post Title</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            placeholder="Enter post title"
            required
            name="title"
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group
          className="mb-3"
          controlId="postDescriptionElement"
        >
          <BootstrapForm.Label>Post Description</BootstrapForm.Label>
          <BootstrapForm.Control
            as="textarea"
            rows={5}
            placeholder="Enter post descripation...."
            name="body"
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId="postReactElement">
          <BootstrapForm.Label>Post Reaction</BootstrapForm.Label>
          <BootstrapForm.Control
            type="number"
            placeholder="How many people reacted to this post..."
            required
            name="reactions"
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group className="mb-3" controlId="postTagsElement">
          <BootstrapForm.Label>Enter your tags</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            placeholder="Please enter tags using space here......"
            required
            name="tags"
          />
        </BootstrapForm.Group>

        <Button variant="primary" type="submit">
          Post
        </Button>
      </RouterForm>
    </>
  );
};

export default CreatePost;

export const submitAction = async (data) => {
  const fromData = await data.request.formData();
  const postData = Object.fromEntries(fromData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
  return redirect("/");
};
