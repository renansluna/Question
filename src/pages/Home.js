import React from 'react';
import '../styles/styles.css'
import { MenuPrincipal } from '../components/MenuPrincipal';
import { InformationBoard } from '../components/InformationBoard';

export const Home = (props) => {
    return (
    <main class="backgroundTeste">  
        <MenuPrincipal/>
        <div class="containerPaginaPrincipal"> 
            <h1 class="titulo" > 
                Question?
            </h1>
            <div class="boardsContainer">
                <InformationBoard 
                    title="Teachers" 
                    description="A place to challange your students with your exams. 
                    You can use it as a review for example.
                    You just need to register your exams and 
                    give their ids to the students."/>
                <InformationBoard 
                    title="Students" 
                    description="A place where you can access all exams and challange yourself."/>
            </div>    
        </div>
    </main>
    );
}