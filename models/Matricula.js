const mongoose=require('mongoose');
const MatriculaSchema = mongoose.Schema({

estudiante:{
    type:String,
    required:true

},
curso:{
    type:String,
    required:true
},
fecha:{
    type:Date,
    default:Date.now
}
});
module.exports=mongoose.model('Matricula',MatriculaSchema); // exporto el modelo