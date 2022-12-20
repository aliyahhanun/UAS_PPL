describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Jadwal Partai (Tanding)
    cy.get(':nth-child(9) > .dropmenu').contains('Cetak Form Nilai').click()
    cy.get(':nth-child(9) > ul > :nth-child(2) > .submenu').click()
    cy.wait(3000)

    // Input Form Nilai Tunggal
    cy.get(':nth-child(2) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(1) > #tgl').clear()
    cy.get(':nth-child(2) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(1) > #tgl').type('2023-04-12')
    cy.get(':nth-child(2) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(2) > .btn').click()
    cy.wait(3000)

    // Input Form Nilai Ganda
    cy.get('input[name="nm_kejuaraan"]').type('Regu')
    cy.get(':nth-child(3) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(2)').clear()
    cy.get(':nth-child(3) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(2)').type('2023-04-12')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)

    // Input Form Nilai Tunggal
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(1) > #tgl').clear()
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(1) > #tgl').type('2023-04-12')
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > tr > :nth-child(2) > .btn').click()
    cy.wait(3000)
  })
})