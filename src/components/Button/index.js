import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    padding: 12px 16px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: 0.3s;
    white-space: normal;
    word-wrap: break-word;
    
    &:disabled {
    background-color: #979797;
    cursor: not-allowed;
    };

    &:hover {
    opacity: .5;
    };
  
`;

export default Button;