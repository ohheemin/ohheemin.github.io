import React from "react";
import ProjectCarousel from './ProjectCarousel';
import macaron from '../assets/images/proj_macaron.jpg';
import macaron2 from '../assets/images/proj_macaron2.jpg';
import soomac from '../assets/images/proj_soomac.jpg';
import soomac2 from '../assets/images/proj_soomac2.jpg';
import digitaltwin from '../assets/images/proj_digitaltwin.jpg';
import e2e from '../assets/images/proj_e2e.jpg';
import avatar from '../assets/images/proj_avatar.jpg';
import avatarPhoto from '../assets/images/proj_avatar_photo.jpg';
import patent from '../assets/images/proj_patent.jpg';
import digitaltwin2 from '../assets/images/proj_digitaltwin2.jpg';
import e2e2 from '../assets/images/proj_e2e2.jpg';
import '../assets/styles/Project.scss';

// Each project takes an array of photos. Add more by dropping images into
// src/assets/images, importing them, and appending to the images={[...]} list —
// the arrows and dots appear automatically once a project has 2+ photos.
// Links marked "#" are placeholders; swap for real repo / demo / paper URLs.

const DOI = "https://doi.org/10.8080/1020210191876";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <ProjectCarousel images={[digitaltwin, digitaltwin2]} alt="Digital Twin framework" link="#" />
                <a href="#" target="_blank" rel="noreferrer"><h2>Digital Twin Framework</h2></a>
                <p>Undergraduate researcher at Dongguk AI &amp; Robotics Lab. Built a framework that boots Gazebo / Isaac Sim with the factory, containers and robots pre-configured and MoveIt / Nav ready, then aligned real-vs-sim mobile-robot trajectories for digital-twin consistency. Published in RAS (2nd author). (2025 – present)</p>
            </div>
            <div className="project">
                <ProjectCarousel images={[e2e2, e2e]} alt="End-to-end autonomous driving" link="https://hm-image-recognition.tistory.com/5" />
                <a href="https://hm-image-recognition.tistory.com/5" target="_blank" rel="noreferrer"><h2>End-to-End Autonomous Driving</h2></a>
                <p>Perception lead, undergraduate researcher at Hanyang Automotive Intelligence Lab. Reworked the camera-based VAD architecture and added a Transformer module for the none-traffic-light-state problem, improving Driving Score by 20+ over VAD on Bench2Drive. (2026 – present)</p>
            </div>
            <div className="project">
                <ProjectCarousel images={[macaron2, macaron]} alt="MACARON autonomous driving team" link="https://western-wash-20a.notion.site/MACARON-3e3671841ea180e6af8fd05d2a21bbb1?source=copy_link" />
                <a href="https://western-wash-20a.notion.site/MACARON-3e3671841ea180e6af8fd05d2a21bbb1?source=copy_link" target="_blank" rel="noreferrer"><h2>MACARON — Autonomous Driving Team</h2></a>
                <p>Team captain &amp; perception-decision lead of Dongguk's autonomous driving team. LiDAR–camera sensor fusion for obstacle detection and deep-learning lane detection; a point-density filter fixed LiDAR over-avoidance → 4th place at the International EV Autonomous Driving Competition. (2024 – 2025)</p>
            </div>
            <div className="project">
                <ProjectCarousel images={[soomac2, soomac]} alt="SOOMAC manipulation team" link="https://western-wash-20a.notion.site/SOOMAC-3e3671841ea180d39b77d9dafdc44890?pvs=73" />
                <a href="https://western-wash-20a.notion.site/SOOMAC-3e3671841ea180d39b77d9dafdc44890?pvs=73" target="_blank" rel="noreferrer"><h2>SOOMAC — Robotic Manipulation Team</h2></a>
                <p>Perception-decision member of Dongguk's manipulation team. Built the object-detection model and dataset for an industrial meal-kit cobot; data augmentation and tuning raised mAP from 77% to 84% → 3rd place, R-BIZ Challenge (ZEUS Robot Mission). (2024)</p>
            </div>
            <div className="project">
                <ProjectCarousel images={[avatarPhoto, avatar]} alt="AVATAR teleoperation" link="https://github.com/ohheemin/AVATAR" />
                <a href="https://github.com/ohheemin/AVATAR" target="_blank" rel="noreferrer"><h2>Teleoperation Based on Human-pose Estimation</h2></a>
                <p>Real-time robot-arm teleoperation that maps camera-based human pose estimation (MediaPipe + Intel RealSense) to manipulator joint angles through ROS2 and MoveIt2.</p>
            </div>
            <div className="project">
                <ProjectCarousel images={[patent]} alt="Right-turn traffic signal patent" link={DOI} />
                <a href={DOI} target="_blank" rel="noreferrer"><h2>Right-Turn Traffic Signal (Patent)</h2></a>
                <p>Co-inventor of registered patent KR 10-2765947 — a right-turn intersection accident-prevention system. Led algorithm development and hardware prototyping. (2021)</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
