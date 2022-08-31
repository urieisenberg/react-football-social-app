import { useState } from "react";
import Editable from "../../Form/Editable";
import { toast } from "react-toastify";


const Edit = ({ post, onEdit, showEdit, setShowEdit, setShowOptions }) => {
  
  const [content, setContent] = useState(post.content);

  const onChange = (e) => setContent(e.target.value);

  const handleEdit = () => {
    const updatedPost = {
      content: content,
    };
    onEdit({
      postId: post._id,
      updatedPost,
    });
    setShowEdit();
    setShowOptions();
    toast.success(`Post updated`, {
      toastId: "edit",
    });
  };

  return (
    
    <Editable
      text={post.content}
      action={handleEdit}
      editable={showEdit}
      setEditable={setShowEdit}
      type="input"
    >
      <input type="text" value={content} onChange={onChange} />
    </Editable>
  );
};

export default Edit;
