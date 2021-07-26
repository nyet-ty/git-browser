import { TextField, Button } from "@material-ui/core"
import { useHistory } from "react-router"
import { useState } from "react"

export const SearchBar = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const onClick = () => history.push(`/${username}`)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    return (
        <div>
            <TextField label="Github username" variant="outlined" size="small" value={username} onChange={onChange} />
            <Button type="button" onClick={onClick}>Search</Button>
        </div>
    )
}