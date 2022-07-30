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
          const [amount, setAmount] = useState(0)
        const [userAddress, setUserAddress] = useState("");
        // const [symbol, setSymbol] = useState("HRV")
        useEffect(() => {
            const setup = async () => {
                try {
                    const handler = await init()

                    // const userAddress = await handler.getSignerAddress()
                    const contract = await handler.getContract("Token (ERC20)")
                    // const contractERC = await handler.getContract("Token (ERC20)")
                    const symbol = await contract.totalSupply()
                    setContract(contract)
                   
                } catch (error) {
                    console.error(error)
                }
            }

            setup()
        }, [])
        const handleChange = (e) => setAmount(e.target.value)
        const handleWallet = (e) => setUserAddress(e.target.value)

        const submit = async (e) => {
        
           await contract.transfer(userAddress, amount);
             setAmount(e.target.value)
            setUserAddress(e.target.userAddress)
            console.log(userAddress, amount)

            alert(`Successfully transferred ${amount} to ${userAddress}🎉`)
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
              <input className ="banner-button2" value= {amount} onChange={handleChange} placeholder="Amount of token"></input>
              <input className ="banner-button3" value= {userAddress} onChange={handleWallet}placeholder="Enter Wallet Address"></input>
              <button className ="banner-button" onClick={submit}>Transfer Token<ArrowRightCircle size={25} /></button>
          </Col>
        </Row>
        <Row className="align-items-center">
          
          <Col xs={12} md={12} xl={12}>
              <div className="banner-top__sale">
                        <Row>
                            <Col xl={12} md={12} xs={12}>
                                 <div className="block-text">
                                    <h3 className="heading">10000000000 SAG has be minted!</h3>
                                    <p className="fs-17">We plan on carry out an ICO in the next few months you can transfer SAG tokens from our platform. ICO will be carried out next month.</p>
                                </div>
                            </Col>
                             {/* <Col xl={7} md={7} xs={12}>
                                <div className="sale-content">
                                    <span className="js-countdown" data-timer="2865550"><div aria-hidden="true" className="countdown__timer"><span class="countdown__item"><span className="countdown__value countdown__value--0 js-countdown__value--0">33</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">56</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">47</span></span></div></span>
                                </div>
                            </Col> */}
                        </Row>
                       
                       
                    </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}