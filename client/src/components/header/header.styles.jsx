import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    margin-bottom: 25px;
`;

export const FirstBoxContainer = styled.div`
    display: flex;
    padding-left: 80px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 15px 25px 25px 10px;
`;

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;
    text-transform: uppercase;
`;
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

// One way to share styles: using {css}

// export const OptionLink = styled(Link)`
//     ${OptionStyles}
// `;

// export const OptionDiv = styled.div`
//     ${OptionStyles}
// `;

