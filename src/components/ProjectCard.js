import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}  alt="Images"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={link}>{link}</a>
        </div>
      </div>
    </Col>
  )
}
