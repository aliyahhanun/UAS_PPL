describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Perolehan Medali
    cy.get('a[href*="admin_medali.php"]').click({ force: true})
    cy.wait(3000)

    // Monitoring Partai Semifinal
    cy.get('#DataTables_Table_0 > tbody > .odd > :nth-child(7) > #PostMedali > .btn').click()
    cy.wait(3000)
    cy.get('#DataTables_Table_0 > tbody > .odd > :nth-child(6) > #PostMedali > .btn').click()
    cy.get(3000)

    // Monitoring Partai Final
    cy.get(':nth-child(7) > :nth-child(4) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(6) > :nth-child(5) > .btn').click()
    cy.wait(3000)

    // Search Perolehan Medali (Kelas Tanding) Perorangan
    cy.get('#DataTables_Table_2_filter > label > input').type('Emas')

    // Search Perolehan Medali (Kelas Tanding) Kontingen
    cy.get('#DataTables_Table_3_filter > label > input').type('Apolo Barus')
  })
})