import styled from "styled-components"
import tw from "twin.macro"

const NavigationStyles = styled.main.attrs({

})`
  & {
    nav {
      ${tw`flex items-center justify-between flex-wrap p-6`}
    }
    #logo {
        ${tw `flex items-center flex-shrink-0 mr-6`}
    }
    #menu {
        ${tw`block lg:hidden`}
    }
    #menu button {
        ${tw`flex items-center px-3 py-2 border rounded text-cyan border-cyan hover:text-gray hover:border-gray`}
    }
    #left-side{
        ${tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
    }
    #left-side a {
        ${tw`block mt-4 lg:inline-block lg:mt-0 text-grayish hover:text-verydarkviolet mr-4`}
    }    
    button {
        ${tw`inline-block text-sm px-4 py-2 leading-none bg-cyan border rounded-full text-transparent border-cyan hover:border-transparent hover:text-transparent hover:bg-cyan mt-4 lg:mt-0`}
    }
  }
`
export default NavigationStyles