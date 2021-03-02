import styled from 'styled-components'

const Input = styled.input`
    margin: 32px 0 24px;
    height: 40px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primaryLight};
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastText};
    outline: 0;
    padding: 8px 16px;

    &::placeholder {
    color: ${({ theme }) => theme.colors.primaryLight};
    }
`

export default Input;