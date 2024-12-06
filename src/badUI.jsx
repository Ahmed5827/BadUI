import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import App from './App'

function BadUi() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item as active
  const [sponsorVisible, setsponsorVisible] = useState(false);
  const [SeeMore, setSeeMore] = useState(false);
  const [Total, setTotal] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through indices 0, 1, 2
    }, 100); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Délosé 💀</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => {
                alert(
                  "welcome to this website here we can shop at best prices !"
                );
              }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                if (confirm(`Your Total is ${Total} DT`)) {
                  alert("Thank you for your purchase");
                  setTotal(0); // Reset Total to 0
                } else {
                  alert("Erreur de paiement");
                }
              }}
            >
              Shopping
            </Nav.Link>
            <Nav.Link href="#Fast Food">Fast Food</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("Pizza cost 10DT Add to card ?")
                  ? setTotal(Total + 10)
                  : {}
              }
            >
              Pizza
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("Burger cost 10DT Add to card ?")
                  ? setTotal(Total + 10)
                  : {}
              }
            >
              Burger
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("Cooked Spagetti cost 10DT Add to card ?")
                  ? setTotal(Total + 10)
                  : {}
              }
            >
              Spagetti
            </Nav.Link>
            <Nav.Link href="#Vegetables">Vegtebeles</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("Peper cost 10DT Add to card ?")
                  ? setTotal(Total + 10)
                  : {}
              }
            >
              Peper
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("Tomato cost 10DT Add to card ?")
                  ? setTotal(Total + 10)
                  : {}
              }
            >
              Tomato
            </Nav.Link>
            <Nav.Link href="#pricing">Cars</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("BMV M3 GTR cost 100000DT Add to card ?")
                  ? setTotal(Total + 100000)
                  : {}
              }
            >
              BMV
            </Nav.Link>
            <Nav.Link href="#pricing">cOurses</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("C programming language cost 27DT Add to card ?")
                  ? setTotal(Total + 27)
                  : {}
              }
            >
              C
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("Java programming language cost 47DT Add to card ?")
                  ? setTotal(Total + 47)
                  : {}
              }
            >
              Java
            </Nav.Link>
            <Nav.Link href="#pricing">Watches</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() =>
                confirm("C programming language cost 27000DT Add to card ?")
                  ? setTotal(Total + 27000)
                  : {}
              }
            >
              Rolex
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>Best seller items in the last 30 days!!! :</h1>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <img src="Messi.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <img src="Meme.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <img src="Cars.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
            <img src="Mirage.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <h1>Check out our new best seller :</h1>
          <div className="col">
            <i>
              <code>
                No problem! Here&apos;s the information about the Mercedes CLR
                GTR: The Mercedes CLR GTR is a remarkable racing car celebrated
                for its outstanding performance and sleek design. Powered by a
                potent 6.0-liter V12 engine, it delivers over 600 horsepower.
                Acceleration from 0 to 100 km/h takes approximately 3.7 seconds,
                with a remarkable top speed surprising 320 km/h.🥇Incorporatin
                adventure aerodynamic features and cutting-edge stability
                technologies, the CLR GTR ensures exceptional stability and
                control, particularly during high-speed maneuvers. 💨Originally
                priced at around $1.5 million, the Mercedes CLR GTR is
                considered one of the most exclusive and prestigious racing cars
                ever produced. 💰Its limited production run of just five units
                adds to its rarity, making it highly sought after by racing
                enthusiasts and collectors worldwide. 🌎&quot;
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    alert("Added to chart !");
                  }}
                >
                  Add it to my chart that may or may not contain other items
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    setSeeMore(!SeeMore);
                  }}
                >
                  See More
                </button>
              </code>
            </i>
          </div>
          <div className="col">
            <button className="btn btn-warning">
              {" "}
              <a href="Supermarket-Catalog.pdf" download>
                Download Catalog
              </a>
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSeeMore(!SeeMore);
              }}
            >
              {" "}
              See More
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                const name = prompt("What is your Issue?");

                if (name) {
                  alert(`Issue submited: ${name}!`);
                } else {
                  alert("You didn't submit >:(");
                }
              }}
            >
              {" "}
              Send Report to the developpers about a bug
            </button>
            <img
              src={"shop.jpg"}
              alt="Shopping is fun !!"
              className="d-block w-100"
            />
            {SeeMore && (
              <code>
                The Mercedes CLR GTR is an extraordinary example of engineering
                excellence and performance-driven design, marking a pinnacle in
                racing car history. Here&apos;s an in-depth look at this
                exceptional machine: 1. Powertrain & Performance At the heart of
                the Mercedes CLR GTR lies a 6.0-liter V12 engine that roars with
                more than 600 horsepower, a testament to Mercedes-Benz’s
                engineering prowess. This powerhouse enables the CLR GTR to
                achieve: 0–100 km/h in 3.7 seconds, providing blistering
                acceleration. A top speed of 320 km/h, placing it among the
                fastest racing cars of its era. The engine is not just about raw
                power; it&apos;s paired with a precision-tuned gearbox that
                ensures seamless power delivery, crucial for both straights and
                sharp turns on the race track. 2. Aerodynamics & Design The CLR
                GTR’s design is a fusion of aesthetics and functionality. Its
                low-slung profile and elongated bodywork are meticulously
                crafted to reduce drag and maximize downforce. Key aerodynamic
                features include: Large front splitters and rear spoilers,
                optimizing airflow for stability at high speeds. Advanced
                stability control technologies, enhancing handling during
                demanding maneuvers. A lightweight carbon fiber body, reducing
                weight while maintaining structural integrity. These innovations
                made it a formidable contender in racing, especially in
                endurance events where stability and efficiency are critical. 3.
                Exclusivity & Rarity With a limited production run of just five
                units, the CLR GTR is a true collector&apos;s dream. This
                exclusivity stems from its design purpose as a race-focused
                vehicle, with only a handful made to meet homologation
                requirements for the FIA GT Championship. Each unit was priced
                at around $1.5 million, reflecting its elite craftsmanship and
                cutting-edge technology. Its rarity has driven its value even
                higher in the collector’s market, with prices today often
                reaching many millions of dollars. 4. Historical Context The CLR
                GTR is part of the legendary Mercedes-Benz racing lineage. It
                was designed to compete in the late 1990s against fierce rivals
                like the Porsche 911 GT1 and McLaren F1 GTR. While its
                performance was stellar, it is also remembered for challenges it
                faced during the 1999 Le Mans 24 Hours, where aerodynamic
                instability at high speeds led to dramatic airborne incidents.
                5. Legacy Today, the Mercedes CLR GTR remains a symbol of
                innovation and exclusivity. Its rarity, combined with its
                stunning design and exceptional performance, has made it a
                centerpiece in automotive history. It continues to inspire
                modern supercar designs and remains a testament to
                Mercedes-Benz’s commitment to pushing the boundaries of
                automotive engineering. For enthusiasts and collectors, owning a
                CLR GTR is not just about having a car—it’s about possessing a
                piece of racing history, a testament to speed, luxury, and
                unparalleled craftsmanship. 🏎️✨
              </code>
            )}
          </div>
          <div className="row" style={{ margin: "auto" }}>
            <h1>
              <a
                onClick={() => {
                  setsponsorVisible(!sponsorVisible);
                }}
              >
                Our Sponsors
              </a>
            </h1>
            {sponsorVisible && (
              <ul>
                <li>ZENIKA</li>
                <figcaption>
                  Le lien entre le monde organique et le monde numérique Nous
                  accompagnons les entreprises dans leur transformation
                  numérique : Conseil, formation et réalisation IT
                </figcaption>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BadUi;
