import { Container, Badge, Form } from "react-bootstrap"
import { useState } from "react"

const Home = () => {
    const [activity, setActivity] = useState("")
    const [type, setType] = useState("")
    const getData = async (url) => {
        let response = await fetch(url)
        return await response.json()
    }
    const handleFindActivity = async () => {
        let data = await getData("http://www.boredapi.com/api/activity/")
        setActivity(data.activity)
        setType(data.type)
    }
    return(
        <>
            <Container className="">
                <div style={{display: "grid", placeItems: "center"}}>
                    <h2 className="mt-4">Are you Bored?</h2>
                    <img src="/image/bored.jpg" style={{height: "75%"}} />
                    <h3>Let's finds something interesting to do.</h3>
                    <button onClick={handleFindActivity} className="btn btn-primary mt-2 mb-2">Find something interesting randomly</button>
                    <h4>{activity}</h4>
                    <h5><Badge bg="success">{type}</Badge></h5>
                </div>
            </Container>
        </>
    )
}

export default Home