import { utf8Encode } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-pdf';
  jmbg: string;
  nazivObveznika: string;
  adresaObveznika: string;
  gradIPostanskiBroj: string;
  sifraOpcine: string;
  sifraOpcineDrugiDio: string;
  telefon: string;
  email: string;
  datumRodjenjaDan: string;
  datumRodjenjaMjesec: string;
  datumRodjenjaGodina: string;
  dnevnoRadnoVrijemeSati: string;
  dnevnoRadnoVrijemeMinuta: string;
  osnovOsiguranja: string;
  zanimanje: string;
  datumPrijaveOdjavepromjeneOsiguranjaDan: string;
  datumPrijaveOdjavepromjeneOsiguranjaMjesec: string;
  datumPrijaveOdjavepromjeneOsiguranjaGodina: string;
  osnovZaUplatuDoprinosa: string;
  sifraRadnogMjesta: string;
  stepenUvecanja: string;

  // ----- Prvi dio ----- //
  vrstaPrijavePrijava: boolean;
  vrstaPrijavePromjena: boolean;
  vrstaPrijaveOdjava: boolean;

  // ----- Drugi dio ----- //
  mjesto: string;
  emailDrugiDio: string;
  postanskiBroj: string;
  kontaktAdresa: string;
  muskiSpol: boolean;
  zenskiSpol: boolean;
  adresaPrebivalista: string;
  djevojackoPrezime: string;
  imeOsiguranika: string;
  jmbgDrugioDio: string;

  // Stručna sprema
  strucnaSpremaNK: boolean;
  strucnaSpremaPK: boolean;
  strucnaSpremaKV: boolean;
  strucnaSpremaVKV: boolean;
  strucnaSpremaNiza: boolean;
  strucnaSpremaSSS: boolean;
  strucnaSpremaVSHS: boolean;
  strucnaSpremaVSS: boolean;
  strucnaSpremaMR: boolean;
  strucnaSpremaDR: boolean;

  // ----- Treci dio -------- //
  zanimanjeTreciDio: string;
  osnovOsiguranjaTreciDio: string;
  osnovZaUplatuDoprinosaTreciDio: string;

  // Stručna sprema

  strucnaSpremaTreciDioNK: boolean;
  strucnaSpremaTreciDioPK: boolean;
  strucnaSpremaTreciDioKV: boolean;
  strucnaSpremaTreciDioVKV: boolean;
  strucnaSpremaTreciDioNiza: boolean;
  strucnaSpremaTreciDioSSS: boolean;
  strucnaSpremaTreciDioVSHS: boolean;
  strucnaSpremaTreciDioVSS: boolean;
  strucnaSpremaTreciDioMR: boolean;
  strucnaSpremaTreciDioDR: boolean;

  // ----- Četvrti dio --------
  telefonPopunjivaca: string;
  imePopunjivaca: string;
  datumPopunjavanja: string;
  datumPrijave: string;

  constructor(private pdfService: PdfService) {}

  getString(data: any) {
    return decodeURI(data);
  }

  getPDF() {
    this.pdfService.getPDF(this.getFieldsObject()).subscribe((res) => {
      // Napravimo PDF od vraćenog blob-a
      var file = new Blob([res], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);

      // Preuzmimo dokument
      window.open(fileURL);
      var a = document.createElement('a');
      a.href = fileURL;
      a.target = '_blank';
      a.download = 'popunjen_obrazac.pdf';
      document.body.appendChild(a);
      a.click();
    });
  }

  private getFieldsObject(): Object {
    return {
      '1 JIBJMB': this.jmbg,
      '2 Naziv obveznika uplate doprinosa': this.nazivObveznika,
      '3 Adresa obveznika uplate doprinosa': this.adresaObveznika,
      '4 Grad i poštanski broj': 'Bugojno, 70230',
      '4 Grad i poštanski broj:': 'Sarajevo, 71000',
      undefined: this.sifraOpcine,
      '6 Vrsta prijave': this.vrstaPrijavePrijava,
      'Promjena podataka o osiguranju': this.vrstaPrijavePromjena,
      'Odjava osiguranja': this.vrstaPrijaveOdjava,
      '7 Telefon': this.telefon,
      '8 Email': this.email,
      'Drugi dio  Podaci o osiguraniku': this.jmbgDrugioDio,
      'Prezime i ime osiguranika': this.imeOsiguranika,
      'fill_2': this.djevojackoPrezime,
      'Adresa prebivališta': this.adresaPrebivalista,
      'Ženski': this.zenskiSpol,
      'Muški': this.muskiSpol,
      'fill_3': this.kontaktAdresa,
      'Poštanski broj': this.postanskiBroj,
      'Poštanski broj Email adresa': this.emailDrugiDio,
      'MjestoEmail adresa': this.mjesto,
      undefined_2: this.datumRodjenjaDan,
      undefined_3: this.datumRodjenjaMjesec,
      undefined_4: this.datumRodjenjaGodina,
      undefined_5: this.dnevnoRadnoVrijemeSati,
      undefined_6: this.dnevnoRadnoVrijemeMinuta,
      comb_5: this.sifraOpcineDrugiDio,
      undefined_7: this.osnovOsiguranja,
      undefined_8: this.zanimanje,
      undefined_9: this.datumPrijaveOdjavepromjeneOsiguranjaDan,
      undefined_10: this.datumPrijaveOdjavepromjeneOsiguranjaMjesec,
      undefined_11: this.datumPrijaveOdjavepromjeneOsiguranjaGodina,
      undefined_12: this.osnovZaUplatuDoprinosa,
      undefined_13: this.sifraRadnogMjesta,
      undefined_14: this.stepenUvecanja,
      'Datum': this.datumPrijave,
      'Datum_2': this.datumPopunjavanja,
      'Ime i prezime lica koje je popunilo prijavu': this.imePopunjivaca,
      'Telefonski broj lica koje je popunilo prijavu': this.telefonPopunjivaca,
      Text1: this.osnovZaUplatuDoprinosaTreciDio,
      'Check Box2': this.strucnaSpremaTreciDioDR,
      'Check Box3': this.strucnaSpremaTreciDioMR,
      'Check Box4': this.strucnaSpremaTreciDioVSS,
      'Check Box5': this.strucnaSpremaTreciDioVSHS,
      'Check Box6': this.strucnaSpremaTreciDioSSS,
      'Check Box7': this.strucnaSpremaTreciDioNiza,
      'Check Box8': this.strucnaSpremaTreciDioVKV,
      'Check Box9': this.strucnaSpremaTreciDioKV,
      'Check Box10': this.strucnaSpremaTreciDioPK,
      'Check Box11': this.strucnaSpremaTreciDioNK,
      'Check Box100': this.strucnaSpremaDR,
      'Check Box101': this.strucnaSpremaMR,
      'Check Box103': this.strucnaSpremaVSS,
      'Check Box102': this.strucnaSpremaVSHS,
      'Check Box104': this.strucnaSpremaSSS,
      'Check Box105': this.strucnaSpremaNiza,
      'Check Box106': this.strucnaSpremaVKV,
      'Check Box107': this.strucnaSpremaNK,
      'Check Box108': this.strucnaSpremaPK,
      'Check Box109': this.strucnaSpremaKV,
      Text3: this.zanimanjeTreciDio,
      Text2: this.osnovOsiguranjaTreciDio,
    };
  }
}
