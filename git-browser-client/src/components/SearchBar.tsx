import { TextField, Button } from "@material-ui/core"
import { useHistory } from "react-router"
import { useState } from "react"

export const SearchBar = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')

    const handleSubmit = () => history.push(`/${username}`)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    
    return (
        <form onSubmit={() => handleSubmit()}>
            <TextField label="Github username" variant="outlined" size="small" value={username} onChange={onChange} />
            <Button type="submit" color="primary" variant="contained">Search</Button>
        </form>
    )
}