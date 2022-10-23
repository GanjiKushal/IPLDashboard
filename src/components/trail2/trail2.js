import React, { Fragment, useEffect } from 'react'
import Records from "../data/ipldata.json"
import { useState } from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer,LabelList } from 'recharts';
import {useNavigate} from "react-router-dom"
import "./trail2.css"
function TeamVTeam (){
    const navigate = useNavigate();
    const [data,Setdata]=useState(Records);
    const [allteam,setAllteam]=useState([]);
    const [show,setShow]=useState([ { name: 'Group A', value: 50},
    { name: 'Group B', value: 50 }])
    // Logic for finding out teams.....
        useEffect(()=>{
            let teams = [];
        for(let i=0;i<data.length;i++){
            teams.push(data[i].team1);
            teams.push(data[i].team2);
        }
        let singleteam = [...new Set(teams)];
        // console.log(singleteam);
        setAllteam(singleteam);
        // console.log(allteam);
        },[])
        // console.log(allteam);
        let battleData;
    const duobattle = ()=>{
        let team1=document.getElementById("team1").value;
        let team2=document.getElementById("team2").value;
        let totalplayed =0;
        let totalwon_team1 = 0;
        let totalwon_team2=0
        for(let i=0;i<data.length;i++){
            if(team1==data[i].team1 && team2==data[i].team2){
                totalplayed=totalplayed+1;
                if(data[i].winner == team1){
                    totalwon_team1=totalwon_team1+1;
                }
                else{
                    totalwon_team2=totalwon_team2+1;
                }
            }
            else if(team1==data[i].team2 && team2==data[i].team1){
                totalplayed=totalplayed+1;
                if(data[i].winner == team1){
                    totalwon_team1=totalwon_team1+1;
                }
                else{
                    totalwon_team2=totalwon_team2+1;
                }
            } 
            }
            let winning_percent_team1 = Math.round((totalwon_team1/totalplayed)*100);
            let winning_percent_team2 = 100-winning_percent_team1;
             battleData = [];
            battleData.push({name:team1,value:winning_percent_team1})
            battleData.push({name:team2,value:winning_percent_team2})
            // console.log(battleData)
            setShow(battleData);
            // console.log(`winning chances of ${team1} is ${winning_percent_team1}%`)
            // console.log(`winning chances of ${team2} is ${winning_percent_team2}%`)
    }
    return (
        <Fragment>
            <div>
                <h1 className='headingtag'>Welcome to Team vs Team Analysis Page!!!</h1>
            </div>
            <div id="battle">
              <select id="team1" > 
                {
                allteam.map((value)=>{
                    return(
                <option>{value}</option>
                    )
                })
                }      
              </select>
              <span><b>Vs</b></span>
              <select id="team2"> 
                {
                allteam.map((value)=>{
                    return(
            <option>{value}</option>
                    )
                })
                }      
              </select>
              <button className='getdata' onClick={duobattle}>Get Data</button>
              <button className='back' onClick={() => navigate('/')}>Back To Dashboard</button>
              <div>
              <ResponsiveContainer width="100%" aspect={4}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={show}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="blue"
            label
          />
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
              </div>
              </div>
        </Fragment>
    )
                
}
export default TeamVTeam





