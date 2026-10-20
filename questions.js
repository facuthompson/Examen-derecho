// EXÁMENES DE DERECHO LABORAL — 20 preguntas cada uno.
// Exámenes 1, 2 y 3: TEMAS MEZCLADOS, 3 opciones por pregunta, nivel similar al modelo del profesor.
// Examen 4: se conservan las 20 preguntas fotografiadas y sus 2 o 3 alternativas.
// La PRIMERA respuesta de cada pregunta es la correcta; app.js mezcla preguntas y opciones.
// Fuentes: los cinco apuntes de clase y, para normas modificadas, texto oficial actualizado
// de LCT 20.744 (Ley 27.802) y plazos ARCA de Simplificación Registral.
// Ante diferencias, las explicaciones distinguen explícitamente apunte y ley vigente (2026).
const EXAMS = [
  // EXAMEN MIXTO 1: Fuentes, contrato, jornada, extinción y liquidación
  [
    ["Según la pirámide de Kelsen, ¿qué jerarquía tiene un tratado internacional común sobre propiedad intelectual?", "Superior a las leyes, pero inferior a la Constitución.", "La misma jerarquía que un decreto reglamentario.", "Superior a la Constitución Nacional.", "Los tratados ordinarios son supralegales e infraconstitucionales (Constitución Nacional, art. 75 inc. 22; apunte Fuentes del Derecho)."],
    ["¿Una sociedad comercial puede ser la parte trabajadora de un contrato laboral?", "No; el trabajador debe ser una persona física.", "Sí, si la sociedad tiene menos de tres socios.", "Sí, siempre que trabaje para otra empresa.", "En la relación de trabajo la persona trabajadora es física; el empleador puede ser una persona física o jurídica."],
    ["Un empleado presta tareas entre las 22 y las 5 horas. ¿Qué régimen horario general corresponde?", "Jornada nocturna, con máximo de 7 horas diarias.", "Jornada diurna, con máximo de 8 horas diarias.", "Jornada mixta, aunque todas las horas sean nocturnas.", "El horario nocturno general se extiende entre las 21 y las 6; su límite ordinario es 7 horas diarias o 42 semanales."],
    ["Si el trabajador renuncia voluntariamente, ¿qué conceptos conserva como regla general?", "Salarios adeudados, SAC y vacaciones proporcionales.", "Indemnización por antigüedad y dos meses de preaviso.", "Indemnización por despido sin causa, pero no el salario adeudado.", "La renuncia no genera indemnización por antigüedad, pero sí los rubros obligatorios de la liquidación final."],
    ["Para calcular el SAC proporcional en el ejercicio simplificado del apunte, ¿qué operación se usa?", "(Mitad del sueldo ÷ 180) × días trabajados en el semestre.", "(Sueldo completo ÷ 30) × días trabajados en el mes.", "(Mitad del sueldo ÷ 360) × días trabajados en el año.", "El apunte de liquidación emplea una base semestral de 180 días para su ejercicio; el SAC legal se determina según las remuneraciones devengadas del semestre."],
    ["Un cambio tecnológico provoca la necesidad de una nueva ley. Ese hecho constituye una...", "Fuente material del Derecho.", "Fuente formal del Derecho.", "Sentencia judicial con efecto general.", "Una circunstancia económica o tecnológica que motiva crear normas es fuente material; la ley resultante es fuente formal."],
    ["Como regla general, ¿cuándo debe el empleador comunicar el alta del trabajador ante ARCA?", "Hasta el día anterior al comienzo de tareas.", "Dentro de los seis meses del período de prueba.", "Dentro de las 24 horas posteriores a la primera remuneración.", "ARCA exige comunicar el alta a más tardar el día anterior, salvo actividades de excepción que admiten hacerlo hasta el comienzo efectivo. El apunte anterior mencionaba 24 horas posteriores."],
    ["Si una jornada termina a las 23 y la siguiente comienza a las 8, ¿se cumple el descanso mínimo?", "No, porque transcurrieron 9 horas y se exigen al menos 12.", "Sí, porque el descanso mínimo legal es de 8 horas.", "Sí, siempre que la siguiente jornada sea diurna.", "El descanso general entre jornadas no puede ser inferior a 12 horas."],
    ["¿Qué caracteriza al despido indirecto?", "El trabajador extingue el contrato frente a un incumplimiento grave del empleador.", "El empleador despide sin necesidad de comunicarlo.", "El trabajador termina el contrato sin motivo y sin requisitos.", "El trabajador se considera despedido por injuria grave patronal; si se justifica, puede reclamar las indemnizaciones correspondientes."],
    ["En el ejemplo de liquidación del apunte, para abonar 9 días trabajados de un mes de 30 días se calcula...", "(Sueldo mensual ÷ 30) × 9.", "(Sueldo mensual ÷ 25) × 30.", "(Sueldo mensual ÷ 180) × 9.", "El ejercicio de liquidación de septiembre usa el sueldo mensual dividido por 30 multiplicado por los 9 días trabajados."],
    ["Si una ley contradice un tratado internacional con jerarquía constitucional, ¿qué prevalece?", "El tratado de jerarquía constitucional.", "La ley, porque fue sancionada después.", "El decreto que reglamente la ley.", "La ley no puede contrariar normas constitucionales ni tratados dotados de jerarquía constitucional."],
    ["En un recibo, ¿qué diferencia existe entre aporte jubilatorio y contribución patronal?", "El aporte se retiene al trabajador; la contribución la paga el empleador.", "Ambos son descuentos obligatorios del sueldo neto.", "La contribución se descuenta del trabajador y el aporte lo paga el Estado.", "Los aportes personales se deducen del salario bruto; las contribuciones patronales son obligaciones adicionales del empleador."],
    ["Un empleado trabaja un domingo, pero no supera su jornada máxima. ¿Es automáticamente hora extra?", "No necesariamente: puede corresponder descanso compensatorio.", "Sí, toda hora del domingo es extra aunque haya franco.", "No, porque los domingos nunca generan derechos laborales adicionales.", "Trabajo dominical y horas extraordinarias no son sinónimos: también rigen el descanso semanal y su compensación."],
    ["¿Qué exige un despido directo con justa causa?", "Comunicación escrita de una injuria grave, concreta y susceptible de prueba.", "Solo que el empleador lo comunique verbalmente.", "La acumulación de cualquier falta leve, sin valorar su gravedad.", "La causa debe explicarse por escrito, ser proporcional al incumplimiento y probarse cuando es controvertida (LCT, arts. 242 y 243)."],
    ["Si se despide sin causa ni preaviso antes de terminar el mes, fuera de prueba, ¿qué concepto puede agregarse?", "Integración del mes de despido por los días restantes.", "Una segunda indemnización por antigüedad por cada día faltante.", "El reintegro de todos los aportes jubilatorios.", "La integración cubre salarios del resto del mes cuando concurren sus requisitos legales (LCT, art. 233)."],
    ["¿En qué supuesto permite la Constitución dictar un decreto de necesidad y urgencia?", "Ante circunstancias excepcionales, fuera de las materias prohibidas.", "Para crear impuestos cuando el Congreso no esté de acuerdo.", "Para sustituir libremente cualquier ley penal.", "Los DNU son excepcionales y no pueden dictarse sobre materia penal, tributaria, electoral ni régimen de partidos políticos."],
    ["¿Qué significa que el contrato de trabajo sea sinalagmático?", "Que genera obligaciones recíprocas entre trabajador y empleador.", "Que obliga solo al trabajador, sin obligaciones patronales.", "Que existe exclusivamente cuando se firma ante escribano.", "Se intercambian prestaciones: el trabajador pone servicios a disposición y el empleador paga remuneración, entre otros deberes."],
    ["Según el régimen general, ¿cuántos días corridos de vacaciones corresponden con 8 años de antigüedad?", "21 días corridos.", "14 días corridos.", "28 días corridos.", "Con más de cinco y hasta diez años de antigüedad corresponden veintiún días corridos."],
    ["Según la legislación vigente en 2026, ¿qué preaviso exige la ley al empleador durante el período de prueba?", "No exige preaviso durante el período de prueba.", "Quince días, en todos los casos.", "Un mes si el empleado ya cumplió tres meses.", "El art. 231 LCT, modificado por Ley 27.802, eliminó la obligación de preavisar durante el período de prueba. El examen histórico del profesor indicaba 15 días."],
    ["Tras superar el período de prueba, un empleado despedido sin causa trabajó 2 años y 4 meses. ¿Cuántos años se computan para la indemnización básica?", "3 años de antigüedad.", "2 años de antigüedad.", "4 años de antigüedad.", "La fracción de cuatro meses supera los tres meses, por eso se computa un año más (LCT, art. 245; sin considerar topes)."]
  ],
  // EXAMEN MIXTO 2: Fuentes, contrato, jornada, extinción y liquidación
  [
    ["Si un decreto reglamentario contradice una ley del Congreso, ¿qué norma prevalece?", "La ley del Congreso.", "El decreto, por ser posterior.", "Ambas dejan de tener aplicación automática.", "Los decretos reglamentarios están subordinados a las leyes y no pueden contradecirlas."],
    ["Un empleador sostiene que no hay contrato porque nunca se firmó nada. ¿Qué es correcto?", "La relación laboral puede existir igualmente si hay servicios dependientes y remuneración.", "Es indispensable un contrato escrito para que exista vínculo laboral.", "Solo se presume relación laboral si el empleado trabaja más de un año.", "La prestación de tareas bajo dependencia puede configurar relación laboral sin instrumento escrito."],
    ["En una jornada mixta de 8 horas hay 3 horas nocturnas. Según la regla del apunte, ¿cuánto debe reducirse?", "24 minutos.", "8 minutos en total.", "60 minutos.", "La reducción indicada en el apunte es de 8 minutos por cada hora nocturna: 3 × 8 = 24."],
    ["Un empleado deja de asistir al trabajo. ¿Qué requisito debe cumplirse para invocar abandono?", "Intimarlo fehacientemente a reincorporarse.", "Considerar extinguida la relación desde la primera ausencia sin comunicación.", "Esperar siempre seis meses sin requerir su regreso.", "El abandono requiere constitución en mora mediante intimación fehaciente (LCT, art. 244)."],
    ["Para obtener días de vacaciones proporcionales, el ejercicio del apunte utiliza...", "(Días trabajados en el año × días de vacaciones anuales) ÷ 360.", "(Sueldo mensual × años de servicio) ÷ 30.", "(Días trabajados en el semestre × 2) ÷ 180.", "Es el método didáctico del apunte de liquidación; no debe confundirse con el cálculo del valor monetario del día de vacaciones."],
    ["Si una ley no fija fecha expresa de entrada en vigor, ¿qué regla general establece el Código Civil y Comercial?", "Comienza a regir después del octavo día de su publicación oficial.", "Rige automáticamente desde la presentación del proyecto.", "Rige siempre a partir de los 30 días de su promulgación.", "Art. 5 CCyC: salvo previsión distinta, las leyes rigen después del octavo día de publicación oficial."],
    ["El empleador decide bajar unilateralmente el sueldo por un cambio organizativo. ¿Es un ius variandi válido?", "No; altera una condición esencial y perjudica al trabajador.", "Sí, cualquier modificación queda permitida si se informa.", "Sí, siempre que no se cambie el lugar de trabajo.", "El ius variandi exige razonabilidad, respeto de condiciones esenciales y ausencia de perjuicios (LCT, art. 66)."],
    ["En la legislación general vigente, ¿con cuántos días de anticipación deben notificarse por escrito las vacaciones?", "Al menos 30 días, salvo regímenes convencionales diferentes.", "Siempre 45 días, sin excepción.", "Solo 7 días cuando el empleado tiene menos de cinco años.", "El art. 154 LCT fue modificado por Ley 27.802: el plazo general es 30 días. El apunte anterior conserva 45 días."],
    ["El empleador decide despedir sin causa a quien tiene 7 años de antigüedad. ¿Qué plazo de preaviso corresponde fuera de prueba?", "Dos meses.", "Un mes.", "Quince días.", "Con más de cinco años de antigüedad el preaviso patronal es de dos meses (LCT, art. 231)."],
    ["En el ejercicio de liquidación, el SAC sobre la integración del mes de despido es...", "El importe de la integración dividido por 12.", "La integración multiplicada por 12.", "La integración dividida por 180, sin multiplicar por días.", "El apunte calcula el SAC accesorio sobre la integración como un doceavo, equivalente al 8,33 %."],
    ["Si una ley provincial entra en conflicto con un tratado internacional de derechos humanos aplicable, ¿qué prevalece?", "El tratado internacional.", "La ley provincial, por regular un territorio particular.", "Siempre el acto administrativo provincial más reciente.", "Los tratados aplicables tienen rango superior a las leyes, y los reconocidos con jerarquía constitucional comparten el máximo nivel."],
    ["El empleador deposita fondos para jubilación y obra social. ¿Cuál de estas afirmaciones es correcta?", "Debe ingresar tanto los aportes retenidos como sus propias contribuciones.", "Solo debe ingresar contribuciones una vez terminado el período de prueba.", "Los aportes se retienen al trabajador y no se depositan en ningún organismo.", "Aportes y contribuciones se cumplen desde el inicio del vínculo; se asignan a diversos subsistemas de seguridad social."],
    ["¿Qué recargo general corresponde por una hora extra trabajada un martes hábil?", "50 % sobre el valor habitual de la hora.", "100 % sobre el valor habitual de la hora.", "25 % sobre el valor habitual de la hora.", "El art. 201 LCT prevé un recargo del 50 % para horas extraordinarias en días comunes."],
    ["¿Qué conceptos se abonan si el despido con causa está realmente justificado?", "Los rubros obligatorios de la liquidación, sin indemnización por antigüedad.", "La indemnización por antigüedad y doble preaviso.", "Nada, ni siquiera los días trabajados.", "La justa causa excluye indemnización por antigüedad y preaviso sustitutivo, pero no elimina salarios, SAC ni vacaciones proporcionales."],
    ["En el ejemplo del apunte, un trabajador mensualizado despedido el día 10 de septiembre trabajó hasta el 9. ¿Qué días se pagan por septiembre?", "9 días trabajados.", "10 días trabajados.", "30 días trabajados sin considerar el despido.", "El ejemplo especifica que el día 10 ya no trabajó; el cálculo de días efectivamente trabajados se basa en nueve días."],
    ["¿Qué describe mejor a la jurisprudencia?", "Criterios que surgen de decisiones de los tribunales.", "Costumbres familiares repetidas sin significado jurídico.", "Instrucciones empresariales internas para controlar horarios.", "La jurisprudencia surge de fallos judiciales y puede orientar casos similares."],
    ["El empleador suspendió por la misma falta y luego quiere sancionar otra vez ese hecho. ¿Qué principio se vulnera?", "No aplicar dos sanciones por una misma falta.", "La obligación de registrar al trabajador.", "La preferencia de la norma posterior.", "Las sanciones deben ser justificadas y proporcionales; no corresponde duplicar el castigo por el mismo incumplimiento."],
    ["¿Cuántos días pagados de licencia por examen prevé el apunte como máximo anual?", "10 días al año, con hasta 2 por examen.", "21 días al año, con hasta 7 por examen.", "5 días al año, con 1 por examen.", "El apunte de licencias especiales contempla dos días por examen, con máximo de diez por año calendario."],
    ["¿Cuánto dura el período de prueba general del contrato por tiempo indeterminado?", "6 meses, sin perjuicio de ampliaciones convencionales permitidas.", "Siempre 3 meses sin excepciones.", "Siempre 12 meses en cualquier empresa.", "El art. 92 bis LCT fija seis meses como regla general y permite ampliar mediante convenio colectivo en determinados tamaños de empresa."],
    ["Un trabajador con 2 años y 2 meses de antigüedad supera la prueba y es despedido sin causa. ¿Cuántos sueldos base representan los años computables?", "2 sueldos base.", "3 sueldos base.", "4 sueldos base.", "La fracción de dos meses no supera los tres meses previstos por el art. 245 LCT; se computan dos años completos, antes de aplicar topes o particularidades."]
  ],
  // EXAMEN MIXTO 3: Fuentes, contrato, jornada, extinción y liquidación
  [
    ["Una norma general posterior contradice una norma especial anterior del mismo rango. ¿Cuál es la regla del apunte?", "La norma general posterior no deroga automáticamente a la especial.", "La general posterior siempre elimina toda norma especial.", "La norma especial pierde por completo su jerarquía.", "La especialidad puede prevalecer frente a una ley general posterior, salvo que se disponga válidamente su modificación."],
    ["Sobre la duración del contrato de trabajo, ¿cuál afirmación es correcta?", "Se presume por tiempo indeterminado, aunque existen modalidades determinadas válidas.", "Siempre debe fijarse por escrito un plazo de vencimiento.", "Solo es válido si tiene fecha cierta de terminación.", "El contrato se presume por tiempo indeterminado, con excepciones legales para modalidades por plazo determinado."],
    ["¿Cuál es el máximo general de la jornada íntegramente nocturna?", "7 horas diarias o 42 semanales.", "8 horas diarias o 48 semanales.", "9 horas diarias o 54 semanales.", "El régimen nocturno general va de 21 a 6 horas y tiene límite de siete horas diarias o cuarenta y dos semanales."],
    ["Un trabajador es despedido sin causa y sin preaviso el último día del mes, fuera de prueba. ¿Corresponde integración de ese mes?", "No, porque no quedan días del mes por integrar.", "Sí, necesariamente debe abonarse otro mes completo por integración.", "Sí, pero únicamente si el trabajador renuncia después.", "La integración procede por días faltantes cuando la extinción sin preaviso no coincide con el último día del mes (LCT, art. 233)."],
    ["Al extinguirse el contrato, ¿qué tres conceptos básicos deben revisarse en la liquidación final?", "Salarios pendientes, SAC proporcional y vacaciones no gozadas proporcionales.", "Indemnización por antigüedad, integración y preaviso en todos los casos.", "Únicamente salario del último día y contribuciones patronales.", "Los rubros obligatorios subsisten aunque el vínculo finalice por renuncia o despido justificado."],
    ["¿Cuál de las siguientes opciones contiene una fuente formal y no solo material del Derecho?", "Una ley sancionada por el Congreso.", "Una crisis económica que impulsa una reforma.", "Un cambio social que origina reclamos.", "La ley es una fuente formal; los hechos que originan su creación son fuentes materiales."],
    ["¿Durante el período de prueba deben efectuarse aportes y contribuciones a la seguridad social?", "Sí, desde el comienzo de la relación laboral.", "No, solo una vez superados los seis meses.", "Solo si el trabajador cumple una jornada nocturna.", "El período de prueba no elimina los deberes de registración ni de aportes y contribuciones (LCT, art. 92 bis)."],
    ["Una persona trabaja durante un feriado nacional. ¿Qué criterio general se aplica?", "Recibe el tratamiento salarial especial previsto para feriados trabajados.", "Recibe siempre el mismo pago que por un día ordinario, sin adicional.", "Solo le corresponde franco compensatorio, sin pago diferencial.", "El feriado nacional trabajado tiene una retribución especial; no debe confundirse con día no laborable ni descanso dominical."],
    ["¿Con qué anticipación debe preavisar el trabajador la renuncia, según la regla general de la LCT?", "15 días.", "Un mes.", "Dos meses.", "El art. 231 LCT señala quince días de preaviso por parte del trabajador."],
    ["Según el ejercicio simplificado, ¿cómo se obtiene el importe de integración del mes de despido?", "(Sueldo mensual ÷ 30) × días faltantes del mes.", "(Sueldo mensual ÷ 180) × días trabajados del semestre.", "(Sueldo mensual ÷ 12) × años de antigüedad.", "El apunte de liquidación calcula la integración sobre los días que faltan hasta fin de mes, cuando corresponda."],
    ["¿Para qué sirve principalmente un decreto reglamentario?", "Para precisar la ejecución de una ley sin contradecirla.", "Para modificar el texto de la Constitución mediante resolución administrativa.", "Para reemplazar libremente una ley del Congreso.", "Los decretos reglamentarios regulan detalles que permiten ejecutar la ley; no tienen superioridad jerárquica sobre ella."],
    ["¿Quién tiene el deber principal de brindar condiciones seguras y cobertura de riesgos del trabajo?", "El empleador.", "El trabajador, sin responsabilidad empresarial.", "El sindicato, en reemplazo de la empresa.", "El empleador debe proteger la salud y seguridad del personal y cumplir las obligaciones del sistema de riesgos del trabajo."],
    ["Si corresponde pagar una hora extraordinaria trabajada el domingo, ¿qué recargo establece la LCT?", "100 %.", "50 %.", "25 %.", "El art. 201 LCT señala un recargo del 100 % para horas suplementarias de domingos y feriados."],
    ["¿Qué sucede con la indemnización del artículo 245 ante fuerza mayor o falta de trabajo no imputable y debidamente justificada?", "En los casos legalmente previstos, puede reducirse al 50 %.", "Siempre se duplica, aunque la causa se pruebe.", "Desaparece toda obligación de liquidación final.", "El art. 247 LCT contempla indemnización reducida cuando se cumplen estrictamente sus requisitos y la causa se acredita."],
    ["¿Qué efecto tiene que el despido con causa se funde por escrito en una falta concreta?", "La causa comunicada no puede cambiarse luego en el juicio.", "El empleador puede reemplazarla por cualquier otra falta al demandar.", "El trabajador pierde el derecho a discutirla.", "La invariabilidad de la causa impide modificar judicialmente los motivos comunicados (LCT, art. 243)."],
    ["¿Cuándo puede la costumbre ser vinculante según el apunte sobre fuentes?", "Si la ley o las partes remiten a ella, o en supuestos no reglados, sin contrariar el Derecho.", "Siempre, incluso si contradice una prohibición legal expresa.", "Solo cuando se publica como decreto del Poder Ejecutivo.", "El art. 1 del CCyC reconoce usos, prácticas y costumbres bajo determinadas condiciones."],
    ["¿Qué obligación es característica del trabajador respecto de información confidencial de la empresa?", "Guardar reserva y actuar con fidelidad.", "Publicarla sin límites cuando cambie de horario.", "Compartirla con competidores si aún no renunció.", "El deber de fidelidad exige reserva de información cuyo conocimiento puede perjudicar al empleador."],
    ["¿Cuántos días corridos de vacaciones corresponden por regla general con 15 años de antigüedad?", "28 días.", "21 días.", "35 días.", "Con más de diez y hasta veinte años de antigüedad corresponden veintiocho días corridos."],
    ["Un empleador despide sin causa, fuera de prueba, a quien tiene 4 años de antigüedad. ¿Qué plazo general de preaviso le correspondería?", "1 mes.", "15 días.", "2 meses.", "La LCT establece un mes de preaviso patronal para antigüedad que no supera cinco años (art. 231)."],
    ["¿Cuál es la diferencia entre las vacaciones pendientes durante la relación y las proporcionales al extinguirse?", "En general, durante el vínculo deben gozarse; al extinguirse se compensan proporcionalmente.", "Durante el vínculo siempre se reemplazan por dinero a elección del empleador.", "Al extinguirse se pierden automáticamente sin pago.", "Las vacaciones tienen finalidad de descanso; al terminar el contrato corresponde compensar las no gozadas en proporción al tiempo de servicio."]
  ]
].map(examen => examen.map(([q, correcta, incorrecta1, incorrecta2, explicacion]) => ({
  q, choices: [correcta, incorrecta1, incorrecta2], ex: explicacion
})));


