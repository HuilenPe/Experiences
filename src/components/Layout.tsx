import React, { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
  </div>
);

export default Layout;