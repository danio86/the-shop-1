import React, {useEffect, useList} from 'react'
import { Container, Row, Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import {useNavigate, NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import CustomButton from '../components/common/CustomButton';
import PropertyCard from '../components/common/PropertyCard';
import styles from '../styles/Properties.module.css';


const Properties = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        content,
        image,
        updated_at,
        postPage,
        setPosts,
      } = props;

    const history = useHistory();
    const handleClick = (event) => {
            let path = "/property/create"; 
            history.push(path);   
      };

  return (
    // <Container className={styles.Properties}>
    //     <div>Properties!</div>
    //     <div>
    //     <CustomButton
    //         title= {'Add Properties'}
    //         onClick={handleClick}
    //         icon= {<i class="fas fa-plus-circle"></i>}
    //     />
    //     </div>
    // </Container>,
    <Row>
    <Container className={styles.Properties}>
        <div>Properties test</div>
    <button
        className={styles.AddProp}
        onClick={handleClick}>
            <i class="fas fa-plus-circle"><p>Add Properties</p></i>
    </button>
    </Container>

    <Container>
        <Card className={styles.Properties}>
        <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/`}>
            test
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {/* <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown //importierted Moredropdown von components
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )} */}
            {/* check if the currently logged in user is the owner,
            and if the postPage prop exists, if so, then we know we
            want to display the edit and delete options for our user */}
            {/* postPage wurde von der destructurierung bzw. Mutter-comp
            übergeben */}
            {/* was wir dann machen (edid, delete) wird erstmal offen gelassen(...) */}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/`}> test2
        <Card.Img src={image} alt={title} />
        {/* pass the card image component */}
      </Link>


      <Card.Body>
        {title && <Card.Title className="text-center">title</Card.Title>}
        {content && <Card.Text>content</Card.Text>}
        {/* We'll check if the title and content props have been passed 
        before we render the respective Bootstrap components. */}
        <div >
        
          {likes_count}
          <Link to={`/`}>test3
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>

        </Card>
    </Container>
    </Row>
  )
}

export default Properties