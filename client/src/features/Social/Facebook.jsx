import { useFacebook } from "../../hooks/useFacebook";
import Media from "./Style";
import Transition from "../../components/Transition/Transition";
import Loader from "../../components/Loader/Loader";

const Facebook = () => {
  const { facebookPage, isLoading } = useFacebook();

  let content;
  if (isLoading) content = <Loader />;
  else if (facebookPage)
    content = (
      <Transition key="facebook">
        <Media.Facebook
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookPage}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId`}
         
        ></Media.Facebook>
      </Transition>
    );
  return <section>{content}</section>;
};

export default Facebook;
