import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../../../store/posts/postActions";
import { useToggle } from "../../../hooks/useToggle";
import Like from "./Like";
import Comments from "./Comments";
import Actions from "./Actions";
import Follow from "./Follow";
import Item from "./Style";

const Post = ({ post }) => {
  const [showOptions, setShowOptions] = useToggle();
  const [showComments, setShowComments] = useToggle();
  const [showEdit, setShowEdit] = useToggle();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEdit = (postId, comment) => {
    dispatch(editPost(postId, comment));
  };

  const onDelete = (postId) => dispatch(deletePost(postId));

  return (
    <Item commentsOpened={showComments}>
      <Item.Post>
        <Item.Content>
          <Item.Content.Img src={post.image} alt={post.username} />
          <Item.Name onClick={() => navigate(`/profile/${post.username}`)}>
            {post.username}
          </Item.Name>
          <Follow post={post} />
          <Item.Date.Created>
            {new Date(post.createdAt).toLocaleString()}
          </Item.Date.Created>
          <Actions
            post={post}
            setShowEdit={setShowEdit}
            onDelete={onDelete}
            show={showOptions}
            setShow={setShowOptions}
            showEdit={showEdit}
            onEdit={onEdit}
          />
          <Item.Text>{!showEdit && post.content}</Item.Text>
          <Like post={post} />
          {!showComments && post.createdAt !== post.updatedAt && (
            <Item.Date.Updated>
              post last updated: {new Date(post.updatedAt).toLocaleString()}
            </Item.Date.Updated>
          )}
          <Comments post={post} show={showComments} setShow={setShowComments} />{" "}
        </Item.Content>
      </Item.Post>
    </Item>
  );
};

export default Post;
