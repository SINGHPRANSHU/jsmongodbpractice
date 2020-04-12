var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/catapp");
var catSchema=new mongoose.Schema({
    name:String
});
var cat=mongoose.model("cat",catSchema);
var george=new cat({
    name:"george"
});
george.save(function(err,cat){
    if(err){
        console.log(err);
    }
    else{
        console.log("save"+cat);
    }
});