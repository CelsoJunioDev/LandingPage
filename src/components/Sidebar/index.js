import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper } from './styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to="abilities" onClick={toggle}>Habilidades</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projetos</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contato</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
