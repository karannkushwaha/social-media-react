import Button from "react-bootstrap/Button";
const Msg = ({ onGetPostsClick }) => {
  return (
    <>
      <center className="msg">
        <h1>No Post here.... Plzzz create a new post...</h1>
        {/* <Button variant="success" onClick={onGetPostsClick}>
          Fetch Post
        </Button> */}
      </center>
    </>
  );
};
export default Msg;