// EXAMEN 4: ESPECIAL - PREGUNTAS DEL PROFESOR (20 preguntas, dos fotos).
// Se conservan 2 o 3 opciones del modelo; una alternativa ambigua de renuncia fue ajustada para tener una sola respuesta válida.
// Algunas aparecen en ambas hojas: se mantienen porque integran el material fotografiado.
// Las respuestas correctas se guardan en la primera posicion para la web original,
// que aleatoriza tanto preguntas como opciones al iniciar/repetir.
EXAMS.push([
  // Primera hoja: "Legislacion y Derecho Laboral - 3er Ano".
  [
    '¿Los principios y normas de la Constitución Nacional qué posición ocupan en la pirámide estructural o jurídica de nuestro país?',
    ['Están por encima de las leyes emanadas del Congreso y/o decretos dictados por el Poder Ejecutivo.', 'Están en la misma posición que las leyes y/o decretos.', 'Están por debajo de las leyes sancionadas por el Congreso y/o decretos presidenciales.'],
    0,
    'La Constitución Nacional es la norma suprema del ordenamiento jurídico.'
  ],
  [
    '¿Qué jerarquía tienen los distintos tratados internacionales aprobados por el Congreso referentes a la Propiedad Intelectual?',
    ['Constitucional.', 'Supraconstitucional.', 'Infraconstitucional.'],
    2,
    'Según el material, estos tratados se ubican debajo de la Constitución y por encima de las leyes: jerarquía infraconstitucional y supralegal.'
  ],
  [
    'En caso de controversia entre una ley provincial y un tratado internacional de derechos humanos, ¿cuál prevalece?',
    ['La ley provincial.', 'El tratado internacional de derechos humanos.', 'Coexisten ambos.'],
    1,
    'En la jerarquía presentada, los tratados internacionales tienen rango superior a las leyes provinciales.'
  ],
  [
    '¿El contrato de trabajo se perfecciona cuando el trabajador empieza a prestar servicios para y bajo la dependencia de otra persona sin ningún tipo de formalidad?',
    ['Sí, porque es un contrato consensual no formal.', 'No, es necesario que se realice por escrito.'],
    0,
    'La relación laboral puede existir sin contrato escrito: es suficiente la prestación bajo dependencia y remuneración.'
  ],
  [
    'Según la consigna fotografiada del profesor, la registración de un trabajador por parte del empleador:',
    ['Es una obligación legal de todo empleador que debe cumplir dentro de las 24 horas de haber incorporado a su empresa a su nuevo empleado.', 'Es una obligación legal de todo empleador que debe cumplir dentro de los 6 meses, atendiendo que en el período de prueba puede despedir al trabajador sin que este deba ser indemnizado.'],
    0,
    'RESPUESTA DEL EXAMEN FOTOGRAFIADO: 24 horas. ATENCIÓN: la regla vigente de ARCA exige comunicar el alta hasta el día anterior al inicio de las tareas, salvo ciertas actividades que admiten comunicarla hasta el comienzo. Nunca se espera seis meses ni hasta el final del período de prueba.'
  ],
  [
    '¿Puede una persona jurídica celebrar un contrato de trabajo con una empresa, actuando como trabajadora?',
    ['Sí puede, siempre y cuando esté compuesta por menos de tres socios.', 'No puede. El trabajador siempre tiene que ser una persona física.'],
    1,
    'En un contrato de trabajo, la parte trabajadora debe ser una persona física; el empleador sí puede ser persona jurídica.'
  ],
  [
    '¿La principal obligación del empleador es el pago de la remuneración?',
    ['No, porque en ocasiones el contrato de trabajo se presume gratuito.', 'Sí, porque el trabajador depende de ella para su subsistencia.'],
    1,
    'El pago de la remuneración es una obligación fundamental del empleador y un derecho del trabajador.'
  ],
  [
    'Según la consigna fotografiada del profesor (versión anterior a la Ley 27.802), ¿en qué plazo debe preavisar el empleador en período de prueba?',
    ['6 meses.', '1 año.', '15 días.'],
    2,
    'RESPUESTA HISTÓRICA DEL EXAMEN DEL PROFESOR: 15 días. ATENCIÓN: la Ley 27.802, vigente desde marzo de 2026, modificó el artículo 231 LCT: durante el período de prueba ya no se exige preaviso. Se conserva la opción de la fotografía para practicar ese modelo, no porque sea la regla vigente.'
  ],
  [
    'La renuncia al contrato de trabajo:',
    ['Permite que el trabajador pueda cobrar algún tipo de indemnización.', 'El trabajador no cobra ninguna suma al finalizar el vínculo.', 'El trabajador solo cobra los rubros de pago obligatorio.'],
    2,
    'La correcta es la opción más completa: liquidación de rubros obligatorios, sin indemnización por antigüedad por la renuncia. Se ajustó la segunda alternativa de la foto, ya que «no cobra ningún tipo de indemnización» también podía interpretarse como verdadera y generaba dos respuestas posibles.'
  ],
  [
    'En el despido indirecto:',
    ['Es el empleador quien prescinde de los servicios laborales del trabajador.', 'Es el trabajador quien extingue la relación laboral.'],
    1,
    'El trabajador se considera despedido cuando el empleador incurre en un incumplimiento grave.'
  ],
  // Segunda hoja.
  [
    'Según la consigna fotografiada del profesor, la registración de un trabajador por parte del empleador:',
    ['Es una obligación legal de todo empleador que debe cumplir dentro de los 6 meses, atendiendo que en el período de prueba puede despedir al trabajador sin que este deba ser indemnizado.', 'Es una obligación legal de todo empleador que debe cumplir dentro de las 24 horas de haber incorporado a su empresa a su nuevo empleado.'],
    1,
    'RESPUESTA DEL EXAMEN FOTOGRAFIADO: 24 horas. La obligación existe desde el comienzo, pero ARCA exige como regla general alta hasta el día anterior al inicio de tareas y contempla excepciones por actividad. No corresponde esperar al fin del período de prueba.'
  ],
  [
    '¿El contrato de trabajo se perfecciona cuando el trabajador empieza a prestar servicios para y bajo la dependencia de otra persona sin ningún tipo de formalidad?',
    ['No, es necesaria la inscripción del contrato ante AFIP.', 'Sí, porque es un contrato consensual no formal.'],
    1,
    'Un contrato laboral puede existir sin estar instrumentado por escrito.'
  ],
  [
    '¿Puede una persona jurídica celebrar contrato de trabajo con una empresa, actuando como trabajadora?',
    ['No puede. El trabajador siempre tiene que ser una persona física.', 'Sí puede, siempre y cuando esté compuesta por menos de tres socios.'],
    0,
    'El trabajador debe ser una persona física; el empleador puede ser físico o jurídico.'
  ],
  [
    '¿La principal obligación del empleador es el pago de la remuneración?',
    ['No, porque en ocasiones el contrato de trabajo se presume gratuito.', 'Sí, porque el trabajador depende de ella para su subsistencia.'],
    1,
    'La remuneración es un componente esencial del contrato laboral.'
  ],
  [
    '¿El contrato de trabajo se entiende que es siempre por tiempo indeterminado?',
    ['Sí. Siempre es por tiempo indeterminado.', 'No, hay ocasiones en que puede ser por tiempo determinado.'],
    1,
    'El contrato se presume por tiempo indeterminado, pero existen modalidades válidas por tiempo determinado.'
  ],
  [
    'El contrato de trabajo a plazo fijo:',
    ['Puede ser solo a plazo cierto.', 'Puede ser solo a plazo incierto.', 'Puede ser a plazo cierto y/o incierto.'],
    0,
    'Correcta: solo a plazo cierto. El contrato a plazo fijo del art. 93 LCT vence al concluir el plazo pactado; el eventual es una modalidad diferente, dependiente de la situación o tarea transitoria. No confundir plazo fijo con contrato temporal genérico.'
  ],
  [
    '¿El contrato de trabajo es sinalagmático?',
    ['Sí, porque a cada derecho de una de las partes le corresponde una obligación de la otra.', 'No. Solo excepcionalmente en algunos contratos de trabajo se produce una relación sinalagmática entre trabajador y empleador.'],
    0,
    'Sinalagmático significa que las obligaciones son recíprocas: prestar tareas y pagar remuneración, entre otras.'
  ],
  [
    'Los aportes y contribuciones que el empleador debe hacerle al trabajador:',
    ['Debe realizarlos desde el comienzo de la relación laboral.', 'Debe realizarlos pasados 6 meses de haber tomado al trabajador, atento que ya se cumplió el período de prueba.'],
    0,
    'Aportes y contribuciones corresponden desde el inicio del vínculo laboral.'
  ],
  [
    'Los aportes a los sistemas de seguridad social (ANSES):',
    ['Son descuentos que el empleador hace al trabajador de su recibo de haberes.', 'Son contribuciones que el empleador debe hacer sin descontarle nada al trabajador.'],
    0,
    'Los aportes personales se descuentan de la remuneración; las contribuciones patronales las paga el empleador.'
  ],
  [
    'Los aportes y contribuciones:',
    ['Están destinados solo a los organismos de la seguridad social (ANSES).', 'Están destinados a distintos organismos, entre ellos ANSES.'],
    1,
    'Los aportes y contribuciones se destinan a distintos subsistemas y organismos de seguridad social.'
  ]
].map(([q, opcionesOriginales, indiceCorrecto, explicacion]) => ({
  q,
  choices: [opcionesOriginales[indiceCorrecto], ...opcionesOriginales.filter((_, i) => i !== indiceCorrecto)],
  ex: explicacion
})));

