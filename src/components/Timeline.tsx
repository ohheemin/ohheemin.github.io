import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2026 - present"
            iconStyle={{ background: '#5170ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern — Automotive Intelligence Lab</h3>
            <h4 className="vertical-timeline-element-subtitle">Hanyang University, Seoul</h4>
            <p>
              End-to-End Autonomous Driving, Perception Model Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 - Jun 2026"
            iconStyle={{ background: '#5170ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern — AI & Robotics Lab</h3>
            <h4 className="vertical-timeline-element-subtitle">Dongguk University, Seoul</h4>
            <p>
              Digital Twin, Mobile Robot, Manipulator Motion Planning, Real2Sim2Real
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - Nov 2025"
            iconStyle={{ background: '#5170ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Captain & Vision Team Lead — MACARON 7.0</h3>
            <h4 className="vertical-timeline-element-subtitle">Autonomous Mobility Competition Team, Dongguk University</h4>
            <p>
              Directed the vision team and developed LiDAR processing algorithms
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Nov 2024"
            iconStyle={{ background: '#5170ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Vision Team (SOOMAC 1.0) & Hardware Team (MACARON 6.0)</h3>
            <h4 className="vertical-timeline-element-subtitle">Robotics Competition Teams, Dongguk University</h4>
            <p>
              Vision-based object recognition for manipulation; ERP-42 autonomous vehicle hardware
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mar 2021 - present"
            iconStyle={{ background: '#5170ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. in Mechanical, Robotics and Energy Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Dongguk University, Seoul — GPA 3.94 / 4.5</h4>
            <p>
              Physical AI, Computer Vision, Manipulator Planning, Digital Twin, End2End Driving
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
