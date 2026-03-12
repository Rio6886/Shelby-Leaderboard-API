
import express from "express";

const app = express();

const leaderboard = [

{wallet:"0x123",score:210},

{wallet:"0xabc",score:180},

{wallet:"0x999",score:150}

];

app.get("/leaderboard",(req,res)=>{

res.json(leaderboard);

});

app.listen(3000,()=>{

console.log("Shelby Leaderboard API running");

});
