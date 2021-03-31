import React from 'react';



export default function Vote(props){
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