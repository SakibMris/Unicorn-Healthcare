import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Unicorn Healthcare</h1>
                                <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.freepik.com/free-photo/scientist-putting-blood-sample-from-test-tube-with-micropipette-petri-dish-analysing-chemical-reaction_482257-487.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Pathology Laboratory</h5>
                                <p>Pathology tests cover blood tests, and tests on urine, stools (faeces) and bodily tissues. A pathologist interprets the results of blood and pathology tests and looks for abnormalities that may point to disease, such as cancer and other chronic illnesses, or health risks, such as pre-diabetes.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Specialized Doctors</h5>
                                <p>Medical specialists are experts in certain fields of medicine. They either treat specific parts of the body, such as the back or the brain, or they specialize in certain diseases, such as cancer. Family doctors keep a list of local specialists and can help patients choose the right specialist for each medical issue.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <h1 className="my-5">Services Corner</h1>
            <div className="d-flex m-5 justify-content-around">
                <div>
                    <img className="" style={{ borderRadius: '10px 80px 10px 80px', boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} src="https://image.freepik.com/free-photo/laboratory-worker-coverall-suit-is-adjusting-microscope_1157-31351.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-success">
                        Best Laboratory <br />
                        Tests Available
                    </h1>
                    <h5 className="text-start text-primary">
                        ⦿Haematological Exam <br />
                        ⦿Biochemical Exam <br />
                        ⦿Elisa Method Hepatitis (Panel) <br />
                        ⦿HIV TEST <br />
                        ⦿Hormone Test <br />
                        ⦿Immunology / Serology <br />
                        ⦿CBC <br />
                        ⦿Serum <br />
                        ⦿COVID-19 <br />
                    </h5>
                </div>
            </div>
            <div>
                <div className="mx-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://img.freepik.com/free-photo/young-woman-doctor-is-looking-xray_144627-15592.jpg?size=338&ext=jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Radiology Services</h5>
                                    <p class="card-text">Radiology is the area of medicine that uses X-rays, magnetic waves and ultrasound to obtain detailed images of the inside of the body. Doctors can then use those images to detect and diagnose illnesses and injuries, as well as to help develop treatment plans.
                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://image.freepik.com/free-photo/portrait-doctor_144627-39390.jpg" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Specialized Doctors</h5>
                                    <p class="card-text">Medical specialists are experts in certain fields of medicine. They either treat specific parts of the body, such as the back or the brain, or they specialize in certain diseases, such as cancer. Family doctors keep a list of local specialists and can help patients choose the right specialist for each medical issue.
                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://image.freepik.com/free-photo/british-ambulance-parked-parking-lot_53876-63437.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Emmergency Ambulence Service</h5>
                                    <p class="card-text">The ambulance service is the emergency response wing of the National Health Service (NHS). The ambulance service has two main functions: an accident and emergency paramedical function, and the Patient Transport Service function which transfers immobile patients to and from their hospital appointments.

                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
