import React from 'react';
import Historico from '../Historico/index';
import Conversa from '../../components/Conversa/index';
import { Container } from './style';

function Paula() {
    return (
        <>
            <Historico />
            <Container>
                <Conversa />
            </Container>
        </>
    );
}
export default Paula;
