import { useEffect ,useState } from 'react'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

import {getRepositoryReadMe} from '../api/functions'

export const ReadMe = () => {
    const {username, repository} = useParams<{ username: string, repository: string }>()
    const [readMe, setReadMe] = useState('')
    useEffect(() => {
        const getReadMe = async() => {
            const repoText = await getRepositoryReadMe(username, repository)
            setReadMe(repoText)
        }
        getReadMe()
    }, [username, repository])
    return (<ReactMarkdown>{readMe}</ReactMarkdown>)
}