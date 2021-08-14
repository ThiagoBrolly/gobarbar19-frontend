import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Thiago Sousa</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://images.apilist.fun/adorable_avatars_api.png"
              alt="Thiago Sousa"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
