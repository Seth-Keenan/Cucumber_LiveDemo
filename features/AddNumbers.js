const { Given, When, Then} = require('@cucumber/cucumber');

Given('Numbers are provided', function () {
    num1 = 5;
    num2 = 10;
    return console.log('Numbers are'+ ' ' + num1 + ' ' + num2);
});

When('Sum up both numbers here', function () {
    sum = num1 + num2;
    return console.log('Addition is performed');
});

Then('Display the sum of both numbers', function () {
    return console.log('Sum of Numbers are ' + sum);
});