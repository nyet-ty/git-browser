import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core'
import { Header } from '../Header'

const useStyles = makeStyles({
    main: {
        paddingTop: 20,
        paddingLeft: 20,
    }
})

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Header />
            <main className={classes.main}>{children}</main>
        </React.Fragment>
    );
};