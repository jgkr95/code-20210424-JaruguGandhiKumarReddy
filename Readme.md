1) Calculated the BMI (Body Mass Index) using Formula 1, BMI Category and Health risk from Table 1 of the person and add them as 3 new columns
2) Countd the total number of overweight people using ranges in the column BMI Category of Table 1, check this is consistent programmatically and add any other observations in the documentation
3) Created tests to make sure the code is working as expected and this can be added to an automation build / test / deployment pipeline


npm i - for installing dependecies

npm run start - for starting application

npm rub start:dev - for starting application with logs

npm run test - foe testing

Hit post call http://localhost:8080/calculateBMI with body as Json : {"input": <requiredDetails> } 
	After hitting we will get response with 3 additional colums i.e, BMI, BMI Category, Health Risk and overWeightedpeopleCount.
