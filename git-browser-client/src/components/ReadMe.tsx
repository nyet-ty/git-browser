import { useEffect ,useState } from 'react'
import { useParams, useRouteMatch } from "react-router-dom";

import {getRepositoryReadMe} from '../api/functions'

export const ReadMe = () => {
    const {username, repository} = useParams<{ username: string, repository: string }>()
    const match = useRouteMatch()
    console.log(match.path)
    const [readMe, setReadMe] = useState('')
    useEffect(() => {
        const getReadMe = async() => {
            const repoText = await getRepositoryReadMe(username, repository)
            setReadMe(repoText)
        }
        getReadMe()
    }, [username, repository])
    return (<div>{readMe}</div>)
}