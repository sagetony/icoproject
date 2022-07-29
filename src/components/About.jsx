import { Col, Container, Row } from "react-bootstrap"

export const About = () => {
    return (
        <section class="about style-4">
            <Container>
            <Row>
            <Col>
                <div class="block-text center">
                    <h3 class="title">What is Sage Token?</h3>
                    <p class="fs-17 mt-16">
                        The world first platform to reward investors and traders build
                        on ICO.
                    </p>
                </div>
            </Col>
            </Row>
            <Row>
                <Col xl={4} md={4} sm={12}>
                    <div className="choose__box">
                        <div className="choose__box-icon center">
                          
                            <div className="content">
                            <a href="#" className="h5">Sercure Storage</a>
                            <p className="fs-17 mt-5">
                                The platform helps investors to make easy to purchase and
                                sell their tokens
                            </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={4} md={4} sm={12}>
                         <div className="choose__box">
                            <div className="choose__box-icon center">
                                
                                <div className="content">
                                <a href="#" className="h5">Investment Projects</a>
                                <p className="fs-17 mt-5">
                                    The platform helps investors to make easy to purchase and
                                    sell their tokens
                                </p>
                                </div>
                            </div>
                        </div>
                </Col>
                <Col xl={4} md={4} sm={12}>
                        <div class="choose__box">
                        <div class="choose__box-icon center">
                                
                            <div class="content">
                            <a href="#" class="h5">Credit Card Use</a>
                            <p class="fs-17 mt-5">
                                The platform helps investors to make easy to purchase and
                                sell their tokens.
                            </p>
                            </div>
                        </div>
                        </div>
                </Col>
            </Row>
                
           </Container>
        </section>
    )
}