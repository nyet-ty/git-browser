import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { getRepositoryList } from "../api/functions";

type Data = {
    name: string;
}

export const RepositoryList = () => {
    const { username } = useParams<{ username: string }>()
    const [data, setData] = useState<string[]>()
    useEffect(() => {
        const getRepos = async () => {
            const repoList = await getRepositoryList(username) // TODO переделать
            setData(repoList.map((item: Data) => (item.name)))
        }
        getRepos()
    }, [username])
    if (!data) return <>no user with username {username}</>

    function createData(name: string) {
        return { name };
    }
    const rows = data.map((item) => createData(item))

    return (
        <>
            <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table"> {/* className={classes.table} */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Repositiry name</TableCell>
                            <TableCell align="left">Link to README.md</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left"><Link to={`/${username}/${row.name}`}>README.md</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}