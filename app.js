var express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.get("/calculator/:num1/:num2/:num3", function(req, res) {
  var operand = req.params.num1;
  console.log(operand);
  console.log(req.params.num2, req.params.num3);
  var result = calculator(operand, parseInt(req.params.num2), parseInt(req.params.num3));
  res.render('index', {op1: req.params.num2, operand: req.params.num1, op2: req.params.num3, sum: result});
})

function calculator(operand, num1, num2) {
  console.log(operand, num1, num2);
  switch (operand) {
    case "add":
      result = (num1+num2);
      break;
    case "subtract":
      result = (num1-num2);
      break;
    case "multiply":
      result = (num1*num2);
      break;
    case "divide":
      // {if (num2 == "0")
      //   console.log("Can't divide by 0");
      // else {
        result = (num1/num2);
      break;
    default:
      console.log("bad operand");
      break;
    }
  return(result);
}

app.listen(3000,function() {
  console.log("Starting a server on localhost:3000");
});
