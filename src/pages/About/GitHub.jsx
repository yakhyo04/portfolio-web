import React from 'react';
import './About.scss';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

const GitHub = () => {
    return (
        <Row style={{display:"flex",justifyContent: "center", paddingBottom: "50px"}}>
            <GitHubCalendar
                username='yakhyo04'
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
                />
        </Row>
    );
}

export default GitHub;
