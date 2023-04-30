class Login
{

 setUserName(username)
{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin')

}

setPassword(password)
{
    cy.get("input[placeholder='Password']").type('admin123');

   }


   clickSubmit()
{
    cy.get('.oxd-button').click();
   }


   verifyLogin ()
{
    cy.get (".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text','Dashboard');
   }

} 
export default Login;