import React, {Component} from 'react';
import classes from './JobHistory.module.css';

class JobHistory extends Component {

    render () {
        return (
            <div className = {classes.Image}>
                <div className={classes.Header}>
                    <h1>Reid Brostoff</h1>
                </div>
                <div className = {classes.projectBox}>
                    <p>Computer Science<br/>Teaching Assistant</p>
                    <strong>For: </strong><p>University of Wisconsin - Madison</p>
                    <strong>From: </strong><p>August 2020 - December 2021</p>
                    <strong>Responsibilities: </strong><p>Teach both undergraduate and graduate students 
                        in the "Programming I" (Comp Sci 200) class. Work 10+ hours a week on top of taking personal classes. Constantly improving STEM teaching skills by leading interactive labs and having personal office hours. Collaborate 
                        with fellow TA's under multiple professors to keep an 800+ student class functioning properly.</p>
                </div>
                <div className = {classes.centerBox}>
                <br></br>
                <br></br>
                <br></br>
                <p>Cloud Engineer<br/> IBM - Client Engineering</p>
                
                <strong>From: </strong>
                <p>August 2022 - Present</p>
                </div>
                <div className = {classes.projectBox}>
                <p>IOT Developer Intern</p>
                    <strong>For: </strong><p>Flad Architects</p>
                    <strong>From: </strong><p>May 2021 - August 2021</p>
                    <strong>Responsibilities: </strong><p>Work full time and develop Post Occupancy Evaluation (POE) Arduino sensor technology used in many buildings including hospitals, laboratories, and offices. Use sensors monitoring Bluetooth device traffic, positional tracking, 
                        temperature, carbon monoxide, noise, and light detection. Full stack development with Python. Flask and Firebase back end communicating with Arduino sensors implemented in C++..</p>
                </div>
                <button onClick={this.props.setRedirectMain}>Back</button>
            </div>
        );
    }
}

export default JobHistory;