import styled from "styled-components"
import tw from "twin.macro"

const NavigationStyles = styled.main.attrs({
  
})`
  & {
    nav {
      ${tw`flex px-20 py-10 flex-col overflow-hidden object-top`}
    } 
    #top-side {
      ${tw`flex justify-start justify-between`}
    }
    #logo {
      ${tw`flex flex-none`}
    }        
    #desktop-menu{
      ${tw`pl-10 invisible lg:visible lg:place-items-start`}
    }
    #desktop-menu a{
      ${tw`pl-10 text-lg text-grayish focus:text-verydarkviolet `}
    }
    #bottom-side {
      ${tw`block z-40 lg:invisible`}
    }
    #menu {
      ${tw`lg:hidden`}
    }
    #tabmenu {
      ${tw`w-full flex rounded p-5 mt-5 bg-boost-pattern flex flex-col bg-darkviolet text-xl text-brokenwhite`}
    }
    #tabmenu a {
      ${tw `p-2`}
    }
  }
`
export default NavigationStyles