import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 100px;
`;

export const Wrapper = styled.table`
  width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #f9f9f9;
    border-top: 2px solid #c9c9c9;
    border-bottom: 2px solid #c9c9c9;
`

export const CheckBox = styled.span`
  width: 5%;
  text-align: center;
`;

export const Number = styled.span`
  width: 5%;
  text-align: center;
`;

export const Title = styled.span`
  width: 80%;
  text-align: center;
`

export const CreatedAt = styled.span`
  width: 10%;
  text-align: center;
`

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #c9c9c9;
`

export const Button = styled.button`
    width: 150px;
    height: 40px;
    margin: 10px 20px;
    border: none;
    border-radius: 30px;
    color: white;
    background-color: #0175ff;
` 