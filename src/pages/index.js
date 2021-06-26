import * as React from 'react'
import {Link} from 'gatsby'

const Indexpage=()=>{
    return(
        <main>
            <title>Home page</title>
            <Link to="/about">About me</Link>
            <p>Making the website in Gatsby tutorial.</p>
        </main>
    )
}

export default Indexpage