import styled from "styled-components"
import tw from "twin.macro"

const OutputItemStyles = styled.main.attrs({

})`
  & {
    #itemSection {
      ${tw`bg-grey pl-20 pr-20 pb-5`}
    }   
    #item {
      ${tw`divide-y divide-grayish lg:divide-y-0 flex-col lg:flex-row bg-brokenwhite shadow-xl flex items-stretch rounded p-5`}
    } 
    #item #originalLink {
      ${tw`text-center flex-1 bg-brokenwhite px-3 py-3 bg-brokenwhite text-verydarkviolet relative w-full lg:mr-4 lg:text-left`}
    }
    #item #shortLink {
      ${tw`text-center lg:text-right text-cyan items-stretch flex-1 bg-brokenwhite px-3 py-3 bg-brokenwhite w-full mr-4`}
    }
    #item button {
     ${tw`bg-cyan hover:bg-cyan text-brokenwhite font-bold py-1 px-1 pl-5 pr-5 border border-cyan rounded`} 
    }
  }
`
export default OutputItemStyles