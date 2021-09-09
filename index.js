//Jesse works at an art store where he's paid a base salary of $3900 a month.
//He has a minimum sales target of $11 000 a month
//If he doesn't manage to make the minimum, he's fired!!!!
//He's also paid a bonus commission once he passes his sales target
//The commission rate is 6 percent between 11000 and 17000 in sales
//Once he passes 17000 in sales, his commission rate goes up to 9 percent

//you've just taken a look at jesse's pay stub. Given the total he's paid(including any commissions)
//Write a function to determine the total sales he made to earn that paycheck


function determineSales(paycheck){


let baseSalary = 3900
let quota = 11000
let bonusQuotaPoint = 17000
let comPaid = paycheck - baseSalary
//initialize total sales
let totalSales = 0

//commission rates, regular and bonus
let regComRate = .06
let bonComRate = .09
//max amount of sales you can make before hitting bonus commission payout
let maxRegComSales = bonusQuotaPoint-quota
//what one is paid in commission if they hit the bonus quota point
let maxRegComPaid = (maxRegComSales) * regComRate
let bonComPaid = (paycheck - baseSalary) - maxRegComPaid
let bonComSales= bonComPaid / bonComRate

if(paycheck < baseSalary){
return   'Cannot have Salary lower than Base Salary!!!!'
}



//if jesse made no sales
else if(paycheck === baseSalary){
  console.log('NO SALES')
  totalSales=  Math.round(quota + ((comPaid)*regComRate))
}
//if jesse sold up to the reg commission rate cutoff point of $6000 sales, aka the base salary + 360 dollars of commission
else if (baseSalary < paycheck && paycheck  <= (baseSalary+maxRegComPaid )){
 console.log('Getting Paid Regular Commission')
 totalSales = Math.round(quota +((paycheck- baseSalary) / regComRate))
}
//otherwise jesse has entered bonus commission territory and is very happy! 
//Looking at the return values for paycheck vs total sales, I kind of feel like Jesse is getting ripped off....
 else if( paycheck > (baseSalary + maxRegComPaid)){
  console.log('getting paid Bonus commission!')
totalSales = Math.round(quota + maxRegComSales + bonComSales)
} 

return `Total Sales this month: $${totalSales}`
}
determineSales(5500)





