import styled from "styled-components";
export const FlexBox=styled.div`
    display: grid;
    grid-template-columns: repeat(3,4fr);
    margin: 20px;
    .innerBox{
    margin: 5px;
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.5);
    display: flex;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: center;
}
.textCenter{
    text-align: center;
}
.innerBox img{
    width: 80%;
    height:100%;
}
`