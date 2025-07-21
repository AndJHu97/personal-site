import React, { useState, useEffect } from 'react';
import '../output.css';
interface PersonalityPredictorPageProps{

}

const PersonalityPredictorPage: React.FC<PersonalityPredictorPageProps> = ({}) => {

    return(
        <div className="text-center my-5">
            <h1 className="fw-bold">Personality Predictor</h1>
            <h5 className="text-muted fst-italic">
                Reinforcement Model That Predicts Personality And Behavior Trained On Simulating Life Events
            </h5>
            
            <div className="mx-auto mt-10 h-2 w-100 bg-blue-100 rounded-full"></div>
    </div>
    )
}

export default PersonalityPredictorPage;