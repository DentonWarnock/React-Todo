import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  margin: 0 auto;
  text-align: center;
  background: dodgerblue;
  width: 80%;
  height: 100vh;
  
  .header {
    margin-bottom: 2rem;
    top: 10px;
  }

  h2 {
    font-size: 2.5rem;
  }
`

export const StyledForm = styled.form`
  width: 100%;
  margin: 1rem;

  input {
    line-height: 1.5rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    height: 3rem;
    border: 1px solid silver;
    width: 50%;
    min-width: 5rem;
  }  
}
`
export const StyledButton = styled.button`
  background: tomato;
  color: black;
  font-size: 1.1rem;
  font-weight: bold;
  min-width: 15%;
  border-radius: 1rem;
  line-height: 1.5rem;
  height: 2.5rem;
  display: block;
  margin: 1rem auto;
  border: none;

  &: hover {
    background: white;
    color: lightskyblue;
    cursor: pointer;
  }
`

export const TodoCard = styled.div`
  background: purple;
  color: white;
  border: 1px solid black;
  margin: 1rem auto;
  width: 50%;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 

  div {
    padding: 1rem;
  }
`