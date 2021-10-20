import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="border rounded  m-5 text-start p-3" style={{ backgroundColor: 'salmon' }}>
                <h1 className="bg-primary my-3 text-center p-2 rounded">Quality and Policy</h1>
                <p className="text-center">The quality of laboratory tests at Unicorn Healthcare Diagnostic Centre is ensured at every steps from sample collection to testing, from diagnosis to reporting.</p>
                <h3>Sample Collection</h3>
                <p>Unicorn Healthcare Centers have 2 separate sample collection booths for male and female. The samples for laboratory tests are collected by our experienced phlebotomists who are educated adequately for collection of pathological samples following standardized procedures. To wear Lab Coats is a must while working in sample collection booths. They must use sterile and disposable gloves during collection of samples. Unicorn Healthcare uses high quality disposable Vacuettes imported from the USA and disposable syringes for blood sample collection, storage and transport to the labs.</p>
                <h3>Waste Disposal</h3>
                <p>
                    We strictly follow internationally acceptable and nationally instructed guidelines for laboratory waste disposal. There are different covered & colored bins for specific types of pathological wastes.</p>

                <h3>Internal Quality Control</h3>
                <p>Every lab has its own Internal Quality Control System to validate tests being done. The respective consultants ensure that the test-results are without aberrations, and do repeat test if deemed necessary. There is provision for incorporating addresses and contact telephone numbers of the patients so that if a consultant of any laboratory finds any sample to be not suitable or test result to be unusual, s/he manages to contact with the patient, rearranges sampling and takes history of the illness for the purpose of validating test result or re-testing the sample.</p>

                <h3>External Quality Control</h3>
                <p>Unicorn Healthcare partners with world famous lab quality control organization BIORAD of the USA through its Indian subsidiary for an external quality control program for biochemistry tests.</p>

                <h3> Medical Laboratory Scientists</h3>
                <p> Our consultants are the country's leading medical laboratory scientists. They run the lab following internationally acceptable standard operating systems.</p>
                <h3>Bio-Medical Engineering Department</h3>
                <p>A well-equipped bio-medical engineering department headed by an experienced and skillful Biomedical Engineer and other technical staff to ensure smooth running of the machineries and instruments.</p>
            </div>
            <div className=" border rounded m-5 p-3" style={{ backgroundColor: "salmon" }}>
                <h1 className="bg-primary rounded-pill mx-4 p-3">Mission an Vision</h1>
                <div className="d-flex justify-content-around ">
                    <div className="border border-2 rounded-pill border-secondary p-3 m-3 bg-primary">
                        <h3>
                            Vision
                        </h3>
                        <p>To be on a planet devoid of the distressed and the diseased;<br />
                            To be at the level where help is sought to save lives;
                            To be an institution that rises above pettiness to help humanity;
                        </p>
                    </div>
                    <div className="border border-2 rounded-pill border-secondary p-3 m-3 bg-primary">
                        <h3>
                            Mision
                        </h3>
                        <p>
                            To become the most trusted premier institution serving the sufferings of humanity and people’s welfare oriented activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;