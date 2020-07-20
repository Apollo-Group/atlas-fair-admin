import styled from 'styled-components';

export const GeneralForm = styled.div`
  padding: 30px;
`;

export const FilesForm = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 30px;
    display: flex;
    flex: 1;
    flex-direction: column;
`; 


export const DateForm = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  div.start {
    display: flex;
    flex: 1;
    justify-content: space-between;
    width: 600px;
  }

  div.end {
    display: flex;
    flex: 1;
    justify-content: space-between;
    width: 600px;
  }
`;