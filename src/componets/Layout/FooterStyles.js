import styled from "styled-components";
import tw from "twin.macro";

const FooterStyles = styled.main.attrs({})`
  & {
    #container{
        ${tw`px-24 py-10 bg-verydarkviolet text-center text-4xl text-brokenwhite flex-col lg:(grid justify-items-start flex flex-row justify-between text-xl)`}
    }
    #container-1 {
      ${tw`font-black text-5xl pr-10`}
    } 
    #container-2 {
      ${tw `flex flex-col lg:flex-row`}
    }  
    #sub-footer {
        ${tw`pr-10`}
    }
    #sub-footer h1{
        ${tw`text-brokenwhite pb-3`}
    }
    #sub-footer ul li{
        ${tw`text-gray p-2`}
    }
    #media-acoounts{
      ${tw`flex justify-center`}
    }
    #media-acoounts #icon{
      ${tw`pr-5`}
    }
  }
`;
export default FooterStyles;
