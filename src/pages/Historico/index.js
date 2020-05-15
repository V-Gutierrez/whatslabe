import React, { useState } from 'react';

import { MdChat } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io';

//assets
import {
    Title,
    Avatar,
    List,
    Item,
    EnvelopeItem,
    ListConversation,
    Conversation,
    Text,
    IconBig,
    Status,
    Icons,
} from './style';

import Caio from '../../assets/caio.png';
import Paula from '../../assets/paula.jpg';
import Soter from '../../assets/soter.jpg';
import Whats from '../../assets/iconegrande.jpg';
import Eu from '../../assets/eulirico.jpg';

function Historico(props) {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            nome: 'Caio',
            msg: 'Bora para aula, que hoje tem evidência!',
            avatar: Caio,
        },
        {
            id: 2,
            nome: 'Paula',
            msg: 'E esse HTML que não está semântico?',
            avatar: Paula,
        },
        {
            id: 3,
            nome: 'Soter',
            msg: 'Legal que tal agora fazer com bananinha?',
            avatar: Soter,
        },
    ]);
    return (
        <ListConversation>
            <List>
                <Status>
                    <Avatar src={Eu} />
                    <Icons>
                        <MdChat size={24} color="#666" />
                        <IoMdMore size={24} color="#666" />
                    </Icons>
                </Status>
                {conversations.map((conversation) => (
                    <Item key={conversation.id}>
                        <EnvelopeItem>
                            <Avatar src={conversation.avatar}></Avatar>
                        </EnvelopeItem>
                        <Title>{conversation.nome}</Title>
                        <Text>{conversation.msg}</Text>
                    </Item>
                ))}
            </List>
            <Conversation>
                <IconBig src={Whats} />
            </Conversation>
        </ListConversation>
    );
}
export default Historico;
