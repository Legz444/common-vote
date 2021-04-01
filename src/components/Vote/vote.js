import React from 'react';



export default function Vote(props){
    const voterDemographic = props.politicalPoll.voterDemographic;
    console.log(voterDemographic);

    return(
        <>
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Basic Voter Information
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        {voterDemographic.map(item => {
                                return(
                                    <div className="card card-body">
                                        <h5 className="card-title">{item.question}</h5>
                                        {voterDemographic.answers.map(answer => {
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
            <div className="card">
                <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
            </div>
            </>
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