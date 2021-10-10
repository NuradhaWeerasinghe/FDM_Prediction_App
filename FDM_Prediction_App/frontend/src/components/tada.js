import React, { useState, useEffect } from "react";
    import axios from "axios";
    import {Bar,Pie} from "react-chartjs-2";

    export default function ChartByProfessionCategory() {

        //category A
        const [Ch11, setCh11] = useState(0);
        const [Ch12, setCh12] = useState(0);
        const [Ch13, setCh13] = useState(0);
        const [Ch14, setCh14] = useState(0);
        const [Ch15, setCh15] = useState(0);
        const [Ch16, setCh16] = useState(0);
        const [Ch17, setCh17] = useState(0);
        const [Ch18, setCh18] = useState(0);


        const [Camp11, setCamp11] = useState(0);
        const [Camp12, setCamp12] = useState(0);
        const [Camp13, setCamp13] = useState(0);
        const [Camp14, setCamp14] = useState(0);
        const [Camp21, setCamp21] = useState(0);
        const [Camp22, setCamp22] = useState(0);
        const [Camp23, setCamp23] = useState(0);
        const [Camp24, setCamp24] = useState(0);
        const [Camp31, setCamp31] = useState(0);
        const [Camp32, setCamp32] = useState(0);
        const [Camp33, setCamp33] = useState(0);
        const [Camp34, setCamp34] = useState(0);
        const [Camp42, setCamp42] = useState(0);
        const [Camp43, setCamp43] = useState(0);
        const [Camp44, setCamp44] = useState(0);
        const [Camp51, setCamp51] = useState(0);
        const [Camp52, setCamp52] = useState(0);
        const [Camp53, setCamp53] = useState(0);
        const [Camp54, setCamp54] = useState(0);
        const [Camp41, setCamp41] = useState(0);


        const [Edu11, setEdu11] = useState(0);
        const [Edu12, setEdu12] = useState(0);
        const [Edu13, setEdu13] = useState(0);
        const [Edu14, setEdu14] = useState(0);
        const [Edu21, setEdu21] = useState(0);
        const [Edu22, setEdu22] = useState(0);
        const [Edu23, setEdu23] = useState(0);
        const [Edu24, setEdu24] = useState(0);
        const [Edu31, setEdu31] = useState(0);
        const [Edu32, setEdu32] = useState(0);
        const [Edu33, setEdu33] = useState(0);
        const [Edu34, setEdu34] = useState(0);
        const [Edu41, setEdu41] = useState(0);
        const [Edu42, setEdu42] = useState(0);
        const [Edu43, setEdu43] = useState(0);
        const [Edu44, setEdu44] = useState(0);
        const [Edu51, setEdu51] = useState(0);
        const [Edu52, setEdu52] = useState(0);
        const [Edu53, setEdu53] = useState(0);
        const [Edu54, setEdu54] = useState(0);


        const [Spd11, setSpd11] = useState(0);
        const [Spd12, setSpd12] = useState(0);
        const [Spd13, setSpd13] = useState(0);
        const [Spd14, setSpd14] = useState(0);
        const [Spd21, setSpd21] = useState(0);
        const [Spd22, setSpd22] = useState(0);
        const [Spd23, setSpd23] = useState(0);
        const [Spd24, setSpd24] = useState(0);
        const [Spd31, setSpd31] = useState(0);
        const [Spd32, setSpd32] = useState(0);
        const [Spd33, setSpd33] = useState(0);
        const [Spd34, setSpd34] = useState(0);
        const [Spd41, setSpd41] = useState(0);
        const [Spd42, setSpd42] = useState(0);
        const [Spd43, setSpd43] = useState(0);
        const [Spd44, setSpd44] = useState(0);


        const [Pch11, setPch11] = useState(0);
        const [Pch12, setPch12] = useState(0);
        const [Pch13, setPch13] = useState(0);
        const [Pch14, setPch14] = useState(0);
        const [Pch21, setPch21] = useState(0);
        const [Pch22, setPch22] = useState(0);
        const [Pch23, setPch23] = useState(0);
        const [Pch24, setPch24] = useState(0);
        const [Pch31, setPch31] = useState(0);
        const [Pch32, setPch32] = useState(0);
        const [Pch33, setPch33] = useState(0);
        const [Pch34, setPch34] = useState(0);
        const [Pch41, setPch41] = useState(0);
        const [Pch42, setPch42] = useState(0);
        const [Pch43, setPch43] = useState(0);
        const [Pch44, setPch44] = useState(0);
    
    
        useEffect(() => {

            axios.get("http://localhost:8000/customers").then((res) => {
                console.log(res.data);

                //marital
                let c1 = 0;
                let c2 = 0;
                let c3 = 0;
                let c4 = 0;
                let c5 = 0;
                let c6 = 0;
                let c7 = 0;
                let c8 = 0;

                let campCount11 = 0;
                let campCount12 = 0;
                let campCount13 = 0;
                let campCount14 = 0;
                let campCount15 = 0;
                let campCount21 = 0;
                let campCount22 = 0;
                let campCount23 = 0;
                let campCount24 = 0;
                let campCount25 = 0;
                let campCount31 = 0;
                let campCount32 = 0;
                let campCount33 = 0;
                let campCount34 = 0;
                let campCount35 = 0;
                let campCount41 = 0;
                let campCount42 = 0;
                let campCount43 = 0;
                let campCount44 = 0;
                let campCount45 = 0;


                let eduCount11 = 0;
                let eduCount12 = 0;
                let eduCount13 = 0;
                let eduCount14 = 0;
                let eduCount15 = 0;
                let eduCount21 = 0;
                let eduCount22 = 0;
                let eduCount23 = 0;
                let eduCount24 = 0;
                let eduCount25 = 0;
                let eduCount31 = 0;
                let eduCount32 = 0;
                let eduCount33 = 0;
                let eduCount34 = 0;
                let eduCount35 = 0;
                let eduCount41 = 0;
                let eduCount42 = 0;
                let eduCount43 = 0;
                let eduCount44 = 0;
                let eduCount45 = 0; 


                let spendCount11 = 0;
                let spendCount12 = 0;
                let spendCount13 = 0;
                let spendCount14 = 0;
                let spendCount15 = 0;
                let spendCount21 = 0;
                let spendCount22 = 0;
                let spendCount23 = 0;
                let spendCount24 = 0;
                let spendCount25 = 0;
                let spendCount31 = 0;
                let spendCount32 = 0;
                let spendCount33 = 0;
                let spendCount34 = 0;
                let spendCount35 = 0;
                let spendCount41 = 0;


                let purchaseCount11 = 0;
                let purchaseCount12 = 0;
                let purchaseCount13 = 0;
                let purchaseCount14 = 0;
                let purchaseCount15 = 0;
                let purchaseCount21 = 0;
                let purchaseCount22 = 0;
                let purchaseCount23 = 0;
                let purchaseCount24 = 0;
                let purchaseCount25 = 0;
                let purchaseCount31 = 0;
                let purchaseCount32 = 0;
                let purchaseCount33 = 0;
                let purchaseCount34 = 0;
                let purchaseCount35 = 0;
                let purchaseCount41 = 0;
               
               //marital
                
                res.data.existingCustomers.forEach((singleUser) => {
                    if (singleUser.Marital_Status.localeCompare("0") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCh11(++c5)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCh12(++c6)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCh13(++c7)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCh14(++c8)
                        }
                   
                    }
                    if (singleUser.Marital_Status.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCh15(++c1)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCh16(++c2)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCh17(++c3)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCh18(++c4)
                        }
                  

                    }
                


                           //camp
            
                    if (singleUser.AcceptedCmp1.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCamp11(++campCount11)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCamp12(++campCount12)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCamp13(++campCount13)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCamp14(++campCount14)
                        }
                   
                    }
                    if (singleUser.AcceptedCmp2.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCamp21(++campCount21)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCamp22(++campCount22)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCamp23(++campCount23)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCamp24(++campCount24)
                        }
                  

                    }
                    if (singleUser.AcceptedCmp3.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCamp31(++campCount25)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCamp32(++campCount31)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCamp33(++campCount32)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCamp34(++campCount33)
                        }
                  

                    }
                    if (singleUser.AcceptedCmp4.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCamp41(++campCount34)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCamp42(++campCount35)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCamp43(++campCount41)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCamp44(++campCount42)
                        }
                  

                    }
                    if (singleUser.AcceptedCmp5.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setCamp51(++campCount43)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setCamp52(++campCount44)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setCamp53(++campCount45)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setCamp54(++campCount15)
                        }
                  

                    }

                    //education

                    if (singleUser.Education1.localeCompare("0") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setEdu11(++eduCount11)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setEdu12(++eduCount12)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setEdu13(++eduCount13)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setEdu14(++eduCount14)
                        }
                   
                    }
                    if (singleUser.Education1.localeCompare("1") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setEdu21(++eduCount15)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setEdu22(++eduCount21)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setEdu23(++eduCount22)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setEdu24(++eduCount23)
                        }
                  

                    }
                    if (singleUser.Education1.localeCompare("2") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setEdu31(++eduCount24)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setEdu32(++eduCount25)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setEdu33(++eduCount31)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setEdu34(++eduCount32)
                        }
                  

                    }
                    if (singleUser.Education1.localeCompare("3") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setEdu41(++eduCount33)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setEdu42(++eduCount34)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setEdu43(++eduCount35)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setEdu44(++eduCount41)
                        }
                  

                    }
                    if (singleUser.Education1.localeCompare("4") == 0) {
                        if (singleUser.Clusters_1.localeCompare("0") == 0) {
                            setEdu51(++eduCount42)
                        }
                        if (singleUser.Clusters_1.localeCompare("1") == 0) {
                            setEdu52(++eduCount43)
                        }
                        if (singleUser.Clusters_1.localeCompare("2") == 0) {
                            setEdu53(++eduCount44)
                        }
                        if (singleUser.Clusters_1.localeCompare("3") == 0) {
                            setEdu54(++eduCount45)
                        }
                  

                    }
                        //spending
                        if (singleUser.Total_Spending_c.localeCompare("1") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setSpd11(++spendCount11)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setSpd12(++spendCount12)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setSpd13(++spendCount13)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setSpd14(++spendCount14)
                            }
                      
    
                        }
                        if (singleUser.Total_Spending_c.localeCompare("2") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setSpd21(++spendCount15)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setSpd22(++spendCount21)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setSpd23(++spendCount22)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setSpd24(++spendCount23)
                            }
                      
    
                        }
                        if (singleUser.Total_Spending_c.localeCompare("3") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setSpd31(++spendCount24)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setSpd32(++spendCount25)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setSpd33(++spendCount31)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setSpd34(++spendCount32)
                            }
                      
    
                        }
                        if (singleUser.Total_Spending_c.localeCompare("4") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setSpd41(++spendCount33)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setSpd42(++spendCount34)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setSpd43(++spendCount35)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setSpd44(++spendCount41)
                            }
                      
    
                        }   
                        
                        //purchase

                        if (singleUser.Total_Purchases_c.localeCompare("0") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setPch11(++purchaseCount11)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setPch12(++purchaseCount12)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setPch13(++purchaseCount13)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setPch14(++purchaseCount14)
                            }
                      
    
                        }
                        if (singleUser.Total_Purchases_c.localeCompare("1") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setPch21(++purchaseCount15)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setPch22(++purchaseCount21)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setPch23(++purchaseCount22)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setPch24(++purchaseCount23)
                            }
                      
    
                        }
                        if (singleUser.Total_Purchases_c.localeCompare("2") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setPch31(++purchaseCount24)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setPch32(++purchaseCount25)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setPch33(++purchaseCount31)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setPch34(++purchaseCount32)
                            }
                      
    
                        }
                        if (singleUser.Total_Purchases_c.localeCompare("3") == 0) {
                            if (singleUser.Clusters_1.localeCompare("0") == 0) {
                                setPch41(++purchaseCount33)
                            }
                            if (singleUser.Clusters_1.localeCompare("1") == 0) {
                                setPch42(++purchaseCount34)
                            }
                            if (singleUser.Clusters_1.localeCompare("2") == 0) {
                                setPch43(++purchaseCount35)
                            }
                            if (singleUser.Clusters_1.localeCompare("3") == 0) {
                                setPch44(++purchaseCount41)
                            }
                      
    
                        } 
                        

                })
            })

        }, [])

        //Categoty A by Education1 Bar Chart

        const chart_1 = (
            <Bar
                data={{
                    labels: ['0','1','2','3'],
                    datasets: [
                        {
                            data: [Ch11, Ch12,Ch13,Ch14],
                            backgroundColor: "rgba(25,181,254,1)"
                            ,
                            label: "SINGLE",
                        },
                        {
                            label: "MARRIED",
                            data:[Ch15, Ch16,Ch17,Ch18],
                            backgroundColor: "#ffbb11",
                        },
                    ],
                }}
                options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Marital Status",
                        fontSize:32
                      },
                    }}
            />
        );

        const chart_2 = (
            <Bar
                data={{
                    labels: ['0','1','2','3'],
                    datasets: [
                        {
                            data: [Camp11,Camp12,Camp13,Camp14],
                            backgroundColor: "rgba(25,181,254,1)",
                            label: "CAMP1",
                        },
                        {
                            label: "CAMP2",
                            data:[Camp21,Camp22,Camp23,Camp24],
                            backgroundColor: "#ffbb11",
                        },
                        {
                            label: "CAMP3",
                            data:[Camp31,Camp32,Camp33,Camp34],
                            backgroundColor: "rgba(0, 234, 7, 2)",
                        },
                        {
                            label: "CAMP4",
                            data:[Camp41,Camp42,Camp43,Camp44],
                            backgroundColor: "rgba(200, 24, 79, 2)",
                        },
                        {
                            label: "CAMP5",
                            data:[Camp51,Camp52,Camp53,Camp54],
                            backgroundColor: "rgba(260, 24, 300, 2)",
                        }
                    ],
                }}
                options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Accepted campaign",
                        fontSize:32
                      },
                    }}
            />
        );


        const chart_3 = (
            <Bar
                data={{
                    labels: ['0','1','2','3'],
                    datasets: [
                        {
                            data: [Edu11,Edu12,Edu13,Edu14],
                            backgroundColor: "rgba(25,181,254,1)",
                            label: "Graduate",
                        },
                        {
                            label: "2n Cycle",
                            data:[Edu21,Edu22,Edu23,Edu24],
                            backgroundColor: "#ffbb11",
                        },
                        {
                            label: "Basic",
                            data:[Edu31,Edu32,Edu33,Edu34],
                            backgroundColor: "rgba(0, 234, 7, 2)",
                        },
                        {
                            label: "Master",
                            data:[Edu41,Edu42,Edu43,Edu44],
                            backgroundColor: "rgba(200, 24, 79, 2)",
                        },
                        {
                            label: "PHD",
                            data:[Edu51,Edu52,Edu53,Edu54],
                            backgroundColor: "rgba(260, 24, 300, 2)",
                        }
                    ],
                }}
                options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Education level",
                        fontSize:32
                      },
                    }}
            />
        );


        const chart_4 = (
            <Bar
                data={{
                    labels: ['0','1','2','3'],
                    datasets: [
                        {
                            data: [Spd11,Spd12,Spd13,Spd14],
                            backgroundColor: "rgba(25,181,254,1)",
                            label: "Low",
                        },
                        {
                            label: "Low Mid",
                            data:[Spd21,Spd22,Spd23,Spd24],
                            backgroundColor: "#ffbb11",
                        },
                        {
                            label: "Mid",
                            data:[Spd31,Spd32,Spd33,Spd34],
                            backgroundColor: "rgba(0, 234, 7, 2)",
                        },
                        {
                            label: "High",
                            data:[Spd41,Spd42,Spd43,Spd44],
                            backgroundColor: "rgba(200, 24, 79, 2)",
                        }
                    ],
                }}
                options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Total Spendings",
                        fontSize:32
                      },
                    }}
            />
        );
    
        const chart_5 = (
            <Bar
                data={{
                    labels: ['0','1','2','3'],
                    datasets: [
                        {
                            data: [Pch11,Pch12,Pch13,Pch14],
                            backgroundColor: "rgba(25,181,254,1)",
                            label: "Low",
                        },
                        {
                            label: "Low Mid",
                            data:[Pch21,Pch22,Pch23,Pch24],
                            backgroundColor: "#ffbb11",
                        },
                        {
                            label: "Mid",
                            data:[Pch31,Pch32,Pch33,Pch34],
                            backgroundColor: "rgba(0, 234, 7, 2)",
                        },
                        {
                            label: "High",
                            data:[Pch41,Pch42,Pch43,Pch44],
                            backgroundColor: "rgba(200, 24, 79, 2)",
                        }
                    ],
                }}
                options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Total Purchases",
                        fontSize:32
                      },
                    }}
            />
        );


        return (
            <div className="container mt-5">
                <div className="card boderRadiusCards">
                    <div className="card-body">
                        <div>
                            <h5 className="text-center">Category By Education1 Oveview</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-5"><h3>Category A By Education1</h3> <hr />{chart_1}</div>
                            <div className="col-md-6 p-5"><h3>Category A By Education1</h3> <hr />{chart_2}</div>
                            <div className="col-md-6 p-5"><h3>Category A By Education1</h3> <hr />{chart_3}</div>
                            <div className="col-md-6 p-5"><h3>Category A By Education1</h3> <hr />{chart_4}</div>
                            <div className="col-md-6 p-5"><h3>Category A By Education1</h3> <hr />{chart_5}</div>


                            <div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
                    )
    }