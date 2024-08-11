const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.ep1aqlq.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('Connected to DB')
}).catch((res)=>{
    console.log('Not Connected to DB')
})