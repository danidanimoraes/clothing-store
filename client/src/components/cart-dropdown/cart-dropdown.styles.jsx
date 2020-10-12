import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 71px;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 240px;
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartCustomButton = styled(CustomButton)`
    margin-top: auto; // always at the bottom
`;

