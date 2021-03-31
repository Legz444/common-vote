import React, { useState } from 'react';


export default function Vote(){
    const [poll, setPoll] = useState(
       politicalPoll = {
            voterDemographic = [ 
                {
                    question: "What is your political affiliation?",
                    answers: [ "Democrat", "Green Party", "Independant", "Libertarian", "Other", "Republican", "Unaffiliated"]
                },
                {
                    question: "Have you been a member of the same political party your entire voting career?",
                    answers: [ "Yes", "No", "Changed once", "Changed twice", "Changed more than 3 times"]
                },
                {
                    question: "Do you vote in national elections?",
                    answers: ["Always", "Never", "More than half the time", "Half the time", "Less than half the time"]
                },
                {
                    question: "Do you vote in local elections",
                    answers: ["Always", "Never", "More than half the time", "Half the time", "Less than half the time"]
                },
                {
                    question: "How likely are you to vote in upcoming elections?",
                    answers: ["Very Likely", "Somewhat Likely", "I dont know", "Somewhate Unlikely", "Very Unlikely"]
                },
                {
                    question: "How many national elections have you voted in?",
                    answers: ["none", "1-5", "5-10", "10-15", "15-20", "20+"]
                },
                {
                    question: "Do you always vote for candidates in your political party?",
                    answer: ["Always", "Never", "More than half the time", "Half the time", "Less than half the time"]
                },
                {
                    question: "Do you believe that political polls are fairly accurate?",
                    answer: ["Always", "Never", "More than half the time", "Half the time", "Less than half the time"]
                }  
            ],
            currentLeadership = [
                {
                    question: "How would you rate the president on their ability to effectively fill their roll? 10 being perfectly effective and 1 being completely ineffective.",
                    answers: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
                },
                {
                    question: "How would you rate the Electoral College on their ability to effectively fill their roll? 10 being perfectly effective and 1 being completely ineffective.",
                    answers: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
                },
                {
                    question: "Do you GENERALLY trust elected political figures?",
                    answers: ["Yes", "No", "Only Members in my affiliated party"]
                },
                {
                    question: "GENERALLY How confident are you in the ability of world leaders to address the world’s biggest challenges?",
                    answer: ["Very Confident", "Somewhat Confident", "I don't know", "Less Confident", "Not confident at all"]
                }
            ],
            currentSystem = [
                {
                    question: "Do you believe in the impeachment process in the United States?",
                    answer: ["Yes", "No", "I don't know", "Sometimes"]
                },
                {
                    question: "Are you in favor of or against mail-in voting?",
                    answer: ["Completely in favor", "Somewhat in favor", "I don't know", "I don't care", "Somewhat against", "Completely Against"]
                }
            ],
            economics = [
                {
                    question: "Thinking about the job situation in America today, would you say that it is a good time to find a quality job?",
                    answers: ["Very good time", "Somewhat good time", "I don't know", "Somewhat not a good time", "Not a good time"]
                },
                {
                    question: "How would you rate economic conditions in this country, 10 = great 1 = poor?",
                    answers: ["10", "9", "8", "7", "6","5","4","3","2","1"]
                }
        
            ],
            forgeignPolicy = [
                {
                    question: "Do you think it best for the future of our country if we take an active part in world affairs or if we stay uninvolved?",
                    answers: ["Yes", "No", "Sometimes"]
                }
            ]
            // defense = [
        
            // ],
            // climate = [
        
            // ],
            // healthCare = [
        
            // ],
            // civilRights = [
        
            // ],
    }, [setPoll])
    
    return(
        <div className="Vote-page">
            <div className="voterDemographic">
                <a className= "btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demographicCollapse" aria-expanded="false" aria-controls="demographicCollapse">Basic Voter Information</a>
                <div className="collapse" id="demographicCollapse">
                    {politicalPoll.voterDemographic.map(item => {
                        return(
                            <div className="card card-body">
                                <h5 className="card-title">{item.question}</h5>
                                {politicalPoll.voterDemographic.answers.map(answer => {
                                    return(
                                        <ul className="list-group">
                                            <li className="list-group-item" key={answer._id}>{answer.answers}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        );
                    })}
                </div>   
            </div>
        </div>
    )
}


//I want to display the array of questions on cards.
//The user will click the question and view the options to vote on and a corresponding charts displaying the total votes from all users.

//Do I:
//Hard code an array and map over the array of questions in the front end on this voter page? I will have a model and schema in the back end so the question and the users answer are stored in the database. Then I can access that data to create the charts I want to display.
//The original questions are untouched, only the database of answers is updated.

//OR

//Store the questions and answers in the database by making a model and schema and using postman to upload each question and answer. Then I have a useEffect that updates that database and corresponding charts. 
//How do I make it so that every user can still vote and see the update total votes in the charts? If a user changes the datbase, then how does another user still get to vote?