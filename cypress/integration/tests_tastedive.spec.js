   describe(' tests', () => {
    it('test', () => {   
    cy.searchBlur('Blur', 10).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body).to.not.be.null
    expect(response.body.Similar).to.have.property('Info')
  //   cy.log(response.body.Similar)
  // cy.log(response.body.Similar.Info)
  // cy.log(response.body.Similar.Results)
    expect(response.body.Similar.Results).to.have.length('10')
    expect(response.body).property('Similar').to.not.be.oneOf([null, ""])
    expect(response.body.Similar.Info).to.deep.equal([ { Name: 'Blur', Type: 'music' } ])
    cy.fixture('example.json').then((q) => {
    expect(response.body.Similar.Info).to.deep.equal([q])
  })
  
  })
})
   })
