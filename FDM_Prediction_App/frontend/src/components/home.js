import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

export default function ChartByProfessionCategory() {

    //category A
    const [Marital_StatusCategoryA, setMarital_StatusCategoryA] = useState(0);
    const [engineerCategoryA, setEngineerCategoryA] = useState(0);
    const [healthcareCategoryA, setHealthcareCategoryA] = useState(0);
    const [lawyerCategoryA, setLawyerCategoryA] = useState(0);
    const [artistCategoryA, setArtistCategoryA] = useState(0);
    const [entertainmentCategoryA, setEntertainmentCategoryA] = useState(0);
    const [executiveCategoryA, setExecutiveCategoryA] = useState(0);
    const [homemakerCategoryA, setHomemakerCategoryA] = useState(0);
    const [marketingCategoryA, setMarketingCategoryA] = useState(0);

    

    useEffect(() => {

        axios.get("http://localhost:8000/customers").then((res) => {
            console.log(res.data);

            //category A
            let Marital_StatusCategoryA = 0;
            let engineerCountCategoryA = 0;
            let healthcareCountCategoryA = 0;
            let lawyerCountCategoryA = 0;
            let artistCountCategoryA = 0;
            let entertainmentCountCategoryA = 0;
            let executiveCountCategoryA = 0;
            let homemakerCountCategoryA = 0;
            let marketingCountCategoryA = 0;
            


            res.data.forEach((singleUser) => {
                if (singleUser.Marital_Status.localeCompare("1") == 0) {
                    if (singleUser.l1.localeCompare("1") == 0) {
                        setMarital_StatusCategoryA(++Marital_StatusCategoryA)
                    }
                }
                if (singleUser.Profession.localeCompare("Engineer") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setEngineerCategoryA(++engineerCountCategoryA)
                    }
                }


                if (singleUser.Profession.localeCompare("Healthcare") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setHealthcareCategoryA(++healthcareCountCategoryA)
                    }
                    }


                if (singleUser.Profession.localeCompare("Lawyer") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setLawyerCategoryA(++lawyerCountCategoryA)
                    }
                    }

                if (singleUser.Profession.localeCompare("Entertainment") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setArtistCategoryA(++artistCountCategoryA)
                    }
                    }
 
                if (singleUser.Profession.localeCompare("Artist") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setEntertainmentCategoryA(++entertainmentCountCategoryA)
                    }
                    }

                
                if (singleUser.Profession.localeCompare("Executive") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setExecutiveCategoryA(++executiveCountCategoryA)
                    }
                    }

                if (singleUser.Profession.localeCompare("Homemaker") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setHomemakerCategoryA(++homemakerCountCategoryA)
                    }
                    }


                if (singleUser.Profession.localeCompare("Marketing") == 0) {
                    if (singleUser.Segmentation.localeCompare("Customer Segmentation is :['A']") == 0) {
                        setMarketingCategoryA(++marketingCountCategoryA)
                    }
                    }
            })
        })

    }, [])

    //Categoty A by Profession Bar Chart

    const barChartCategoryA = (
        <Bar
            data={{
                labels: ['Doctor', 'Engineer','Healthcare','Lawyer','Artist','Entertainment','Executive','Homemaker','Marketing'],
                datasets: [
                    {
                        data: [Marital_StatusCategoryA, engineerCategoryA,healthcareCategoryA,lawyerCategoryA,artistCategoryA,entertainmentCategoryA,executiveCategoryA,homemakerCategoryA,marketingCategoryA],
                        backgroundColor: [
                            "#3da19c",
                            "#06adbf",
                            "#f7d619",
                            "#bf00c2",
                            "#ff2684",
                            "#3254a8",
                        ],
                        label: "Category A",
                    },
                ],
            }}
            options={{
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    },
                },

                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: true,
                                drawOnChartArea: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: true,
                                drawOnChartArea: false,
                            },
                        },
                    ],
                },
            }}
        />
    );

    return (
        <div className="container mt-5">
            <div className="card boderRadiusCards">
                <div className="card-body">
                    <div>
                        <h5 className="text-center">Category By Profession Oveview</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-5"><h3>Category A By Profession</h3> <hr />{barChartCategoryA}</div>
                        <div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
                )
}