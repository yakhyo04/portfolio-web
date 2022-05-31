import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { BiLinkExternal } from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import './Projects.scss';

const ProjectCard = (props) => {
    return (
        <Card className='project__card--view'>
            <Card.Body >
            <Card.Img className='project__img' variant='top' src={props.imgPath} alt="card-img" />
                <Card.Title className='project__title'>{props.title}</Card.Title>
                <Card.Text className='project__text' style={{textAlign: "justify"}}>
                    {props.description}
                </Card.Text>
                <br />
                <Button className='project__btn' variant='primary' href={props.link} target="_blank" >
                    <BiLinkExternal/> &nbsp;
                    {props.isBlog ? "View Blog" : "View Project"}
                </Button>
                <br />
                <br />
                <br />
                <Button className='project__btn' variant='primary' href={props.code} target="_blank">
                    <AiFillGithub/> &nbsp;
                    {props.isBlog ? "View Blog" : "View Code"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
