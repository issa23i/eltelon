import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { Item } from '../../../../interfaces/tarjetas.interface';
import {
  TuiResponsiveDialog,
  TuiResponsiveDialogOptions,
} from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-quienes-somos',
  imports: [TaigaSharedModule, TuiResponsiveDialog],
  templateUrl: './quienes-somos.html',
  styleUrls: ['./quienes-somos.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuienesSomos {
  protected readonly routes: any = {};
  protected open = false;

  items: Item[] = [
    {
      title: 'José María Rojas Romero',
      buttonLabel: 'Director',
      content: 'Presidencia',
      texto: `<h3>Los comienzos (1971–1974)</h3>
<ul>
  <li>Participa en el montaje de <em>El Retablo del Flautista</em>, encargándose de vestuario, maquillaje, actuación, música y coreografía.</li>
  <li>Realiza 17 funciones con gran éxito.</li>
  <li>Asiste a ensayos del grupo <strong>Esperpento</strong>, donde se introduce al método Stanislavski y la ideología brechtiana.</li>
  <li>Cursa interpretación e improvisación, y se presenta por libre a los tres cursos de la Escuela de Arte Dramático.</li>
  <li>Entre 1974 y 1993, se dedica a observar y asesorar grupos emergentes.</li>
</ul>

<h3> Teatro Independiente y formación ideológica</h3>
<ul>
  <li>Participa en la Primera Semana del Teatro Independiente en España (1971) junto a grupos como <em>Quimera</em>, <em>Teatro Algabeño</em>, <em>Esperpento</em>, <em>Adagio</em> y <em>Teatro Lebrijano</em>.</li>
  <li>Se vincula estrechamente con <strong>Esperpento</strong>, dirigido por <strong>José María Rodríguez Buzón</strong>, y colabora con figuras como <strong>Antonio Andrés Lapeña</strong>, <strong>Roberto G. Quintana</strong> y <strong>Justo Ruiz Frutos</strong>.</li>
</ul>

<h3> Montajes y dirección escénica (1993–2006)</h3>
<ul>
  <li>En 1993, codirige una nueva versión de <em>El Retablo</em> con <strong>Manolo Cobete</strong>, logrando 17 actuaciones en teatros provinciales y el Imperial de Sevilla.</li>
  <li>En 2003, dirige <em>Maribel y la extraña familia</em> con estudiantes de 4º de ESO, obteniendo el segundo puesto en el concurso de teatro escolar de Sevilla.</li>
  <li>Entre 2004 y 2006, monta tres obras con adultos: <em>La camisa</em> de <strong>Lauro Olmo</strong>, <em>Maribel y la extraña familia</em> de <strong>Mihura</strong>, y tres piezas breves de <strong>José Sanchis Sinisterra</strong> bajo el título <em>Con cariño Benigraf</em>.</li>
</ul>

<h3> Gestión cultural y talleres transformadores</h3>
<ul>
  <li>Organiza la <strong>Muestra de Teatro Aficionado de la Provincia</strong> en 1999, 2000 y 2001, con más de 60 actuaciones en 20 pueblos.</li>
  <li>Propone que los talleres teatrales culminen en espectáculos reales, rompiendo con el modelo anterior de formación sin producción.</li>
  <li>Produce y colabora en montajes dirigidos por <strong>Azucena Jardano</strong> y <strong>Antonio Caprol</strong>, y coordina el mantenimiento de 45 funciones en Sevilla.</li>
  <li>En Lebrija, junto a <strong>Maya Barros de Gallardza</strong>, monta un espectáculo negro con dos grupos teatrales.</li>
</ul>

<h3> Eventos culturales de gran escala</h3>
<ul>
  <li>En 1999, coordina el <strong>Año Brecht</strong> en Sevilla, con talleres, exposiciones, encuentros internacionales, música y representaciones teatrales.</li>
  <li>El evento es impulsado por la Diputación bajo la dirección de <strong>Manolo Cobete</strong>, con <strong>Roberto Quintana</strong> como comisario.</li>
</ul>
`,
      foto: 'assets/img/jmaria.png',
    },
    {
      title: 'Miguel Ángel Bascón Morales',
      buttonLabel: 'Aficionado',
      content: 'Vocal',
      texto: `
    <h3>Formación y vocación cultural</h3>
    <ul>
      <li>Graduado en Derecho, con especial interés en el ámbito cultural y social.</li>
      <li>Ha desarrollado su carrera en la producción audiovisual, la economía social y la organización de eventos culturales.</li>
      <li>Combina su formación jurídica con una sensibilidad artística que lo vincula al teatro aficionado.</li>
    </ul>

    <h3>Gestión y asesoramiento escénico</h3>
    <ul>
      <li>Asesor de iniciativas y entidades dedicadas a las artes escénicas, tanto en el ámbito local como regional.</li>
      <li>Colabora en la planificación de actividades culturales inclusivas, con enfoque comunitario.</li>
      <li>Participa activamente en la vida asociativa de El Telón, aportando visión estratégica y organizativa.</li>
    </ul>
  `,
      foto: 'assets/img/miguel.png',
    },
    {
      title: 'Francisco Morilla Guerrero',
      buttonLabel: 'Director',
      content: 'Vicepresidente y tesorería',
      texto: `
    <h3>Trayectoria audiovisual</h3>
    <ul>
      <li>Director de cine realizador con amplia experiencia en proyectos independientes.</li>
      <li>Colaborador habitual de <strong>Viento Sur</strong>, plataforma cultural comprometida con la transformación social.</li>
      <li>Su mirada cinematográfica aporta profundidad estética a las propuestas escénicas de El Telón.</li>
    </ul>

  `,
      foto: 'assets/img/paco.png',
    },
    {
      title: 'Isabel Pastor López',
      buttonLabel: 'Actriz aficionada',
      content: 'Secretaria',
      texto: `  <h3>Descubrimiento y vocación escénica</h3>
    <ul>
      <li>Se incorpora a El Telón en 2024, atraída por la magia del teatro y el deseo de explorar nuevas formas de expresión.</li>
      <li>Organiza el primer taller de iniciación teatral con entusiasmo y compromiso, demostrando una sensibilidad especial para el trabajo en grupo.</li>
      <li>Estudia su primer papel de pastora en <em>La Farsa de Maître Pathelin</em>, enfrentando el reto actoral con dedicación y curiosidad.</li>
    </ul>`,
      foto: 'assets/img/isabel.png',
    },
  ];

  selected: Item = this.items[0];

  opened(item: Item) {
    this.selected = item;
    console.log(item.buttonLabel);
    return true;
  }

  get options(): Partial<TuiResponsiveDialogOptions> {
    return {
      label: this.selected.buttonLabel,
      size: 's',
    };
  }
}
