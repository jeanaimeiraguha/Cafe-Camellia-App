
import mysql from 'mysql';
import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'camellia',
});


db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        
    }
    console.log("Connected to the database successfully");
});


app.get('/select', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).json({ message: "Failed to fetch users" });
        }
        return res.status(200).json(result);
    });
});

app.get('/selectposts', (req, res) => {
     const sql = "SELECT * FROM post";
     db.query(sql, (err, result) => {
         if (err) {
             console.error("Error fetching users:", err);
             return res.status(500).json({ message: "Failed to fetch users" });
         }
         return res.status(200).json(result);
     });
 });
app.get('/select/:id',(req,res)=>{
     const{id}=req.params;
     const sql="SELECT * FROM users WHERE id=?"
     db.query(sql,[id],(err,result)=>{
          if(err) return res.status(400).json("failed")
               return res.status(200).json(result[0])

     })
})
app.get('/selectposts/:PostId',(req,res)=>{
     const{PostId}=req.params;
     const sql="SELECT * FROM post WHERE PostId=?"
     db.query(sql,[PostId],(err,result)=>{
          if(err) return res.status(400).json("failed")
               return res.status(200).json(result[0])

     })
})
   

app.post('/insert',(req,res)=>{
     const {username,password}=req.body;
     const sql="INSERT INTO users(username,password) VALUES(?,?)";
     db.query(sql,[username,password],(err,result)=>{
          if(err) return res.status(400).json({Message:"Failed",status:400});
          return res.status(201).json(result)
     })
})
//Add post


app.post('/insertpost',(req,res)=>{
     const {PostName}=req.body;
     const sql="INSERT INTO post(PostName) VALUES(?)";
     db.query(sql,[PostName],(err,result)=>{
          if(err) return res.status(400).json({Message:"Failed",status:400});
          return res.status(201).json(result)
     })
})
app.delete('/delete/:id',(req,res)=>{
     const {id}=req.params;
     const sql ="DELETE FROM users where id=?"
     db.query(sql,[id],(err,result)=>{
if(err) return res.status(400).json("Failed")
     return res.status(200).json(result)
     })
})
app.delete('/deleteposts/:PostId',(req,res)=>{
     const {PostId}=req.params;
     const sql ="DELETE FROM post where PostId=?"
     db.query(sql,[PostId],(err,result)=>{
if(err) return res.status(400).json("Failed")
     return res.status(200).json(result)
     })
})


app.put('/update/:id',(req,res)=>{
     const {id}=req.params;
     const{username,password}=req.body;
     const sql ="UPDATE users SET username=? , password=? where id=?"
     db.query(sql,[username,password,id],(err,result)=>{
if(err) return res.status(400).json("Failed")
     return res.status(200).json(result)
     })
})


app.put('/updateposts/:PostId',(req,res)=>{
     const {PostId}=req.params;
     const{PostName}=req.body;
     const sql ="UPDATE post SET PostName=?  where PostId=?"
     db.query(sql,[PostName,PostId],(err,result)=>{
if(err) return res.status(400).json("Failed")
     return res.status(200).json(result)
     })
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
