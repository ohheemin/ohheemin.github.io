import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ROS1",
    "ROS2",
    "LiDAR",
    "PCL",
    "OpenCV",
    "C++",
    "Python",
    "CARLA",
    "End2End Driving",
];

const labelsSecond = [
    "PyTorch",
    "OpenCV",
    "Scikit-learn",
    "NumPy",
    "Object Detection",
    "Transformers",
    "Python",
];

const labelsThird = [
    "Isaac Sim",
    "Gazebo",
    "ROS2",
    "Jetson Nano",
    "Arduino",
    "Real2Sim2Real",
    "Manipulation",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCar} size="3x"/>
                    <h3>Autonomous Driving & Perception</h3>
                    <p>I develop perception and end-to-end driving pipelines for autonomous mobility — LiDAR point-cloud processing, sensor fusion, and camera-based perception. As vision team lead of the MACARON competition team, I built the LiDAR processing stack for a full self-driving platform.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Computer Vision & Deep Learning</h3>
                    <p>I design and train deep-learning models for image processing and object recognition, from data pipelines to evaluation. My work spans vision-based detection for robotic manipulation and transformer-based perception for end-to-end driving.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Digital Twin & Robotics (Physical AI)</h3>
                    <p>I research Physical AI and Real2Sim2Real for robotic manipulation, building digital-twin simulation environments and evaluating sim-to-real consistency. This includes manipulator motion planning and mobile-robot control in Isaac Sim and Gazebo.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
