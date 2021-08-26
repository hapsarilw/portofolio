import styled from "styled-components"
import tw from "twin.macro"

const FormStyles = styled.main.attrs({
    
})`
  & {
    #formSection {
        ${tw`px-20 pt-20 pb-10 bg-grey`}
    }
    #formSection form {
        ${tw`flex items-stretch rounded p-10 m-3 flex-col lg:flex-row`}
    }  
    form input {
        ${tw`w-3/4 flex-1 px-10 py-3 placeholder-grayish text-grayish relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mr-4 text-center lg:text-left`}
    }
    form button {
        ${tw`bg-cyan hover:bg-cyan text-brokenwhite font-bold border border-cyan rounded py-2 px-4 mt-5 text-center lg:(py-2 px-4 m-0)`}
    }   
  }
`
export default FormStyles