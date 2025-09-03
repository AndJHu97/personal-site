import React, { useState, useEffect } from 'react';

interface NextStepMDPageProps{

}

const NextStepMDPage: React.FC<NextStepMDPageProps> = ({}) => {
    return(
        <div className="text-center my-5 ">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">NextStepMD</h1>
            <h5 className="text-gray-600 italic">
                Recommend the next clinical decision through algorithmic evidence-based medicine
                <br></br>
                Knowledge-Based Clinical Decision Support System
            </h5>


            <div className="mx-auto mt-5 h-2 w-100 bg-blue-100 rounded-full"></div>
                <div className = "max-w-2xl mx-auto px-6">
                <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                    The <span className="font-semibold text-indigo-600">NextStepMD</span> came from my background in medicine and computer science. 
                    During my time as a medical student and CS Master's student, I recognized (despite my initial suspicions already) how non-synergistic and unblending
                    these two fields were both in career-wise (at least for entry careers) and learning. However, I pushed on because I knew what could be accomplished by 
                    specializing in these two views. A gap that needs to be filled to ensure quality and better care. During my third year of medical school, 
                    I had a first-person experience on the ongoing of clinical care and saw a desperate need for a more comprehensive tool for healthcare providers.
                    A tool that most developers do not have the clinical experience to develop, and a tool that most clinicians have no developer skills to know to request.
                    That's when I decided to take a few years off after my third year of medical school to begin my CS journey. To specialize in 2 fields that do not 
                    synergize to create a potential born out of fire and ice. NextStepMD is my audition for this potential I envision. 
                    </p>

                    

                    <h2>The Need And Problem</h2>
                    <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                    Before, I delve into this passion project, it's important and crucial to understand the rationale and need I encountered 
                    during my experience in medicine and CS. My third year rotation was my first, on-hands experience in the hospital, and,
                    to be brutually honest, born my frustration with medicine. I acknowledge that the ample time and discussions on patient care
                    is necessary to providing a collaborative and comprehensive plan for the patient; yet, I found the reliance on the individual 
                    knowledge rather than a standardized data pool to be concerning. For example, someone suffering from heat failure 
                    could be improved because a resident on the care team read the latest literature on health failure treatment versus a resident who hadn't had enough 
                    time to review the new treatment protocol. This was an actual situation I experienced on my rotation. 

                    <br></br>
                    <br></br>

                    Not only is patient care dependent on the the team members being continuously well-read, which is not always the case, but this is preventable. 
                    Copious amount of research has culminated in very comprehensive medical algorithms or work flow exists to guide clinicians towards the right decisions
                    to make for their patient, and this evidence based medicine is accessible. The problem is that these algorithms were not too long ago fleshed out 
                    and the medical curriculum has not caught up completely to rely on these step-by-step algorithms (yes, they will reference them but they still 
                    have students learn more about acknowledging general trends rather than a formulaic and evidence-backed medicine). On top of this, there's so much medical 
                    algorithms exist that it is practically impossible for a person to memorize them all. But do you know who would be best to parse through all these algorithms? A computer...

                    <br></br>
                    <br></br>
                    
                    This is where the problem comes in on the software engineering side. They do not have first-hand experience in the hospital to understand this problem.
                    And that's where deep learning and the chasing of the hype of it has occluded the view of practical and needed application. 
                    Current deep learning decision making software for medicine are not helpful for the reason that the data is quite terrible (i.e. clinical notes which 
                    are often used to train AI are horrendous and only really written by clinicians for insurance purposes) and that medicine is very algorithmic already (there is step by 
                    step procedures alreayd on what to do so why re-learn this!!). 
                    
                    <br></br>
                    <br></br>
                    
                    Furthermore, medicine is so rapidly advancing due to huge efforts of clinical research that the 
                    AI would have to continuously train and furthermore have to find data beyond clinical notes to train (because new medical advancements will not be reflected
                    by the clinical notes initially). Very little has been done to advance a decision making tool that is based on set rules rather than dynamic learning. 
                    Yet, this is a much simpler and straightforward method and would yield tremendously better result. Imagine a world where medical care is not reliant
                    on which hospital or who is on your team. Instead, it is standardized and regulated with the most updated and evidence-based algorithms to prevent mistakes
                    and offer the best care for every patient, no matter where they are at. 

                    <br></br>
                    <br></br>
                    This is why I'm passionate about NextStepMD.

                    </p>

                </div>
        </div>
    )
};

export default NextStepMDPage;

