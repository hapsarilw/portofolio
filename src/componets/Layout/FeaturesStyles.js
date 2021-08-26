import styled from "styled-components";
import tw from "twin.macro";

const FeaturesStyles = styled.main.attrs({})`
  & {
    #featured-list {
      ${tw`bg-grey`}
    }
    #advancedSearch {
      ${tw`px-20 pt-20 text-center`}
    }
    #advancedSearch h1 {
      ${tw`text-5xl font-bold pb-5`}
    }
    #advancedSearch h3 {
      ${tw`text-3xl text-grayish px-20 pt-5`}
    }
    #features {
      ${tw`lg:flex lg:flex-row`}
    }
    #featured-item {
      ${tw`lg:(w-1/3 m-5 p-10 text-left) rounded-lg bg-brokenwhite mb-5 p-10 text-center`}
    }
    #featured-item h1 {
      ${tw`text-5xl font-bold lg:text-lg`}
    }
    #featured-item h3 {
      ${tw`text-3xl text-grayish px-20 pt-5 lg:(text-sm text-left px-0)`}
    }    
    #boots-link {
      ${tw`text-center p-20`}
    }
    #boots-link h1 {
      ${tw`text-transparent text-5xl font-bold pb-5`}
    }
    #boots-link button {
      ${tw`text-transparent text-3xl rounded-full bg-cyan px-10 py-2`}
    }
  }
`;
export default FeaturesStyles;
