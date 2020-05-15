import React, { useState } from 'react';
import Conversas from '../../components/Conversa/index';

function Historico(props) {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            nome: 'Caio',
            msg: 'Bora para aula, que hoje tem evidência!',
            avatar: '',
        },
        {
            id: 2,
            nome: 'Paula',
            msg: 'E esse HTML que não está semântico?',
            avatar: '',
        },
        {
            id: 3,
            nome: 'Soter',
            msg: 'Legal que tal agora fazer com bananinha?',
            avatar: '',
        },
    ]);
    return (
        <>
            <ul>
                {conversations.map((conversation) => (
                    <li key={conversation.id}>
                        {conversation.nome} | {conversation.msg}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Historico;
