import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin: 30px;
  width: 500px;
  border-radius: 3px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
  @media (max-width: 768px) {
    width: 300px;
  }
`

export const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.div`
  font-weight: bold;
  margin-bottom: 3px;
`

export const Donation = styled.div``

export const Button = styled.button`
  background-color: #f9f9f9;
  border-radius: 3px;
  border: 1px solid mediumblue;
  display: inline-block;
  cursor: pointer;
  color: mediumblue;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  :hover {
    background-color: lightsteelblue;
  }
  :active {
    position: relative;
    top: 1px;
  }
`

export const Modal = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 0px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  height: 100%;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  align-self: flex-end;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: #666666;
`

export const Label = styled.p``

export const Option = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 20px;
`
