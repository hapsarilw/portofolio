import styled from "styled-components";
import tw from "twin.macro";

const MainStyles = styled.main.attrs({})`
  & {
    #main {
      ${tw`flex flex-col-reverse lg:flex-row p-20`}
    }
    #main #sentences {
      ${tw`flex-wrap flex-1 flex-col float-left`}
    }
    #main button {
      ${tw`text-xl px-4 py-3 bg-cyan border rounded-full text-transparent border-cyan hover:border-transparent hover:text-transparent hover:bg-cyan lg:mt-10`}
    }
    #main #imageWorking {
      ${tw`flex-wrap`}
    }
    #sentences{
      ${tw`flex flex-col p-5`}
    }
    h1{
      ${tw`text-center pt-5 lg:text-left `}
    }
    h3{
      ${tw`text-center p-5 lg:text-left`}
    }    
  }
`;
export default MainStyles;
