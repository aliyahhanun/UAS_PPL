describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Jadwal Partai (TGR)
    cy.get(':nth-child(7) > .dropmenu').contains('Jadwal Partai').click()
    cy.get(':nth-child(7) > ul > :nth-child(2) > .submenu').click()
    cy.wait(3000)

    // Input Jadwal Tunggal
    cy.get(':nth-child(2) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(1) > :nth-child(2) > #golongan').type('Putra Dewasa')
    cy.get(':nth-child(2) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(2) > :nth-child(2) > #no_undian').type('553')
    cy.get('input[name="nama"]').type('Hellboy')
    cy.get(':nth-child(4) > :nth-child(2) > #kontingen').type('Apolo Barus')
    cy.wait(3000)
    cy.get('.form-horizontal > table > tbody > :nth-child(5) > td > .btn').click()
    cy.wait(3000)

    // Input Jadwal Ganda
    cy.get(':nth-child(3) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(1) > :nth-child(2) > #golongan').type('Putri Dewasa')
    cy.get(':nth-child(3) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(2) > :nth-child(2) > #no_undian').type('910')
    cy.get(':nth-child(3) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(3) > :nth-child(2) > #nama1').type('Napacin')
    cy.get(':nth-child(3) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(4) > :nth-child(2) > #nama2').type('Komet')
    cy.get(':nth-child(5) > :nth-child(2) > #kontingen').type('Apolo Barus')
    cy.wait(3000)
    cy.get('.form-horizontal > table > tbody > :nth-child(6) > td > .btn').click()
    cy.wait(3000)

    // Input Jadwal Regu
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(1) > :nth-child(2) > #golongan').type('Putra Dewasa')
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(2) > :nth-child(2) > #no_undian').type('300')
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(3) > :nth-child(2) > #nama1').type('Toman')
    cy.get(':nth-child(4) > .box > .box-content > .form-horizontal > table > tbody > :nth-child(4) > :nth-child(2) > #nama2').type('Gareng')
    cy.get('input[name="nama3"]').type('Petruk')
    cy.get(':nth-child(6) > :nth-child(2) > #kontingen').type('Apolo Barus')
    cy.wait(3000)
    cy.get('.form-horizontal > table > tbody > :nth-child(7) > td > .btn').click()
    cy.wait(3000)

    // Mencari Data Jadwal Tanding Berdasarkan Kategori
    cy.get('input[aria-controls="DataTables_Table_0"]').type('Putri')
    cy.wait(3000) 

    // Menghapus Salah Satu Jadwal Tanding
    cy.get(':nth-child(1) > .center > .btn-danger > .halflings-icon').click()
  })
})
