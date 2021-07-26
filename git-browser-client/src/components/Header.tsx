import { Link, useRouteMatch, useParams } from 'react-router-dom'
import { Button, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    header: {
        backgroundColor: '#005ce6',
        width: '100%',
        height: 40,
        marginTop: 0,
        padding: 0,
    },
    link: {
        textDecoration: 'none'
    }
})

export const Header = () => {
    const styles = useStyles()
    const match = useRouteMatch()
    const {username} = useParams<{ username: string }>()
    const needBackButton = match.path === '/:username/:repository'
    const justifyContent = needBackButton ? "space-between" : "flex-start"
    console.log(needBackButton, match.path)
    return (

        <Grid container className={styles.header} justifyContent={justifyContent}>
            <Grid item>
                <Button><Link to="/" className={styles.link}>Home</Link></Button>
            </Grid>
            <Grid item>{needBackButton && <Button><Link to={`/${username}`} className={styles.link}>Back</Link></Button>}</Grid>
        </Grid>
    )
}