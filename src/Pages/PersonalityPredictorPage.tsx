import React, { useState, useEffect } from 'react';
import '../output.css';
import ZoomableFigure from '../Components/ZoomableFigure';
import uiImage from '../Images/Personality_Predictor/UI.png';
import adviceImage from '../Images/Personality_Predictor/Advice.png';
import comprehensiveRecapImage from '../Images/Personality_Predictor/ComprehensiveRecap.png';
import specificBehaviorRecapImage from '../Images/Personality_Predictor/SpecificBehaviorRecap.png';
import behaviorRecapImage from '../Images/Personality_Predictor/BehaviorRecap.png';
import maslowImage from '../Images/Personality_Predictor/Maslows_Hierarchy_of_Needs_Diagram.png'

interface PersonalityPredictorPageProps{

}

const PersonalityPredictorPage: React.FC<PersonalityPredictorPageProps> = ({}) => {

    return(
        <div className="text-center my-5 ">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Personality Predictor</h1>
            <h5 className="text-gray-600 italic">
                Reinforcement Model That Predicts Personality And Behavior Trained On Simulating Life Events
            </h5>
            
            <div className="mx-auto mt-5 h-2 w-100 bg-blue-100 rounded-full"></div>
            <div className = "max-w-2xl mx-auto px-6">
             <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                The <span className="font-semibold text-indigo-600">Personality Predictor</span> was born out of my love of psychology and questions. Together, it combines to a resulting voice in my head asking "How do people tick"? 
                What motivates people to do certain decisions? Years of pondering and studying about this topic born another question "Can I simulate this"? And so, I proceeded with this project. At its core, 
                the stats that this model is trained to prioritize "livelihood" and "belonging". Essentially what it boils down to is the Maslow Hierarchy of Needs. We prioritize things that affect our physical wellness (livelihood)
                such as sleep, diet, shelter. Not only that but we also care about our social status (belonging) in the our tribe or community. As humans, we are weak alone and if we are rejected from the group, we are dead.
                
                <ZoomableFigure
                    src={maslowImage}
                    alt="Maslow Hierarchy Of Needs"
                    caption="Maslow Hierarchy of Needs"
                />
                
                When digging into the literature and using various reinforcement neural networks, I found that they unfortunately overestimates the intelligence of humans. 
                With the hypothesis that main drivers of motivations and behaviors come from the more primitive parts of ourselves through the mid and hindbrain (such as emotions and basic survival motivations) 
                and that further inputs through non-physical and more abstract stimuli (like thoughts) originating from the frontal lobe 
                (the more evolved parts of a human) are still processed through the primitive motivators. Instead, current models seem to value efficacy rather than human illogicability derived from
                our primitive motivators. And when they do try to make it more human-like, it does it by over-complicating our thinking processes with concepts such as 
                future reward discounts and [INSERT SOMETHING ELSE HERE]. Honestly, how often do you see someone calculating future rewards into their decision making?
                Most often times, decisions are born out of habit, experience, or told-to-do-so. 
            </p>

            <h2>What It Does</h2>

                <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                    The Personality Predictor's goal is to determine patterns of behavior based on 3 unique environmental scenarios: Threat, Ally, Prey/Goals. These environments were modeled after situations that
                    happened during the period where most of our evolutionary traits come from (hunterer-gatherers). These primitive environments are met with a selection of actions an agent can choose from: Flee, 
                    Fight, Befriend, and Chase. However, when developing this, I noticed that the agent refrained from making any decisions when it no longer finds it beneficial to act, such as the Threats were too strong 
                    to overcome, no Allies wanted to help, or no Prey/Goals worth pursuing. In other words, the agent developed depression. So alongside these active actions are also two depressive actions resulting from 2
                    different reasons: Helplessness or Boredom. 

                    <br></br>
                    The takeaway for users of this software is to learn more about their pattern of behaviors and the intentions for these patterns. 
                    It is to better understand not only ourselves but others to create a more empathetic and understanding world. Currently, it 
                    looks as to how we address threatening situations, make relationships, and how we achieve goals through evolutionary explanations.
                    It will simulate behaviors and learn from them based on how each actions affect the agent's livelihood and belonging. Whenever either one
                    gets to zero, then the agent "dies" and tries again. They do this until hopefully they develop a pattern of behaviors that help them survive
                    given the situational settings you input to reflect as indicated in the image below. These are to emulate one's
                    upbringing and the pattern of behaviors that are developed by these situations in order to survive. As also indicated by 
                    the same image below, models trained by these situations can be saved and loaded again to tie together different eras of life
                    or to predict behaviors given certain situations.
                    

                    <ZoomableFigure
                        src={uiImage}
                        alt="UI Image"
                        caption="The UI to input settings and agent qualities"
                    />

                    <br></br>
                    Not only does it give you a recap of the stats of the various actions and settings you encounter, it will re-organize your behaviors
                    into certain personality archetypes based on common patterns of behaviors seen with this predictor. In this archetype recap sheet, it will further
                    recommend certain advice based on your report.

                    <ZoomableFigure
                        src={behaviorRecapImage}
                        alt="Behavior Recap Image"
                        caption="Overall results of behaviors and personality"
                    />

                    <ZoomableFigure
                        src={adviceImage}
                        alt="Advice Image"
                        caption="Advice Sheet recommended based on results"
                    />

                    <br></br>

                    Furthermore, The Personality Predictor also outputs extra comprehensive information of the training it did with 
                    the situations, the learning losses with the models, and the actions they selected throughout it. Even each
                    specific trait has an overview.

                    <ZoomableFigure
                        src={comprehensiveRecapImage}
                        alt="Comprehensive Recap Image"
                        caption="Comprehensive Recap of Training Information and Overall Behavior Selections Based On Situations"
                    />

                    <ZoomableFigure
                        src={specificBehaviorRecapImage}
                        alt="Specific Behavior Image"
                        caption="Comprehensive Overview of Specific Trait"
                    />

                </p>
                <br></br>

            <h2>Future Plan</h2>
            <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                Future plan will expand beyond these 5 actions and 3 situations. More in-depth analysis will be placed on 
                altruism, romance, greed, and more. 
            </p>
            </div>

            <h2>Github Source</h2>
           <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                <a
                    href="https://github.com/AndJHu97/Behavior-Predictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                >
                    https://github.com/AndJHu97/Behavior-Predictor
                </a>
            </p>
        </div>
    )
}

export default PersonalityPredictorPage;