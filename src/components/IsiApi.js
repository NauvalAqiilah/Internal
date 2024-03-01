export default class IsiApi {
    jurusan = "";
    pelajaran = "";
    materi = "";
    
    constructor(initializer) {
      this.jurusan = initializer.jurusan;
      this.pelajaran = initializer.pelajaran;
      this.materi = initializer.materi;
    }
  }