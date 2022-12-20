describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Cetak Jadwal
    cy.get('a[href*="cetak_jadwal.php"]').click({ force: true})
    cy.wait(3000)

    //Cetak Jadwal Tanding
    cy.get('tr > :nth-child(1) > #judul').type('Tanding')
    cy.get(':nth-child(2) > #tgl').clear()
    cy.get(':nth-child(2) > #tgl').type('2023-04-12')
    cy.get('select[name="gelanggang"]').select('B', {force: true})
    cy.get(':nth-child(4) > .btn').click()
    cy.wait(3000)

    //Cetak Jadwal TGR
    cy.get('.form-horizontal > #judul').type('TGR')
    cy.get('.form-horizontal > #tgl').clear()
    cy.get('.form-horizontal > #tgl').type('2023-04-10')
    cy.get('select[name="kategori"]').select('Regu', {force: true})
    cy.get('.form-horizontal > .btn').click()
    cy.wait(3000)
  })
})