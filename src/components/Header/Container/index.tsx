import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';



const MainHeader = styled.header`

background-color: var(--primaria);




`
//styled components permite que seja feita toda a alteração do css no propro javascript
//import './styles.css';

export default function Header(){
    return (

        <MainHeader>
            <TopBar />
        </MainHeader>

    );
}