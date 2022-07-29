import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import bunzz from "bunzz-sdk"
import { useEffect, useState } from "react"
import env from "./apis/env.json"


// Set your keys
const DAPP_ID = env.REACT_APP_DAPP_ID
const API_KEY = env.REACT_APP_API_KEY

const init = async () => {
    const handler = await bunzz.initializeHandler({
        dappId: DAPP_ID,
        apiKey: API_KEY,
    })
    return handler
}

export const Banner = () => {
          const [contract, setContract] = useState()
        // const [value, setValue] = useState(0)
        const [userAddress, setUserAddress] = useState("")
        // const [symbol, setSymbol] = useState("HRV")
        useEffect(() => {
            const setup = async () => {
                try {
                    const handler = await init()

                    const userAddress = await handler.getSignerAddress()
                    const contract = await handler.getContract("Initial Coin Offering (ICO)")
                    const contractERC = await handler.getContract("Token (ERC20)")
                    // const symbol = await contractERC.symbol().rawdata
                    setUserAddress(userAddress)
                    setContract(contract)
                   

                } catch (error) {
                    console.error(error)
                }
            }

            setup()
        }, [])
        // const handleChange = (e) => setValue(e.target.value)

        const submit = async () => {
           await contract.buy();
            alert("Transaction was sent in success🎉")
        }
       
return (
    <section className="banner" id="home">
      <Container>
        <Row className = "banner-top">
          <Col xs={12} md={2} xl={2}>

          </Col>
          <Col xs={12} md={8} xl={8}>
              <h2>
                Join The Future Of Sage Crypto Trading Technology
              </h2>
               <p>
                Sage Token is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.
              </p>
              <button className ="banner-button" onClick={submit}>Buy Token Now<ArrowRightCircle size={25} /></button>
          </Col>
        </Row>
        <Row className="align-items-center">
          
          <Col xs={12} md={12} xl={12}>
              <div className="banner-top__sale">
                        <Row>
                            <Col xl={4} md={4} xs={12}>
                                 <div className="block-text">
                                    <h3 className="heading">50.000.000 SAG to be sold!</h3>
                                    <p className="fs-17">During Pre-Sale, get 5x tokens or 50.000 SAG per Ether. During regular sale, it will be 10.000 SAG per Ether.</p>
                                </div>
                            </Col>
                             <Col xl={7} md={7} xs={12}>
                                <div className="sale-content">
                                    <span className="js-countdown" data-timer="2865550"><div aria-hidden="true" className="countdown__timer"><span class="countdown__item"><span className="countdown__value countdown__value--0 js-countdown__value--0">33</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">56</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">47</span></span></div></span>
                                </div>
                            </Col>
                        </Row>
                       
                       
                    </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}