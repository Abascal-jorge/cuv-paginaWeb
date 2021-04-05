import styled from "@emotion/styled";


export const FooterPie = styled.footer`
    background-color: rgba(18, 35, 143);
    color: white;

    .sociales-footer{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media(max-width: 768px){
            flex-direction: column;

            .datos-universidad{
                text-align: center;
                margin-bottom: 20px;
            }
        }
    }

    .pie-info{
        border-top: 4px solid rgba(143, 18, 35);
        padding: 10px;
        text-align: center;
    }

    svg{
        margin-left: 10px;
        font-size: 30px;
        cursor: pointer;
    }
`;
