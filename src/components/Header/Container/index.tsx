import React from 'react';
import styled from 'styled-components';



const MainHeader = styled.header`

background-color: #2B4CBB;




`
//styled components permite que seja feita toda a alteração do css no propro javascript
//import './styles.css';

export default function Header(){
    return (

        <MainHeader>
            <h1>Cabeçalho</h1>
        </MainHeader>

    );
}