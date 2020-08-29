import React from 'react';
import './Subjects.css'

const Subjects = (props) => {
    console.log(props)
    const {title,balance, picture} = props.subjects
    // console.log(props.subjects.title);
    return (
        <div className = "subject-part">
            <div>
                <img src={picture} alt=""/>
            </div>
            <div className = 'info'>
                <h4 className ='subject-name'>{title}</h4>
                <br/>
                <p><small>Price: ${balance}</small></p>
                 <button className = "btn" onClick = {()=>props.handleAddCourse(props.subjects)}>Enroll now</button>
            </div>
        </div>
    );
};

export default Subjects;