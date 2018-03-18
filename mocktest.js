var ApplicationUtils = require('../protractor/example/applicationUtils.js');

describe("Application Functionality ", function(){
	

	var userPwd = "test";
	var userName= "test";


it('Getting Web Page', function() {
	browser.driver.get('http://127.0.0.1:8080/#!/login');

});

it('Login without Registration ', function() {
	ApplicationUtils.login(userName,userPwd);
	expect(element(by.css('.alert-danger')).getText()).toBe('Username or password is incorrect');
	element(by.css('.btn-primary')).click();
});

it('register ', function() {
	element(by.css('.btn-link')).click();
	element(by.linkText('#!/register').getTagName().isPresent()).toBeTruthy();

});

it('Registration ', function() {
	ApplicationUtils.registration(userName, "test", userName,userPwd);
	expect(element(by.css('.alert')).getTest()).toBe('Registration Successful')

});

it('Login after Registration ', function() {
	ApplicationUtils.registration(userName, "test", userName,userPwd);
	expect(element(by.id('home')).isPresent()).toBeTruthy();

});



it('Logout After Login', function() {
	element(by.css('.btn-primary')).click();
	expect(element(by.css('.col-md-offset-3')).isPresent()).toBeTruthy();
});
});