// Adaptacion para la web anterior: al reemplazar solo questions.js, aparece
// automaticamente la cuarta tarjeta y se conserva su titulo al avanzar.
// Este codigo NO cambia la logica de seleccion ni el orden aleatorio de app.js.
(function activarExamenDelProfesor() {
  const instalar = () => {
    const tarjetas = document.querySelector('#home .cards');
    if (!tarjetas || tarjetas.querySelector('[data-exam="3"]')) return;

    const nueva = document.createElement('button');
    nueva.type = 'button';
    nueva.className = 'exam exam-profesor';
    nueva.dataset.exam = '3';
    nueva.innerHTML = '<span class="number">04 · ESPECIAL</span><strong>Examen del profesor</strong><small>20 preguntas de las fotografías, con las opciones originales. Algunas se repiten como en los modelos.</small><span class="start">Comenzar examen especial →</span>';
    tarjetas.appendChild(nueva);

    const estilo = document.createElement('style');
    estilo.textContent = '.exam-profesor{border:2px solid #d6a85d;background:linear-gradient(145deg,#2e2840,#1b253b)}.exam-profesor .number,.exam-profesor .start{color:#f3c77a}.exam-profesor:hover{border-color:#ffe1a8}';
    document.head.appendChild(estilo);

    const nombres = [
      ['Examen mixto 1', '20 preguntas variadas · Fuentes, contrato, jornada, despidos y liquidación'],
      ['Examen mixto 2', '20 preguntas variadas · Casos y conceptos de los cinco apuntes'],
      ['Examen mixto 3', '20 preguntas variadas · Dificultad similar al profesor']
    ];
    nombres.forEach(([titulo, detalle], i) => {
      const tarjeta = tarjetas.querySelector(`[data-exam="${i}"]`);
      if (!tarjeta) return;
      const nombre = tarjeta.querySelector('strong');
      const descripcion = tarjeta.querySelector('small');
      if (nombre) nombre.textContent = titulo;
      if (descripcion) descripcion.textContent = detalle;
    });

    const descripcion = document.querySelector('header p');
    if (descripcion) descripcion.textContent = '4 exámenes de 20 preguntas. Los tres primeros mezclan todos los temas y tienen 3 opciones. El cuarto reúne preguntas del profesor. Las preguntas y opciones cambian de orden en cada intento.';
    const subtitulo = document.querySelector('header .eyebrow');
    if (subtitulo) subtitulo.textContent = 'MANUAL DE ESTUDIO · 5 APUNTES';
    const nota = document.querySelector('#home .note');
    if (nota) nota.textContent = 'Exámenes 1 a 3: cinco apuntes combinados, con respuestas contrastadas con la normativa vigente. Examen 4: modelo histórico fotografiado del profesor, con aclaraciones donde difiere de la ley vigente.';

    // app.js contiene los titulos de sus tres examenes originales.
    // Reemplazamos solo la funcion de visualizacion para mostrar el nuevo titulo.
    if (typeof render === 'function') {
      const renderOriginal = render;
      render = function (...args) {
        renderOriginal(...args);
        const tema = document.getElementById('topic');
        if (tema) tema.textContent = exam === 3
          ? 'EXAMEN 4 · PREGUNTAS DEL PROFESOR'
          : `EXAMEN MIXTO ${exam + 1} · TODOS LOS TEMAS`;
      };
    }

    // Funciona aunque app.js ya haya asignado eventos a las tarjetas previas.
    nueva.onclick = () => start(3);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', instalar);
  } else {
    instalar();
  }
})();
