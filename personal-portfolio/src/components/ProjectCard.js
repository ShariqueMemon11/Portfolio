import { Col } from "react-bootstrap"

export const ProjectCard = ({title , discription , imgUrl}) => {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{discription}</span>
                </div>
            </div>
        </Col>
    )
}