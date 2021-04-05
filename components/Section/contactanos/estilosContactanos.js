import styled from "@emotion/styled";

export const DivMapa = styled.div`
        position: relative;
        width: 100%;
        height: 500px;
        overflow: hidden;
        //border: 2px solid #eee;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(238, 238, 238,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(238, 238, 238,0);

        iframe{
            width: 100%;
            height: 100%;
        }

        @media(max-width: 740px){
            iframe{
                position: absolute;
                top: 0;
                left: 0;
                width: 100% !important;
                height: 100% !important;
            }
        }
`;

export const FormContactanos = styled.div`
    display: flex;
    column-gap: 30px;

    form{
        margin-bottom: 40px;
        flex: 1;

        .inputs{
            display: flex;
            flex-direction: column;
        }
        .inputs label{
            padding: 10px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: bold;
        }
        .inputs input, .inputs select{
            padding: 10px;
            outline: none;
            appearance: none;
            border: 1px solid #eee;
        }

        .inputs input::placeholder{
            font-size: 12px;
            color: #DADADA;
        }

        .inputs textarea{
            resize: none;
            outline: none;
            appearance: none;
            border: 1px solid #eee;
        }

        input[type="submit"]{
            margin-top: 10px;
            outline: none;
            appearance: none;
            border: 1px solid #eee;
            padding: 10px;
            background-color: blue;
            color: white;
            font-weight: bold;
            letter-spacing: 1px;
            width: 100%;

            &:hover{
                background-color: rgba(31, 53, 241);
            }
        }
    }

    .terminos{
        flex: 1;
        svg{
            width: 30px;
            color: crimson;
        }

        .info-contacto{
            margin-left: 20px;
            display: flex;
            align-items: center;
            P{
                padding-left: 20px;
            }
        }
    }

    @media(max-width: 760px){
        flex-direction: column;

        form{
            margin-bottom: 20px;
        }

        .terminos{
            margin-bottom: 40px;

            .info-contacto{
                margin-left: 0;
            }

            @media(max-width: 500px){
                .info-contacto{
                    flex-direction: column;
                }
            }
        }
    }
`;
