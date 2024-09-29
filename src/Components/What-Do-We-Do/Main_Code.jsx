import React from 'react';
import hospitalImg1 from "./1.svg";
import hospitalImg2 from "./2.svg";
import hospitalImg3 from "./3.svg";
import hospitalImg4 from "./4.svg";
import hospitalImg5 from "./5.svg";
import hospitalImg6 from "./6.svg";


import './Main_Code.css';
const Main_Code = () => {
    return (
        <div className="big-container">
            {/* Odd card */}
            <div className="container odd-card">
                <div className="text-section">
                    <h1 className="hospital-heading">Hospital+</h1>
                    <h2 className="sub-heading">Automating Hospitals Operations</h2>
                    <p className="description">
                        Automate your hospital’s operations with Medoc Health and focus on the critical works 
                        as we do the heavy-lifting from your reception to discharge, with Staff, Finance, 
                        Inventory all taken care of very well.
                    </p>
                </div>
                <div className="image-section">
                    <img
                        src={hospitalImg1}
                        alt="Hospital Illustration"
                        className="hospital-image"
                    />
                </div>
            </div>

            {/* Even card */}
            <div className="container even-card">
                <div className="image-section">
                    <img
                        src={hospitalImg2}
                        alt="Hospital Illustration"
                        className="hospital-image"
                    />
                </div>
                <div className="text-section">
                    <h1 className="hospital-heading">Hospital+</h1>
                    <h2 className="sub-heading">Helping Hospitals Save Their Time & Money</h2>
                    <p className="description">
                        We focus on only three things for a hospital - Saving a lot of Money, Generating Additional Revenues and Saving Time with our automation and AI services.
                    </p>
                </div>
            </div>

            {/* Odd card */}
            <div className="container odd-card">
                <div className="text-section">
                    <h1 className="hospital-heading">Hospital+</h1>
                    <h2 className="sub-heading">Powered by Secure AI Systems</h2>
                    <p className="description">
                        Intelligent systems which earn as you work to give the patient the best possible experience. Built to ease and collaborate with healthcare professionals with 0 technical experience for their convenience.
                    </p>
                </div>
                <div className="image-section">
                    <img
                        src={hospitalImg3}
                        alt="Hospital Illustration"
                        className="hospital-image"
                    />
                </div>
            </div>

            {/* Even card */}
            <div className="container even-card">
                <div className="image-section">
                    <img
                        src={hospitalImg4}
                        alt="Hospital Illustration"
                        className="hospital-image"
                    />
                </div>
                <div className="text-section">
                    <h1 className="hospital-heading">Hospital+</h1>
                    <h2 className="sub-heading">Enhancing Health & Wellness of Patients</h2>
                    <p className="description">
                        Our end user application encourages our patients to stay healthier and connected to their wellness with our regular infographic posting along with healthcare tracking. Everything for your health and wellness in one place.
                    </p>
                </div>
            </div>

            {/* Odd card */}
            <div className="container odd-card">
                <div className="text-section">
                    <h1 className="hospital-heading">Hospital+</h1>
                    <h2 className="sub-heading">Reducing Negligence & Enhancing Outcomes</h2>
                    <p className="description">
                        Medoc, with its automations and artificial intelligence, reduces human errors and negligence of any form and enhances patient outcomes significantly with data-driven decisions for healthcare professionals.
                    </p>
                </div>
                <div className="image-section">
                    <img
                        src={hospitalImg5}
                        alt="Hospital Illustration"
                        className="hospital-image"
                    />
                </div>
            </div>

            {/* Even card */}
            <div className="container even-card">
                <div className="image-section">
                    <img
                        src={hospitalImg6}
                        alt="Hospital Illustration"
                       className="max-w-[353px] w-full object-contain"
                    />
                </div>
                <div className="text-section">
                    <h1 className="hospital-heading">Hospital+</h1>
                    <h2 className="sub-heading">Ease of Medical Financing</h2>
                    <p className="description">
                        Stay connected with your loved ones and ensure they’re perfectly healthy at all times. Get the best out of Medoc with your entire family on the ecosystem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main_Code;
