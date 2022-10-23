import React, { Fragment, useEffect } from 'react'
import Records from "../data/ipldata.json"
import './trail.css'
import { useState } from 'react'
import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip, YAxis, CartesianGrid, Legend } from "recharts"
import { useNavigate } from "react-router-dom"
function Performance() {
    const navigate = useNavigate();
    const [data, Setdata] = useState(Records);
    const [allteam, setAllteam] = useState([]);
    const [performance, setperformance] = useState([{ season: 0, matches_won: 0 }])
    // Logic for finding out teams.....
    useEffect(() => {
        let teams = [];
        for (let i = 0; i < data.length; i++) {
            teams.push(data[i].team1);
            teams.push(data[i].team2);
        }
        let singleteam = [...new Set(teams)];
        // console.log(singleteam);
        setAllteam(singleteam);
        // console.log(allteam);
    }, [])
    // console.log(allteam);
    let pdata;
    const handlePerformance = () => {
        const team = document.getElementById("team").value;
        // console.log(team);
        pdata = [];                      
        for (let i = 2008; i <= 2017; i += 1) {
            let year = i;
            let count = 0;
            for (let j = 0; j < data.length; j++) {
                if (data[j].season == year && ((data[j].team1 == team) || (data[j].team2 == team))) {
                    if (data[j].winner == team) {
                        count++
                    }

                }
            }
            pdata.push({ season: i, matches_won: count })
        }
        setperformance(pdata)
        console.log(pdata)
    }
    return (
        <Fragment>
            <div id="perform-outer">

                <div id="perform-select">
                    <div id="perform-header">
                        <h1 className='headingtag'>Welcome to Team Analysis Page!!!</h1>
                    </div>
                    <div id="seperator">
                        <select id="team" onChange={handlePerformance}>
                            <span>Select your team </span>
                            {
                                allteam.map((value) => {
                                    return (
                                        <option>{value}</option>
                                    )
                                })
                            }
                        </select>
                        <button className='back' onClick={() => navigate('/')}>Back To Dashboard</button>
                    </div>
                </div>
                <div id="perform-graph">
                    <ResponsiveContainer width="100%" aspect={3.5}>
                        <LineChart data={performance} width={500} height={300} margin={{ top: 5, right: 300, left: 5, bottom: 5 }}>
                            <CartesianGrid />
                            <XAxis dataKey="season" interval={"preserveStartEnd"} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="matches_won" stroke="blue" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Fragment>
    )

}
export default Performance;