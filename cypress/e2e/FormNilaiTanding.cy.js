describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Jadwal Partai (Tanding)
    cy.get(':nth-child(9) > .dropmenu').contains('Cetak Form Nilai').click()
    cy.get(':nth-child(9) > ul > :nth-child(1) > .submenu').click()
    cy.wait(3000)

    // Input Cetak Form Nilai Tanding
    cy.get('input[name="tgl"]').clear()
    cy.get('input[name="tgl"]').type('2023-04-12')
    cy.get('select[name="gelanggang"]').select('C', {force: true})
    cy.contains('Generate').click()
    cy.wait(3000)
  })
})