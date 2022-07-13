import { useNavigate } from "react-router-dom";
import './StartPage.css'


export default function StartPage() {

    // const navigate = useNavigate();

    return(
        <section id='startPage' className='startPage'>
            <div className='container'>
                <div className='contentStart'>
                    <h1 className='mainText'>Salem</h1>
                    <button className='button' 
                    // onClick={navigate('/game')}
                    >Bastau</button>
                </div>
            </div>
        </section>
    )
}

