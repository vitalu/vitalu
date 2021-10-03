class ToolsQaPage
{

username()
{
    return cy.get('#username')
}
password()
{
    return cy.get('#password')
}
login_button()
{
    return cy.get('.woocommerce-button.button.woocommerce-form-login__submit')
}
search()
{
    return cy.get('.noo-search')
}
}
export default ToolsQaPage;