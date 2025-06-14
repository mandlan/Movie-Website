import { useEffect,useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import ReviewForm from "./reviewForm/ReviewForm";

const Reviews = ({getMoviedata,movie,reviews,setReviews}) => {

    const reviewText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMoviedata(movieId);
    },[])

    const addReview = async (e) => {
        e.preventDefault(); 
        const rev = reviewText.current;

        
        try {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId})
            
            const updateReviews = [...reviews,{body:rev.value}];
            rev.value="";
            setReviews(updateReviews);
        } catch (err) {
            console.log(err);
        }
    }
    return ( 
        <Container>
            <Row>
                <Col>
                <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                {
                    <>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} reviewText={reviewText} labeltext = "Write your Review"/>
                        </Col>
                    </Row>
                    <Row>
                                    <Col>
                                    <hr/>
                                    </Col>
                                </Row>
                    
                    </>
                }
                {
                    reviews?.map((r) => {
                        return (
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <hr/>
                                    </Col>
                                </Row>
                            </>
                        )
                    }
                    )
                }
                </Col>
            </Row>
            <Row>
                                    <Col>
                                    <hr/>
                                    </Col>
                                </Row>
        </Container> 
    )
}
    export default Reviews;