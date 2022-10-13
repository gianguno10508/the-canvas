import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function EmbeddedPostExample() {
  return (
    <MessengerCustomerChat pageId="107400511790455" appId="1505620756529166" htmlRef="<REF_STRING>" />
    // <FacebookProvider appId="1505620756529166">
    //     <button disabled={isLoading} onClick={handleClick}>
    //         Login
    //     </button>
    // </FacebookProvider>
  );
}
