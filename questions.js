// Preguntas basadas exclusivamente en Manual_Derecho_Laboral_Para_Escuchar.txt.
// Compatible con la web original: EXAMS contiene 4 examenes de 20 preguntas.
// IMPORTANTE: la PRIMERA opcion de cada pregunta es la correcta.
// app.js mezcla automaticamente preguntas y opciones (2, 3 o 4 segun el examen).
const EXAMS = [
  // EXAMEN 1: FUENTES DEL DERECHO Y RELACION LABORAL
  [
    ['¿Qué son las fuentes materiales del Derecho?', 'Hechos sociales, políticos o económicos que impulsan normas', 'Documentos que contienen únicamente sentencias', 'Decretos dictados por el Poder Ejecutivo', 'Costumbres sin influencia jurídica', 'Las fuentes materiales son acontecimientos que motivan la creación de normas.'],
    ['¿Qué son las fuentes formales del Derecho?', 'Normas jurídicas reconocidas por el sistema', 'Factores económicos que impulsan una ley', 'Opiniones personales de los legisladores', 'Cambios tecnológicos sin regulación', 'Las fuentes formales expresan el Derecho mediante normas reconocidas.'],
    ['¿Qué ocupa el nivel superior de la pirámide de Kelsen según el manual?', 'La Constitución Nacional y los tratados con jerarquía constitucional', 'Los decretos reglamentarios', 'Las sentencias judiciales', 'Las leyes ordinarias', 'En la máxima jerarquía se encuentran la Constitución y los tratados de jerarquía constitucional.'],
    ['¿Cómo se ubican los restantes tratados internacionales respecto de las leyes?', 'Tienen jerarquía superior a las leyes', 'Están por debajo de los decretos', 'Tienen la misma jerarquía que la costumbre', 'Son siempre inferiores a las leyes', 'El manual sitúa los tratados restantes por encima de las leyes.'],
    ['¿En qué año fue la última reforma de la Constitución Nacional mencionada en el manual?', '1994', '1983', '2001', '1853', 'El manual identifica 1994 como la última reforma constitucional.'],
    ['¿Cuál es la definición de ley utilizada en el manual?', 'Norma escrita sancionada por autoridad competente', 'Práctica reiterada sin reconocimiento jurídico', 'Opinión de un juez sin efectos jurídicos', 'Acuerdo verbal sin valor normativo', 'La ley es una norma escrita dictada por la autoridad competente.'],
    ['Como regla general, ¿cuándo entra en vigencia una ley si no establece otra fecha?', 'Después del octavo día de su publicación oficial', 'En el momento en que se presenta el proyecto', 'Treinta días después de su sanción en todos los casos', 'El mismo día que un juez la aplica por primera vez', 'El manual indica la regla del octavo día posterior a la publicación oficial.'],
    ['¿Para qué sirve principalmente un decreto reglamentario?', 'Para desarrollar la aplicación de una ley', 'Para reemplazar automáticamente a la Constitución', 'Para anular cualquier sentencia judicial', 'Para cambiar una ley sin límites', 'Un decreto reglamentario desarrolla cómo debe aplicarse una ley.'],
    ['¿Cuál de estas materias NO puede regular un DNU según el manual?', 'Materia penal', 'Organización administrativa de una emergencia, cuando corresponda', 'Medidas extraordinarias permitidas por la Constitución', 'Cuestiones excepcionales fuera de las materias prohibidas', 'El manual excluye de los DNU la materia penal, tributaria, electoral y el régimen de partidos políticos.'],
    ['¿Qué describe mejor a la jurisprudencia?', 'Criterios que surgen de decisiones judiciales', 'Prácticas comerciales reiteradas', 'Aportes descontados del salario', 'Decretos sobre la aplicación de leyes', 'La jurisprudencia surge de las decisiones de los tribunales.'],
    ['¿Qué es la costumbre como fuente del Derecho?', 'Una práctica reiterada que puede ser reconocida jurídicamente', 'Una norma dictada obligatoriamente por el Congreso', 'Una decisión del empleador sobre horarios', 'Un decreto aprobado por un juez', 'La costumbre es una práctica reiterada con valor jurídico cuando el Derecho la reconoce.'],
    ['Si dos normas de distinta jerarquía entran en conflicto, ¿cuál prevalece?', 'La norma de mayor jerarquía', 'La que tiene más artículos', 'Siempre la dictada por un municipio', 'La que fue publicada primero, sin excepciones', 'El principio jerárquico hace prevalecer la norma superior.'],
    ['Entre normas del mismo rango, ¿cuál es la regla general indicada?', 'La norma posterior desplaza a la anterior', 'La norma anterior siempre es intocable', 'Ambas pierden automáticamente su validez', 'Prevalece siempre la norma más extensa', 'Como regla general, la norma posterior desplaza a la anterior.'],
    ['¿Qué ocurre con una norma especial anterior frente a una norma general posterior?', 'No queda automáticamente derogada', 'Queda siempre derogada sin analizar nada', 'Pasa a tener jerarquía constitucional', 'Se convierte automáticamente en decreto', 'El manual destaca que la regla general de posterioridad tiene una excepción para la norma especial.'],
    ['¿Qué caracteriza a un contrato de trabajo?', 'Prestación de servicios bajo dependencia a cambio de remuneración', 'Trabajo gratuito sin dependencia', 'Compraventa de un producto terminado entre consumidores', 'Ausencia de tareas y de remuneración', 'Dependencia, servicios y remuneración son los elementos destacados.'],
    ['¿Puede existir un contrato de trabajo verbal?', 'Sí, puede ser verbal o escrito', 'No, siempre debe redactarse ante un juez', 'No, únicamente existe mediante escritura pública', 'Sí, pero solo cuando no hay remuneración', 'El manual aclara que el contrato puede ser escrito o verbal.'],
    ['¿Qué implica el orden público laboral?', 'Que un acuerdo privado no puede eliminar derechos mínimos del trabajador', 'Que cualquier contrato puede eliminar vacaciones', 'Que el trabajador puede renunciar a todas las garantías legales', 'Que solo se aplican las normas si están escritas en el contrato', 'El orden público impide pactar la eliminación de derechos mínimos.'],
    ['¿Quién debe registrar la relación laboral ante ARCA?', 'El empleador', 'El trabajador en forma exclusiva', 'El cliente del empleador', 'El sindicato en reemplazo de cualquier registración patronal', 'La registración de la relación laboral es una obligación del empleador.'],
    ['¿Cuál es la diferencia entre aportes personales y contribuciones patronales?', 'Los aportes se descuentan al trabajador y las contribuciones las paga el empleador', 'Ambos son pagados exclusivamente por el trabajador', 'Ambos se descuentan al trabajador sin distinción', 'Las contribuciones son descuentos del trabajador y los aportes son pagos de clientes', 'El manual diferencia los descuentos personales de los pagos a cargo del empleador.'],
    ['¿Cuándo es válido ejercer el ius variandi según el manual?', 'Cuando el cambio es razonable, no altera condiciones esenciales ni perjudica al trabajador', 'Cuando el empleador reduce libremente el salario', 'Cuando el cambio causa un perjuicio material al trabajador', 'Cuando se elimina unilateralmente cualquier derecho laboral', 'El ius variandi está limitado por razonabilidad, condiciones esenciales y ausencia de perjuicio.']
  ],
  // EXAMEN 2: DERECHOS, JORNADA, DESCANSOS, VACACIONES Y LICENCIAS
  [
    ['¿Cuál de estas es una obligación del trabajador?', 'Actuar con diligencia y buena fe', 'Registrar a todo el personal ante ARCA', 'Abonar las contribuciones patronales', 'Determinar el período legal de vacaciones', 'El manual incluye diligencia, buena fe y obediencia legítima entre las obligaciones del trabajador.'],
    ['¿Qué puede hacer el empleador ante incumplimientos, según el poder disciplinario?', 'Aplicar sanciones justificadas y proporcionales', 'Castigar dos veces por una misma falta', 'Sancionar sin necesidad de motivo', 'Eliminar derechos mínimos mediante una sanción', 'Las sanciones requieren justificación, proporcionalidad y ausencia de duplicidad.'],
    ['Según el apunte, ¿cuántos días corridos tiene el trabajador para impugnar una sanción?', '30 días', '7 días', '90 días', '5 días', 'El manual indica un plazo de treinta días corridos.'],
    ['¿Cómo se define la jornada de trabajo?', 'Tiempo en que el trabajador está a disposición del empleador', 'Únicamente el tiempo empleado en viajar de casa al trabajo', 'El descanso anual completo', 'Solo las horas en que el empleado recibe visitas', 'La jornada comprende el tiempo de disponibilidad para el empleador.'],
    ['¿En qué horario se desarrolla la jornada diurna según el manual?', 'De 6 a 21 horas', 'De 21 a 6 horas', 'De 0 a 12 horas', 'De 18 a 24 horas', 'El horario diurno indicado es de seis a veintiuna horas.'],
    ['¿Cuál es el máximo general de la jornada diurna?', '8 horas diarias o 48 semanales', '7 horas diarias o 42 semanales', '10 horas diarias o 60 semanales', '6 horas diarias o 36 semanales', 'El manual fija para el régimen diurno ocho horas diarias o cuarenta y ocho semanales.'],
    ['¿Cuál es el horario nocturno establecido en el manual?', 'De 21 a 6 horas', 'De 6 a 21 horas', 'De 9 a 18 horas', 'De 14 a 20 horas', 'La jornada nocturna va de las veintiuna a las seis del día siguiente.'],
    ['¿Cuál es el máximo general de la jornada nocturna?', '7 horas diarias o 42 semanales', '8 horas diarias o 48 semanales', '9 horas diarias o 54 semanales', '6 horas diarias o 48 semanales', 'El manual indica siete horas diarias o cuarenta y dos semanales.'],
    ['En la jornada mixta, ¿cuánto se reduce por cada hora nocturna?', '8 minutos', '15 minutos', '30 minutos', '1 hora', 'Por cada hora nocturna se reducen ocho minutos de la jornada de ocho horas.'],
    ['¿Qué recargo tienen las horas extras trabajadas en días hábiles?', '50 %', '10 %', '25 %', '100 % en todos los casos', 'El recargo para horas extras en días hábiles es del cincuenta por ciento.'],
    ['¿Qué recargo corresponde a horas extras de domingos o feriados, cuando se consideran extraordinarias?', '100 %', '50 %', '20 %', 'Ninguno', 'El manual señala el cien por ciento para esas horas extras.'],
    ['Según los límites generales del apunte, ¿cuál es el máximo mensual de horas extras?', '30 horas', '12 horas', '48 horas', '200 horas', 'El apunte menciona tres diarias, treinta mensuales y doscientas anuales.'],
    ['¿Qué sucede al trabajar un domingo?', 'No implica automáticamente horas extras; puede corresponder franco compensatorio', 'Siempre se pagan horas extras sin analizar la jornada', 'Se pierden las vacaciones anuales', 'Nunca se reconoce descanso compensatorio', 'El trabajo dominical no se convierte automáticamente en tiempo extraordinario.'],
    ['¿Cuánto descanso mínimo debe haber entre jornadas?', '12 horas', '6 horas', '8 horas', '24 horas', 'El descanso entre jornadas debe ser de al menos doce horas.'],
    ['¿Cuál es el descanso semanal general mencionado?', '35 horas consecutivas', '12 horas consecutivas', '15 horas consecutivas', '48 horas obligatorias en todos los casos', 'El manual establece como regla general treinta y cinco horas consecutivas.'],
    ['¿Cuántos días de vacaciones corresponden con 3 años de antigüedad?', '14 días corridos', '21 días corridos', '28 días corridos', '35 días corridos', 'Con menos de cinco años de antigüedad corresponden catorce días.'],
    ['¿Cuántos días de vacaciones corresponden con 8 años de antigüedad?', '21 días corridos', '14 días corridos', '28 días corridos', '35 días corridos', 'Entre cinco y diez años, el manual indica veintiún días.'],
    ['¿Cuántos días de vacaciones corresponden con 15 años de antigüedad?', '28 días corridos', '14 días corridos', '21 días corridos', '35 días corridos', 'Entre diez y veinte años corresponden veintiocho días.'],
    ['¿Qué corresponde si no se trabajó la mitad de los días hábiles del año para vacaciones completas?', '1 día de vacaciones por cada 20 días efectivamente trabajados', '35 días de vacaciones automáticamente', 'Ningún descanso bajo ninguna circunstancia', '2 días de vacaciones por cada 5 días trabajados', 'El manual señala un día por cada veinte días efectivamente trabajados.'],
    ['¿Cuántos días de licencia por matrimonio establece el apunte?', '10 días corridos', '2 días corridos', '3 días corridos', '20 días corridos', 'El manual contempla diez días corridos por matrimonio.']
  ],
  // EXAMEN 3: EXTINCION DEL CONTRATO, PREAVISO Y LIQUIDACION FINAL
  [
    ['¿Qué ocurre con la indemnización por antigüedad cuando el trabajador renuncia?', 'No corresponde indemnización por antigüedad', 'Se duplica automáticamente', 'Equivale siempre a cinco sueldos', 'Se paga como en todo despido sin causa', 'La renuncia genera rubros obligatorios, no indemnización por antigüedad.'],
    ['¿Qué exige un despido con causa?', 'Un incumplimiento grave que el empleador debe comunicar y probar', 'Una decisión verbal sin motivo alguno', 'El simple deseo del empleador de reducir gastos', 'Que el trabajador haya solicitado vacaciones', 'El despido con causa exige una falta grave debidamente comunicada y probada.'],
    ['Si un despido con causa está justificado, ¿qué indemnizaciones NO corresponden?', 'Antigüedad y sustitutiva de preaviso', 'Salarios pendientes y SAC proporcional', 'Vacaciones proporcionales y salarios pendientes', 'Todos los rubros obligatorios de la liquidación final', 'Con causa justificada no se abonan antigüedad ni preaviso sustitutivo, pero sí rubros obligatorios.'],
    ['¿Qué caracteriza a un despido sin causa?', 'Da derecho a indemnización por antigüedad y otros rubros según corresponda', 'Obliga al trabajador a no cobrar salarios pendientes', 'Elimina cualquier derecho a liquidación', 'Siempre es una renuncia encubierta', 'El despido sin causa genera indemnización por antigüedad y, según el caso, otros rubros.'],
    ['¿Qué es el despido indirecto?', 'El trabajador se considera despedido por incumplimiento grave del empleador', 'Una renuncia sin incumplimiento de nadie', 'El retiro del empleador por jubilación', 'El fin normal de las vacaciones', 'En el despido indirecto el trabajador extingue el vínculo por una injuria grave patronal.'],
    ['¿Qué se requiere para configurar abandono de trabajo según el manual?', 'Intimación previa al trabajador para que se reincorpore', 'Una inasistencia aislada sin ninguna comunicación', 'El vencimiento de un feriado', 'Que el empleador decida no otorgar vacaciones', 'El material exige intimación previa a reincorporarse.'],
    ['¿Cuál es el período de prueba general mencionado en las partes actualizadas del apunte?', '6 meses', '1 mes', '12 meses', '24 meses', 'El manual de audio utiliza seis meses de período de prueba.'],
    ['Durante el período de prueba, ¿qué señala el manual acerca de la indemnización por antigüedad?', 'No corresponde indemnización por antigüedad', 'Corresponde siempre el doble', 'Corresponde automáticamente un sueldo por mes', 'Es obligatoria aunque no exista despido', 'El manual indica que durante el período de prueba no corresponde indemnización por antigüedad.'],
    ['¿Con qué anticipación debe preavisar el trabajador según el manual?', '15 días', '1 mes', '2 meses', '45 días', 'El trabajador debe preavisar con quince días.'],
    ['Según la Ley 27.802 vigente, ¿qué preaviso debe dar el empleador durante el período de prueba?', 'No se exige preaviso', '15 días', '1 mes', '2 meses', 'ACTUALIZACIÓN LEGAL: el artículo 231 LCT, modificado por la Ley 27.802 en marzo de 2026, eliminó la obligación de preavisar en período de prueba. El apunte usado en clase todavía dice 15 días.'],
    ['¿Cuánto debe preavisar el empleador con una antigüedad de 4 años?', '1 mes', '15 días', '2 meses', '6 meses', 'Con hasta cinco años de antigüedad, corresponde un mes de preaviso.'],
    ['¿Cuánto debe preavisar el empleador con 7 años de antigüedad?', '2 meses', '15 días', '1 mes', '3 días', 'Con más de cinco años de antigüedad, el preaviso es de dos meses.'],
    ['Según el resumen del artículo 245, ¿cómo se calcula la indemnización por antigüedad?', '1 sueldo base por año trabajado o fracción mayor de 3 meses', '1 sueldo por cada 6 meses sin condiciones', '1 sueldo por cada día trabajado', 'Un importe igual en todos los contratos', 'El manual resume un sueldo base por año o fracción mayor de tres meses, con límites aplicables.'],
    ['Para la indemnización por antigüedad, ¿cuántos años se computan si alguien trabajó 2 años y 4 meses?', '3 años', '2 años', '4 años', '1 año', 'La fracción de cuatro meses es mayor de tres meses, por lo que se computa otro año.'],
    ['¿Qué rubros corresponden en toda extinción del contrato según el manual?', 'Salarios pendientes, SAC proporcional y vacaciones proporcionales no gozadas', 'Solo indemnización por antigüedad', 'Únicamente preaviso no otorgado', 'Exclusivamente integración del mes de despido', 'Esos tres conceptos integran la liquidación obligatoria de cualquier extinción.'],
    ['¿Cómo se calculan los días trabajados en el ejemplo del apunte?', 'Sueldo dividido por 30, multiplicado por días trabajados', 'Sueldo multiplicado por 180', 'Sueldo dividido por 12, sin más cálculos', 'Sueldo multiplicado por los años de antigüedad', 'El ejemplo utiliza sueldo sobre treinta por días trabajados.'],
    ['¿Qué representa la integración del mes de despido?', 'La remuneración de días faltantes hasta fin de mes, cuando corresponde', 'Un premio por asistencia perfecta', 'El salario correspondiente a todo el año siguiente', 'Un descuento salarial obligatorio', 'La integración cubre los días que faltan hasta terminar el mes en los casos previstos.'],
    ['En el ejercicio simplificado del apunte, ¿cómo se calcula el SAC proporcional?', '(Mitad del sueldo ÷ 180) × días trabajados en el semestre', 'Sueldo completo × 12', 'Sueldo dividido por 25 × antigüedad', 'Mitad del sueldo × 360, sin dividir', 'El manual presenta mitad del sueldo sobre ciento ochenta, multiplicado por días del semestre.'],
    ['¿Cómo se obtiene el SAC sobre la integración del mes según el manual?', 'Integración del mes dividida por 12', 'Integración multiplicada por 30', 'Sueldo dividido por 360 y nada más', 'Integración dividida por 2', 'El SAC sobre integración se calcula dividiendo su importe por doce.'],
    ['En el ejemplo del apunte, ¿cómo se calculan los días de vacaciones proporcionales?', '(Días trabajados × días anuales de vacaciones) ÷ 360', 'Días trabajados × 180', 'Sueldo × 12', 'Antigüedad dividida por 2', 'El ejercicio multiplica días trabajados por vacaciones anuales y divide entre trescientos sesenta.']
  ]
].map(examen => examen.map(([q, correcta, incorrecta1, incorrecta2, incorrecta3, explicacion]) => ({
  q,
  choices: [correcta, incorrecta1, incorrecta2, incorrecta3],
  ex: explicacion
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

    const descripcion = document.querySelector('header p');
    if (descripcion) descripcion.textContent = '4 exámenes de 20 preguntas. Los tres primeros son temáticos y el cuarto reúne preguntas reales del profesor. En cada intento cambia el orden de preguntas y respuestas.';
    const subtitulo = document.querySelector('header .eyebrow');
    if (subtitulo) subtitulo.textContent = 'MANUAL DE ESTUDIO · 5 APUNTES';
    const nota = document.querySelector('#home .note');
    if (nota) nota.textContent = 'Exámenes 1 a 3: manual de Derecho Laboral. Examen 4: preguntas fotografiadas del profesor. Material para practicar con el enfoque de clase.';

    // app.js contiene los titulos de sus tres examenes originales.
    // Reemplazamos solo la funcion de visualizacion para mostrar el nuevo titulo.
    if (typeof render === 'function') {
      const renderOriginal = render;
      render = function (...args) {
        renderOriginal(...args);
        if (exam === 3) {
          const tema = document.getElementById('topic');
          if (tema) tema.textContent = 'EXAMEN 4 · PREGUNTAS DEL PROFESOR';
        }
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
