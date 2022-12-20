describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Rekap Data
    cy.get('a[href*="admin_rekap_data.php"]').click({ force: true})
    cy.wait(3000)

    // Download Data Peserta Tanding
    cy.get('select[name="golongan"]').select('Dewasa', {force: true})
    cy.get(':nth-child(2) > .btn').click()
    cy.wait(3000)

    // Download Data Peserta TGR
    cy.get('select[name="golongan1"]').select('Dewasa', {force: true})
    cy.get('select[name="kategori_tanding"]').select('Ganda', {force: true})
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
  })
})