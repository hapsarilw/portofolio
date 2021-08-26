import styled from "styled-components";
import tw from "twin.macro";

const FooterStyles = styled.main.attrs({})`
  & {
    #container{
        ${tw`bg-verydarkviolet text-center p-10 text-brokenwhite`}
    }
    #container-1 {
      ${tw`px-20 py-10 font-black text-5xl`}
    }   
    #sub-footer {
        ${tw`p-4`}
    }
    #sub-footer h1{
        ${tw`text-brokenwhite pb-3`}
    }
    #sub-footer ul li{
        ${tw`text-gray p-2`}
    }
  }
`;
export default FooterStyles;
