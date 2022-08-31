import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  deleteComment,
} from "../../../store/comments/commentActions";
import { AnimatePresence } from "framer-motion";
import Item from "./Style";
import Button from "../../../components/Button/Button";
import { BsChatLeftTextFill, BsChatLeftText, BsX } from "react-icons/bs";
import { toast } from "react-toastify";

const Comments = ({ post, show, setShow }) => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState("");

  const onComment = () => {
    if (newComment.length > 49) {
      toast.error("Comment must be less than 50 characters", {
        toastId: "commentFail",
      });
    } else {
      dispatch(addComment({ postId: post._id, commentText: newComment }));
      setNewComment("");
      toast.success("Comment added", {
        toastId: "commentSuccess",
      });
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onComment();
    }
    if (e.key === "Escape") {
      setNewComment("");
    }
  };

  const userComments = post.comments.filter(
    (comment) => comment.post === post._id && comment.user === user._id
  );

  const onDelete = () => {
    userComments.map(
      (comment) =>
        comment.post === post._id &&
        dispatch(deleteComment({ postId: post._id, commentId: comment._id }))
    );
    toast.success("Comment deleted", {
      toastId: "deleteComment",
    });
  };

  return (
    <>
      {show ? (
        <>
          <Item.Comment.Toggle>
            <Item.Comment.Number> {post.comments?.length}</Item.Comment.Number>

            <Item.Comment.Icon>
              <BsChatLeftTextFill size={16} onClick={setShow} />
            </Item.Comment.Icon>
          </Item.Comment.Toggle>
          <AnimatePresence>
            <Item.Comment>
              {post.comments?.map((comment) => (
                <div key={comment._id}>
                  {user._id === comment.user && (
                    <Item.Comment.Delete onClick={onDelete}>
                      <BsX size={16} />
                    </Item.Comment.Delete>
                  )}
                  <Item.Comment.Name
                    onClick={() => navigate(`/profile/${post.user}`)}
                  >
                    {comment.username}
                  </Item.Comment.Name>
                  : {comment.content}
                </div>
              ))}
              <Item.Comment.Share
                place={post.comments.length > 0 ? true : false}
              >
                <input
                  onKeyDown={onKeyDown}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Comment something..."
                />
                <Button
                  variant={newComment.length > 2 ? "" : "disabled"}
                  mini="true"
                  noborder="true"
                  action={onComment}
                  text="send"
                />
              </Item.Comment.Share>
            </Item.Comment>
          </AnimatePresence>
        </>
      ) : (
        <Item.Comment.Toggle>
          <Item.Comment.Number> {post.comments?.length}</Item.Comment.Number>
          <Item.Comment.Icon>
            <BsChatLeftText size={16} onClick={setShow} />
          </Item.Comment.Icon>
        </Item.Comment.Toggle>
      )}
    </>
  );
};

export default Comments;
