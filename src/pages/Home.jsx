import Navbars from "../components/Navbars"
import Container from 'react-bootstrap/Container'
import { Typewriter } from "react-simple-typewriter";
import './Home.css'

const Home = () =>{
    return(
        <>  
            <Navbars />
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh', color: 'white', textAlign: 'center' }}>
                <div className="vTypeWriter">
                    <Typewriter
                        words={[
                        "Olá, eu sou Emilio",
                        "Sou desenvolvedor Full Stack",
                        "Bem-vindo(a) ao meu portfólio!",
                        "</> "
                        ]}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </div>
            </Container>
        </>
    )
}

export default Home