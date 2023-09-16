import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'



const Header = () => {
        const navigate = useNavigate()
        const handleGoBack = () => {
                navigate(-1);
              };
    return (
            <div className="container-fluid">
                    <Link className="btn m-2 btn-outline-secondary" to={'/home'}>Go to Home</Link> 
                    <Link className="btn m-2 btn-outline-primary " to={'/num/form'}>Have fun with cool Nums!</Link>
                    <Link className="btn m-2 btn-outline-primary " to={'/text/form'}>Have fun with your cool Words!</Link>
                    <Link className="btn m-2 btn-outline-primary " to={'/styledtext/form'}>Coolish more your Words</Link>
                    <button className="btn m-2 btn-outline-danger" onClick={handleGoBack}>Back</button>               

            </div>

    )
}

export default Header
