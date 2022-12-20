describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/skordigital/backend/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('123321')
    cy.get('button[class="btn btn-primary"]').click()

    // Masuk ke Halaman Jadwal Partai (Tanding)
    cy.get(':nth-child(7) > .dropmenu').contains('Jadwal Partai').click()
    cy.get(':nth-child(7) > ul > :nth-child(1) > .submenu').click()
    cy.wait(3000)

    // Input Jadwal Tanding 
    cy.get('input[name="tanggal"]').type('2023-02-03')
    cy.get('input[name="kelas"]').type('A Putra Dewasa')
    cy.get('input[name="gelanggang"]').type('C')
    cy.get('input[name="nopartai"]').type('2')
    cy.get('input[name="nm_merah"]').type('Japaron')
    cy.get('input[name="kont_merah"]').type('Apolo Barus')
    cy.get('input[name="nm_biru"]').type('Basoka')
    cy.get('input[name="kont_biru"]').type('Serdadu Angkoso')
    cy.get('input[name="babak"]').type('Penyisihan')
    cy.wait(3000)
    cy.contains('SUBMIT').click()
    cy.wait(3000)

    // Edit Data Jadwal Tanding
    cy.get(':nth-child(1) > .center > .btn-info > .halflings-icon').click()
    cy.get('input[name="gelanggang"]').clear()
    cy.get('input[name="gelanggang"]').type('A')
    cy.get('input[name="partai"]').clear()
    cy.get('input[name="partai"]').type('4')
    cy.get('input[name="babak"]').clear()
    cy.get('input[name="babak"]').type('Semifinal')
    cy.get('select[name="aktif"]').select('YES', {force: true})
    cy.wait(3000)
    cy.contains('Simpan Perubahan').click()
    cy.wait(3000)

    // Mencari Data Jadwal Tanding Berdasarkan Babak
    cy.get('input[aria-controls="DataTables_Table_0"]').type('Semifinal')
    cy.wait(3000)    

    // Menghapus Salah Satu Jadwal Tanding
    cy.get(':nth-child(1) > .center > .btn-danger > .halflings-icon').click()
  })
})