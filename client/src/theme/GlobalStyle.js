import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Sora', sans-serif;
    font-family: 'Manrope', sans-serif;
    font-family: 'Quicksand', sans-serif;
}


html, body {
     --moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.bodyBg};
        font-family: 'Oswald', sans-serif;
        color: ${(props) => props.theme.textColor};
        scroll-behavior: smooth;

        min-height: 100vh;

        min-width: 100vw;
        overflow-x: hidden;


        scroll-behavior: smooth;
        scrollbar-width: thin;scrollbar-width: thin;
        *::-webkit-scrollbar {
          width: 5px;
          border-radius: 25px;
        }
        *::-webkit-scrollbar-track {
          background: ${(props) => props.theme.colorText};
        }
        *::-webkit-scrollbar-thumb {
          background: ${(props) => props.theme.textColor};
        }

        *::-webkit-scrollbar-thumb:hover {
          background: ${(props) => props.theme.textColor};
          transition: all 0.5s ease-in-out;
        }
        *::-webkit-scrollbar-thumb:active {
          background: ${(props) => props.theme.textColor};
        }

      
    }


    .icon{
        cursor: pointer;
        &:hover{
            color: ${(props) => props.theme.interactive} !important;
            transform: scale(1.05);
            font-weight: 600;
        }
    }
    
    .logOutSideBar{
         color: ${(props) => props.theme.error};
        }

    `;
