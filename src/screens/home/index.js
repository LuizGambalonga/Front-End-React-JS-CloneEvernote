import React,{Fragment} from 'react'
import presentationImage from '../../assets/images/presentation.png'
import Header from '../../components/header';
import { Column,Section,Title,Container } from 'rbx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';
const HomeScreen = () =>(
    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Não foi tão facil criar suas Notas
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle> </Title>
                        <Link to="/register" className="button is-outline is-white is-large">
                            <strong>Registre-Se Agora!</strong>
                        </Link>
                       
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={presentationImage}/>
                    </Column>
                </Column.Group>
            </Container>
         </Section>
    </Fragment>
)
export default HomeScreen;
