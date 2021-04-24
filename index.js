const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const port = 8080

// Input format
// {
//     "input":[{"Gender": "Male", "HeightCm": 166, "WeightKg": 45 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 82}]
// }
const calculateBMI=(weightKg,heightInMetres) =>  {

  	let bmi = weightKg / (heightInMetres * heightInMetres);
    // console.log("calculateBMI output", bmi.toFixed(2))
	return bmi.toFixed(2);
}

const categoryAndRisk = (bmi) => {
	let bmiCategory = "";
  	let healthRisk = "";
  	let overWeightCount = 0;
  	if(bmi <= 18.4) {
  		bmiCategory = "Under Weight";
  		healthRisk = "Malnutrition Risk";
  	} else if (bmi >= 18.5 && bmi <= 24.9) {
  		bmiCategory = "Normal Weight";
  		healthRisk = "Low Risk"
  	} else if (bmi >= 25 && bmi <= 29.9) {
  		bmiCategory = "Over Weight";
  		healthRisk = "Enhanced risk";
  		overWeightCount++;
  	} else if (bmi >= 30 && bmi <= 34.9) {
  		bmiCategory = "Moderately Obese";
  		healthRisk = "Medium risk";
  	} else if (bmi >= 35 && bmi <= 39.9) {
  		bmiCategory = "Severely Obese";
  		healthRisk = "High risk";
  	} else if (bmi >= 40) {
  		bmiCategory = "Very Severely Obese";
  		healthRisk = "Very High risk";
  	}
  	return [bmiCategory,healthRisk,overWeightCount];
}

app.post('/calculateBMI', (req, res) => {
  console.log("assa",req.body);
  let tables = req.body.input;
  let overWeightPeopleCount = 0;
  let bmi=0;
  tables.forEach(function(table) {
  	let weightKg = table["WeightKg"];
  	let heightInMetres = table["HeightCm"] / 100;
  	bmi = calculateBMI(weightKg,heightInMetres);
  	let categoryAndRiskType = categoryAndRisk(bmi); 
  	let bmiCategory = categoryAndRiskType[0];
  	let healthRisk = categoryAndRiskType[1];
  	overWeightPeopleCount += categoryAndRiskType[2];
  	// console.log(categoryAndRiskType);
   	table["bmi"] = bmi;
   	table["bmiCategory"] = bmiCategory;
   	table["healthRisk"] = healthRisk;
	});
  res.send({"response":tables,"overWeightPeopleCount":overWeightPeopleCount})
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

module.exports=calculateBMI;