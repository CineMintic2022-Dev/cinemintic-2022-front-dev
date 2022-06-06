import { Component, OnInit } from '@angular/core';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css'],
})
export class CombosComponent implements OnInit {
  combosOut: any[] = [];
  imgCombo: string;

  constructor(private combosService: ComboService) {
    this.combosOut = [];
    this.imgCombo = '/assets/img/combos/imgCombo.png';
  }

  ngOnInit(): void {
    this.combosService.buscarCombos().subscribe({
      next: (data) => {
        const jsonCombos = JSON.parse(JSON.stringify(data));
        const losCombos = Object.entries(jsonCombos.combos);
        losCombos.forEach((combo) => {
          this.combosOut.push(combo[1]);
        });
      },
    });
  }
}
