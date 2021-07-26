import React, { ReactNode } from 'react';
import { Header } from './Header';

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            <Header />
            <main>{children}</main>
        </React.Fragment>
    );
};