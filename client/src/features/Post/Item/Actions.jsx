import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Edit from "./Edit";
import Item from "./Style";
import { BsPen, BsThreeDotsVertical, BsTrash, BsX } from "react-icons/bs";

const Actions = ({
  post,
  setShowEdit,
  show,
  setShow,
  onDelete,
  showEdit,
  onEdit,
}) => {
  const { user } = useSelector((state) => state.auth);

  const handleDelete = () => {
    onDelete(post._id);
    toast.success(`Post deleted`, {
      toastId: "delete",
    });
  };

  return (
    <>
      {post.user === user._id && (
        <Item.Actions>
          {!show ? (
            <Item.Actions.Icon>
              <BsThreeDotsVertical onClick={setShow} />
            </Item.Actions.Icon>
          ) : (
            <>
              <Item.Actions.Icon>
                <BsX onClick={setShow} size={16} />{" "}
              </Item.Actions.Icon>

              <br />
              <Item.Actions.Icon>
                <BsPen onClick={setShowEdit} size={16} />{" "}
              </Item.Actions.Icon>
              <br />
              <Item.Actions.Icon>
                <BsTrash onClick={handleDelete} size={16} />{" "}
              </Item.Actions.Icon>
              <br />
            </>
          )}
        </Item.Actions>
      )}
      {showEdit && (
        <Item.Text>
          <Edit
            post={post}
            onEdit={onEdit}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            setShowOptions={setShow}
          />
        </Item.Text>
      )}
    </>
  );
};

export default Actions;
