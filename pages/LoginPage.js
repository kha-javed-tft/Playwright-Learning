class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink="";
        this.userNameInput="";
        this.passwordInput="";
        this.loginbtn="";
    }

   async gotoLoginPage(){
        await this.page.goto("")
    }

   async login(username,password){

       await this.page.locator(this.loginLink).click();
       await this.page.locator(this.userNameInput).fill(username);
       await this.page.locator(this.passwordInput).fill(password);

       await this.page.locator(this.loginbtn).click();
    }
}