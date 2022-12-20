describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Perolehan Medali
    cy.get('a[href*="mvp.php"]').click({ force: true})
    cy.wait(3000)

    // Search Daftar Riwayat Nilai Pesilat
    cy.get('#DataTables_Table_0_filter > label > input').type('Serdadu Angkoso')
    cy.wait(3000)

    // Search Peringkat Pesilat Terbaik
    cy.get('#DataTables_Table_1_filter > label > input').type('Papirus')
    cy.wait(3000)
  })
})