import { useNavigate } from "react-router-dom";
import './StartPage.css'


export default function StartPage() {

    const navigate = useNavigate();

    const handlehome = () =>{
        navigate("/")
    }

    const handlegame = () =>{
        navigate("/game")
    }

    return(
        <section id='startPage' className='startPage'>
            <div className='container'>
                <div className='contentStart'>
                    <h1 className='mainText'>SanDyq</h1>
                    <button className='button' 
                    onClick={() => {navigate("/game")}}
                    >Bastau</button>
                </div>
            </div>
        </section>
    )
}

