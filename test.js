
    
// describe('Protractor first sign in test', function() {

//     beforeEach(function() {
//         browser.get('http://127.0.0.1:8080/#!/login');
//         browser.waitForAngular();
//         //expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/login');
//     }, 30000);

//     it('should login',function () {
//         var user = browser.driver.findElement(by.id('username'));
//         var password = browser.driver.findElement(by.id('password'));
//         //var button = browser.driver.findElement(by.css('[ng-click="login()"]'));
//         var button = element(by.css('[ng-click="login()"]'));

//         user.sendKeys('first');
//         password.sendKeys('nope');

//         expect(user.getAttribute('value')).toEqual('first');
//         expect(password.getAttribute('value')).toEqual('nope');

//         button.click().then(function (){
//             browser.waitForAngular();
//             expect(browser.driver.get('http://localhost:8080/#/login'));
//             //expect(authenticationError.toBe(true));
//         }, 10000);
//     });
// });