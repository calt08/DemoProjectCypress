describe('Load GBH HomePage', () =>{
    it('Loads', () => {
        cy.visit('https://gbh.com.do/');
        cy.title().should('eq', 'GBH');
        cy.get('#menu-item-3240 > a').should('have.text', 'Solutions')
        cy.get('.et_pb_text_inner:first > h2').should('have.text', 'We transform businesses. Measuring our achievements by their impact.');

        // cy.get('.et_pb_text_inner:first > h2').should(($div) => {
        //     expect($div).to.have.text('We transform businesses. Measuring our achievements by their impact.')
        // })
        // .should('have.text', 'We transform businesses. Measuring our achievements by their impact.');
    });
});