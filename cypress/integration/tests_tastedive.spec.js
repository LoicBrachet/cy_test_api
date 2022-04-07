   let q1 = require('../fixtures/example.json')
   describe(' tests', () => {
    it('test', () => {   
      cy.log(q1)
    cy.searchBlur(q1[0].query, q1[0].type, q1[0].limit).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body).to.not.be.null
    expect(response.body.Similar).to.have.property('Info')
  //   cy.log(response.body.Similar)
  cy.log(response.body.Similar.Info)
  // cy.log(response.body.Similar.Results)
    expect(response.body.Similar.Results).to.have.length(q1[0].limit)
    expect(response.body).property('Similar').to.not.be.oneOf([null, ""]) 
    expect(response.body.Similar.Info[0].Name).to.deep.equal(q1[0].query)
    expect(response.body.Similar.Info[0].Type).to.deep.equal(q1[0].type)

  
  })
})
   })
