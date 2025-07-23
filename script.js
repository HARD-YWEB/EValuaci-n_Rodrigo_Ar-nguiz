const questions = [
    {
        question: "¿A qué temperatura aproximada se transporta el Nitrógeno Líquido (LIN)?",
        answers: {
            a: "-183°C",
            b: "-196°C",
            c: "-25°C",
            d: "0°C"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el principal riesgo asociado al contacto con gases criogénicos y tuberías subenfriadas?",
        answers: {
            a: "Explosiones químicas",
            b: "Quemaduras criogénicas",
            c: "Intoxicación",
            d: "Incendios incontrolables"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la meta principal de la política de Salud, Seguridad y Medio Ambiente (HSE) de Linde?",
        answers: {
            a: "Aumentar la producción de gases criogénicos.",
            b: "Garantizar que sus acciones no causen daños sobre las personas, el medio ambiente o las comunidades.",
            c: "Reducir los costos de transporte.",
            d: "Expandir su presencia en el mercado global."
        },
        correctAnswer: "b"
    },
    {
        question: "Según los principios de seguridad de Linde, ¿quién es responsable de su propia seguridad y la de quienes le rodean?",
        answers: {
            a: "Solo la dirección de la empresa.",
            b: "Cada individuo.",
            c: "Únicamente los contratistas.",
            d: "Los clientes."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué deben hacer los empleados y contratistas si un trabajo no puede llevarse a cabo de forma segura, según los principios de Linde?",
        answers: {
            a: "Continuar con el trabajo y reportarlo después.",
            b: "Detener o negarse a realizar el trabajo.",
            c: "Buscar una solución por su cuenta sin notificar a nadie.",
            d: "Delegar el trabajo a otra persona."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el principal riesgo de los gases criogénicos debido a su estado líquido y baja temperatura?",
        answers: {
            a: "Incendios incontrolables.",
            b: "Explosiones químicas.",
            c: "Quemaduras por contacto con el líquido frío, equipos y tuberías subenfriadas, y gas frío.",
            d: "Contaminación del producto."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué volumen de gas puede producir aproximadamente 1 litro de Nitrógeno Líquido (LIN) a 21°C y 1 atm?",
        answers: {
            a: "500 litros.",
            b: "690 litros.",
            c: "800 litros.",
            d: "1000 litros."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Por qué el Nitrógeno Líquido (LIN) es muy peligroso en espacios confinados?",
        answers: {
            a: "Es altamente inflamable.",
            b: "Es corrosivo.",
            c: "Es incoloro, inodoro e insípido, y desplaza el oxígeno, causando asfixia.",
            d: "Reacciona violentamente con el agua."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es una de las medidas de primeros auxilios en caso de contacto del Nitrógeno Líquido (LIN) con la piel?",
        answers: {
            a: "Frotar vigorosamente la parte afectada.",
            b: "Aplicar calor directo.",
            c: "Sumergir las partes afectadas en agua a no más de 37°C.",
            d: "Aplicar hielo directamente."
        },
        correctAnswer: "c"
    },
    {
        question: "¿A qué distancia mínima se debe aislar un área en caso de incendio de un tráiler que transporta Nitrógeno Líquido (LIN)?",
        answers: {
            a: "30 metros.",
            b: "100 metros.",
            c: "500 metros.",
            d: "800 metros."
        },
        correctAnswer: "d"
    },
    {
        question: "¿A qué temperatura se transporta el Oxígeno Líquido (LOX)?",
        answers: {
            a: "-196°C.",
            b: "-183°C.",
            c: "-25°C.",
            d: "0°C."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es un riesgo principal del Oxígeno Líquido (LOX)?",
        answers: {
            a: "Asfixia por desplazamiento de oxígeno.",
            b: "Es inflamable por sí mismo.",
            c: "Enriquece la atmósfera y facilita la combustión, reaccionando con derivados del petróleo.",
            d: "Formación de hielo seco."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué se debe hacer en caso de derrame/fuga de LOX?",
        answers: {
            a: "Aplicar agua sobre el derrame.",
            b: "Acercarse para evaluar la situación.",
            c: "Evacuar a personas a 30 metros de distancia como mínimo y no permitir fuentes de ignición.",
            d: "Intentar contener el derrame con arena."
        },
        correctAnswer: "c"
    },
    {
        question: "¿A qué temperatura se transporta el Argón Líquido (LAR)?",
        answers: {
            a: "-196°C.",
            b: "-183°C.",
            c: "-186°C.",
            d: "-25°C."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es la naturaleza de riesgo del Argón Líquido (LAR) similar al Nitrógeno Líquido (LIN)?",
        answers: {
            a: "Inflamabilidad.",
            b: "Corrosividad.",
            c: "Asfixia por desplazamiento de oxígeno y quemaduras criogénicas.",
            d: "Explosividad."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué volumen de gas puede producir aproximadamente 1 litro de Argón Líquido (LAR) a 21°C y 1 atm?",
        answers: {
            a: "500 litros.",
            b: "690 litros.",
            c: "820 litros.",
            d: "1000 litros."
        },
        correctAnswer: "c"
    },
    {
        question: "¿A qué temperatura y presión se transporta el Dióxido de Carbono Líquido (LIC)?",
        answers: {
            a: "-196°C y 2 bar.",
            b: "-183°C y 10 bar.",
            c: "Aproximadamente -25°C y entre 15 y 20 bar.",
            d: "0°C y 1 atm."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué riesgo específico presenta el Dióxido de Carbono Líquido (LIC) debido a su punto triple?",
        answers: {
            a: "Incendio espontáneo.",
            b: "Explosión por sobrecalentamiento.",
            c: "Formación de hielo seco (CO2 sólido) en líneas y estanques si la presión disminuye por debajo de 4.2 bar, lo que puede generar obstrucciones.",
            d: "Corrosión de los materiales del estanque."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué acción se debe tomar en caso de aumento de presión del Dióxido de Carbono Líquido (LIC) si las válvulas de seguridad no se activan?",
        answers: {
            a: "Aplicar agua fría al estanque.",
            b: "Ventear por la válvula V6 hasta disminuir a la presión normal, utilizando los EPP adecuados.",
            c: "Abrir todas las válvulas de golpe.",
            d: "Intentar reparar la válvula en el momento."
        },
        correctAnswer: "b"
    },
    {
        question: "¿De qué material es el estanque para el Dióxido de Carbono en los tráileres de carga criogénica?",
        answers: {
            a: "Acero inoxidable.",
            b: "Aluminio.",
            c: "Acero y recubierto con aislante y chapa metálica.",
            d: "Plástico reforzado."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cómo se realiza la aislación entre el estanque interior y exterior en los tráileres para Gases del Aire (Oxígeno, Nitrógeno, Argón)?",
        answers: {
            a: "Con lana de roca.",
            b: "Mediante vacío y un material aislante denominado perlita.",
            c: "Con espuma de poliuretano.",
            d: "Con aire a presión."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la presión normal de trabajo para los Gases del Aire en los tráileres?",
        answers: {
            a: "15 a 20 bar.",
            b: "2 bar.",
            c: "0.5 bar.",
            d: "5 bar."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué normativa regula el transporte de Sustancias Peligrosas por Calles y Caminos en Chile, a la cual debe cumplir el tracto camión?",
        answers: {
            a: "NFPA.",
            b: "DS 43/2015.",
            c: "DS 298.",
            d: "NCh 382."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Dónde se ubica el dispositivo general para cortar el suministro de corriente eléctrica en el camión en casos de emergencia?",
        answers: {
            a: "Dentro de la cabina, bajo el asiento.",
            b: "En el motor, bajo el capó.",
            c: "Generalmente por fuera de la cabina en el costado del conductor y señalizado.",
            d: "En la parte trasera del tráiler."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué sistema se utiliza para asegurar que el vehículo no se mueva durante el proceso de carga o descarga, activando los frenos de la rampla?",
        answers: {
            a: "Freno de mano convencional.",
            b: "Sistema Tow Away o Antirremolque.",
            c: "Control de crucero.",
            d: "Bloqueo de diferencial."
        },
        correctAnswer: "b"
    },
    {
        question: "¿En qué Clase de riesgo se clasifican los gases criogénicos (Dióxido de Carbono, Oxígeno, Nitrógeno, Argón) según la normativa?",
        answers: {
            a: "Clase 1 (Explosivos).",
            b: "Clase 2 (Gases comprimidos, licuados, disueltos a presión o criogénicos), subclase 2.2 (Gases No Inflamables).",
            c: "Clase 3 (Líquidos Inflamables).",
            d: "Clase 8 (Corrosivos)."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el Número UN para el Oxígeno Líquido?",
        answers: {
            a: "NU 1977.",
            b: "NU 1073.",
            c: "NU 1951.",
            d: "NU 2187."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Dónde debe estar ubicada la señalización de la carga en los vehículos de transporte criogénico?",
        answers: {
            a: "Solo en la parte trasera.",
            b: "Solo en los costados.",
            c: "En los cuatro costados del vehículo.",
            d: "Solo en la cabina del camión."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué tipo de guantes de seguridad se especifican para los conductores de Linde que manejan envases o productos criogénicos?",
        answers: {
            a: "Guantes de látex.",
            b: "Guantes de tela.",
            c: "Guantes de cuero para manejo de envases o criogénicos si hay probabilidad de contacto con líquido.",
            d: "Guantes de nitrilo."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es el contenido mínimo de un botiquín de primeros auxilios a bordo de los vehículos de carga?",
        answers: {
            a: "Solo analgésicos.",
            b: "Agua oxigenada, desinfectante, algodón, gasa esterilizada, vendas, tela triangular, tela adhesiva, curitas, tijeras, vaso plástico, trozo de madera para torniquetes.",
            c: "Solo vendas y curitas.",
            d: "Cualquier medicamento que el conductor necesite."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuántas cuñas debe llevar todo vehículo y cuándo se deben usar?",
        answers: {
            a: "2 cuñas, solo en emergencias.",
            b: "Al menos 4 cuñas, siempre que el vehículo esté estacionado para impedir su desplazamiento, incluyendo las detenciones para carga y descarga.",
            c: "1 cuña, solo para descargas en pendiente.",
            d: "No es obligatorio llevar cuñas."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la velocidad máxima establecida por Linde para el transporte de CO2 en condiciones de lluvia?",
        answers: {
            a: "80 Km/h.",
            b: "100 Km/h.",
            c: "60 Km/h.",
            d: "50 Km/h."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Con qué licencia de conducir deben contar los conductores para el manejo de este tipo de carga?",
        answers: {
            a: "Licencia Clase B.",
            b: "Licencia Clase A2.",
            c: "Licencia Clase A5 vigente.",
            d: "No se requiere licencia especial."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué documentos debe contener la carpeta a bordo de cada tráiler?",
        answers: {
            a: "Solo la licencia de conducir del operador.",
            b: "Hojas de Datos de Seguridad (HDS) y HDST (plastificadas), Listado de Comunicación (plastificado), Plan de Emergencia, Manual del Transportista, Instructivos de Operación y el Decreto Supremo 298.",
            c: "Solo el manual del vehículo.",
            d: "Recibos de peaje."
        },
        correctAnswer: "b"
    },
    {
        question: "En el procedimiento de llenado de estanques estacionarios (Gases del Aire), ¿cuántos conos de protección deben instalarse alrededor del equipo de transporte?",
        answers: {
            a: "2 conos.",
            b: "3 conos.",
            c: "4 conos.",
            d: "Ninguno."
        },
        correctAnswer: "c"
    },
    {
        question: "En el llenado de estanques estacionarios (Gases del Aire), ¿cuál es un paso crítico para evitar introducir aire y agua al estanque?",
        answers: {
            a: "Conectar directamente el flexible sin purgar.",
            b: "Purgar completamente el flexible antes de cargar.",
            c: "Calentar el flexible antes de la conexión.",
            d: "No es necesario purgar el flexible."
        },
        correctAnswer: "b"
    },
    {
        question: "Durante el llenado de estanques estacionarios (Gases del Aire), ¿cuánto tiempo debe durar el enfriamiento de la bomba?",
        answers: {
            a: "5 minutos.",
            b: "10 minutos.",
            c: "Un mínimo de 15 a 20 minutos.",
            d: "No requiere enfriamiento."
        },
        correctAnswer: "c"
    },
    {
        question: "Cuando el indicador de nivel del estanque del cliente se acerque al 80% de su capacidad máxima (Gases del Aire), ¿qué válvula se debe abrir ligeramente?",
        answers: {
            a: "Válvula V1.",
            b: "Válvula V2.",
            c: "Válvula V6 (válvula de nivel máximo).",
            d: "Válvula V49."
        },
        correctAnswer: "c"
    },
    {
        question: "En el procedimiento de llenado de estanques estacionarios (Gases del Aire), ¿qué se debe hacer cuando el líquido y el gas comiencen a fluir por la válvula V-6 (nivel máximo del 90%)?",
        answers: {
            a: "Continuar la transferencia sin cambios.",
            b: "Detener la bomba de transferencia y cerrar inmediatamente las válvulas V3 o X-3, V-20, V-35 y V-13 del equipo de transporte.",
            c: "Aumentar la presión de la bomba.",
            d: "Abrir todas las válvulas de descarga."
        },
        correctAnswer: "b"
    },
    {
        question: "Al finalizar la operación de llenado para CO2, después de desconectar los flexibles y guardarlos, ¿qué acción se debe realizar?",
        answers: {
            a: "Dejar las conexiones abiertas.",
            b: "Asegurar las tapas en las conexiones del estanque estacionario del cliente y del estanque de transporte.",
            c: "Limpiar el área con agua a presión.",
            d: "Esperar la validación del cliente para cerrar las tapas."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la función de la válvula V21 en el tráiler?",
        answers: {
            a: "Válvula de Llenado por el fondo.",
            b: "Válvula de By-pass para la bomba (utilizada para purgar el flexible y para el enfriamiento de la bomba).",
            c: "Válvula de Presurización.",
            d: "Válvula de Descarga de la bomba."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué indica M7 en el diagrama del tráiler?",
        answers: {
            a: "Medidor de Contenido.",
            b: "Indicador de presión del tanque.",
            c: "Indicador de presión de la bomba.",
            d: "Temperatura del producto."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué válvula del estanque estacionario del cliente NO debe ser operada por ningún motivo por el operador?",
        answers: {
            a: "Válvula V1.",
            b: "Válvula V2.",
            c: "Válvula V6.",
            d: "Válvula V9."
        },
        correctAnswer: "d"
    },
    {
        question: "¿Cuál es la función principal de la Bomba de Transferencia (P) en el tráiler?",
        answers: {
            a: "Aumentar la temperatura del líquido.",
            b: "Reducir la presión del sistema.",
            c: "Esencial para la transferencia de líquido; su correcto enfriamiento es crítico para evitar cavitación y asegurar un flujo solo de líquido.",
            d: "Medir el nivel del estanque."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué tipo de emergencia puede ocurrir por la pérdida de control del vehículo debido a condiciones adversas del camino?",
        answers: {
            a: "Choque.",
            b: "Atropellamiento.",
            c: "Volcamiento.",
            d: "Fuga de producto sin impacto."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué se debe hacer inmediatamente en caso de una emergencia (Plan de Acción Inmediato del Conductor)?",
        answers: {
            a: "Intentar reparar el vehículo por sí mismo.",
            b: "Comunicarse con los organismos públicos de emergencia y con el personal de Linde/TSM/MDM.",
            c: "Esperar la llegada de ayuda sin hacer nada.",
            d: "Continuar el viaje si es posible."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el número de teléfono para contactar a Carabineros en caso de emergencia en Chile?",
        answers: {
            a: "131.",
            b: "132.",
            c: "133.",
            d: "800800242."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué información esencial debe proporcionar el conductor telefónicamente al personal de Linde en caso de emergencia?",
        answers: {
            a: "Solo su nombre.",
            b: "Nombre, desde dónde llama, teléfono, patente del camión, tipo de accidente, lugar exacto, si hay personas involucradas, si han llegado autoridades, producto transportado y acciones tomadas.",
            c: "Únicamente el tipo de producto.",
            d: "Solo el lugar exacto del accidente."
        },
        correctAnswer: "b"
    },
    {
        question: "En caso de colisión, volcamiento o atropellamiento, ¿qué se debe hacer para aislar el área?",
        answers: {
            a: "Aislar 10 metros alrededor del vehículo.",
            b: "Aislar inmediatamente un área circundante de 30 metros adelante y detrás del vehículo ante la posibilidad de una fuga.",
            c: "No es necesario aislar si no hay fuga visible.",
            d: "Esperar a los bomberos para aislar."
        },
        correctAnswer: "b"
    },
    {
        question: "En caso de incendio en las inmediaciones del vehículo (no el tráiler), si no es posible mover el vehículo, ¿qué se debe indicar al personal de bomberos?",
        answers: {
            a: "Aplicar agua directamente al tráiler.",
            b: "Que apliquen agua en las inmediaciones del tráiler en forma de neblina para evitar un aumento de presión por el calor.",
            c: "Que apaguen el fuego sin considerar el tráiler.",
            d: "Que ignoren el incendio."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué departamento de Linde recibe el comunicado inicial de la emergencia en la Primera Etapa del Plan de Acción Secundario?",
        answers: {
            a: "Ventas.",
            b: "Recursos Humanos.",
            c: "Distribución.",
            d: "Contabilidad."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué significa la clasificación de riesgo de Salud '3' en el Código NFPA para el Dióxido de Carbono Líquido (LIC)?",
        answers: {
            a: "Sin peligro.",
            b: "Peligro leve.",
            c: "Peligro grave: puede causar lesiones temporales o residuales graves.",
            d: "Peligro extremo: puede causar la muerte."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué significa una clasificación de Inflamabilidad '0' en el Código NFPA?",
        answers: {
            a: "Altamente inflamable.",
            b: "Materiales que no se queman.",
            c: "Inflamable a altas temperaturas.",
            d: "Combustión espontánea."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el riesgo especial del Oxígeno Líquido (LOX) según el Código NFPA?",
        answers: {
            a: "Corrosivo.",
            b: "Radiactivo.",
            c: "Explosivo.",
            d: "Oxidante (OX)."
        },
        correctAnswer: "d"
    },
    {
        question: "¿Qué Norma Chilena (NCh) define las sustancias peligrosas y su clasificación general?",
        answers: {
            a: "NCh 2190.Of2003.",
            b: "NCh 382 'Sustancias Peligrosas - Terminología y Clasificación General'.",
            c: "NCh 2245.Of2015.",
            d: "NCh 1025.Of90."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué significa la sigla EPP?",
        answers: {
            a: "Equipo de Procesamiento de Productos.",
            b: "Estándares de Protección Personal.",
            c: "Equipos de Protección Personal.",
            d: "Evaluación de Procedimientos Peligrosos."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué significa la sigla HDS?",
        answers: {
            a: "Hoja de Datos de Seguridad.",
            b: "Hidrógeno Disuelto en Solución.",
            c: "Herramienta de Diagnóstico de Sistemas.",
            d: "Horas de Descanso Semanal."
        },
        correctAnswer: "a"
    },
    {
        question: "¿Cuál es la función de la válvula V49 en el tráiler?",
        answers: {
            a: "Válvula de By-pass para la V35.",
            b: "Válvula de retorno de Gas.",
            c: "Válvula de carretera (cerrada al iniciar operaciones de llenado).",
            d: "Válvula de Presurización."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué es la cavitación en el contexto de la bomba de transferencia?",
        answers: {
            a: "Un aumento de presión en la bomba.",
            b: "Formación de burbujas de gas en un líquido, que puede dañar la bomba; es vital evitarla asegurando que solo se succione líquido y no gas.",
            c: "Una disminución de temperatura en el líquido.",
            d: "Un tipo de corrosión en la bomba."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué es el 'Tapón de Hielo' en relación con el Dióxido de Carbono Líquido (LIC)?",
        answers: {
            a: "Un sistema de seguridad contra fugas.",
            b: "Una obstrucción formada por la acumulación de hielo seco (CO2 sólido) en líneas y estanques, que puede liberarse violentamente.",
            c: "Un dispositivo para medir la temperatura del CO2.",
            d: "Un tipo de aislamiento térmico."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué es el proceso de 'Purga' en las operaciones de carga?",
        answers: {
            a: "Añadir más producto al estanque.",
            b: "Proceso de limpieza de flexibles o líneas para eliminar contaminantes (humedad, partículas sólidas, líquido remanente) o para barrer con gas, asegurando que solo el producto deseado fluya.",
            c: "Reducir la presión del sistema rápidamente.",
            d: "Incrementar la temperatura del líquido."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué significa la sigla SHEQ?",
        answers: {
            a: "Sistema de Higiene, Ergonomía y Calidad.",
            b: "Salud, Seguridad, Medio Ambiente y Calidad.",
            c: "Servicios de Hospitalidad y Equipo.",
            d: "Seguimiento de Herramientas y Equipos."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la clasificación de riesgo de Reactividad para el Nitrógeno Líquido (LIN) según el Código NFPA?",
        answers: {
            a: "1 (Inestable si se calienta).",
            b: "0 (Normalmente estable, no reactivo con el agua).",
            c: "2 (Cambio químico violento).",
            d: "3 (Capaz de detonar)."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué indica un porcentaje de oxígeno menor a 19.5% en la atmósfera?",
        answers: {
            a: "Oxígeno enriquecido.",
            b: "Atmósfera deficiente de oxígeno, que puede causar mareo, náusea, vómito, pérdida de conocimiento y muerte.",
            c: "Niveles normales de oxígeno.",
            d: "Atmósfera inerte."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la función del barbiquejo como EPP?",
        answers: {
            a: "Proteger la boca.",
            b: "Parte del equipo de protección personal del conductor, asociado al casco de seguridad para sujetarlo.",
            c: "Sujetar los lentes de seguridad.",
            d: "Proteger el cuello."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué es un 'Asfixiante Simple'?",
        answers: {
            a: "Un gas altamente tóxico.",
            b: "Un gas que puede causar asfixia al desplazar el oxígeno del aire, sin ser tóxico en sí mismo.",
            c: "Un gas que reacciona violentamente con el aire.",
            d: "Un gas que produce quemaduras químicas."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la principal diferencia en el enfriamiento de la bomba entre el procedimiento de llenado de Gases del Aire y el de Dióxido de Carbono (LIC)?",
        answers: {
            a: "El CO2 no requiere enfriamiento.",
            b: "Para Gases del Aire es de 15 a 20 minutos, mientras que para CO2 es un mínimo de 5 minutos aproximadamente.",
            c: "Para Gases del Aire es de 5 minutos, mientras que para CO2 es de 15 a 20 minutos.",
            d: "Ambos duran el mismo tiempo, pero con diferentes válvulas."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué es el MANIFOLD/CAJA CRIOGÉNICA?",
        answers: {
            a: "El motor del tráiler.",
            b: "Un sistema de válvulas y tuberías en la parte trasera o lateral del tráiler, desde donde se realiza la operación de trasvasije del producto.",
            c: "El área de descanso del conductor.",
            d: "El compartimento de almacenamiento de EPP."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el propósito del sistema OBC (On-Board Computer) en los vehículos de Linde?",
        answers: {
            a: "Gestionar el sistema de navegación del vehículo.",
            b: "Asegurar el control de la velocidad, posición, frenadas y aceleraciones bruscas.",
            c: "Controlar la temperatura del interior de la cabina.",
            d: "Administrar el inventario de productos."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el límite permisible ponderado (LPP) para el CO2?",
        answers: {
            a: "1000 ppm.",
            b: "4000 ppm.",
            c: "10000 ppm.",
            d: "30000 ppm."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el límite permisible temporal (LPT) para el CO2?",
        answers: {
            a: "4000 ppm.",
            b: "10000 ppm.",
            c: "30000 ppm.",
            d: "50000 ppm."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué acción se realiza en la etapa final del llenado de estanques de Gases del Aire, referente a la 'Inspección Mensual de Estanque'?",
        answers: {
            a: "Se realiza trimestralmente.",
            b: "Se completa un checklist de observación visual en cada descarga, entregando el original al cliente y una copia en Planta.",
            c: "Solo se realiza si hay alguna anomalía.",
            d: "Es un proceso que realiza solo el personal de planta."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué se debe hacer si la ropa del conductor se empapa con Nitrógeno Líquido (LIN) o Argón Líquido (LAR)?",
        answers: {
            a: "Retirar la ropa de inmediato y frotar la piel.",
            b: "Descongelar la zona antes de retirar la ropa y trasladar inmediatamente a un centro asistencial.",
            c: "Aplicar calor directo para acelerar la descongelación.",
            d: "No es necesario tomar ninguna acción inmediata."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué tipo de extintores deben llevar los vehículos de carga?",
        answers: {
            a: "Tipo A.",
            b: "Tipo B.",
            c: "Tipo P.Q.S. de 6 kilos, aptos para combatir incendios clase A, B, C como mínimo.",
            d: "Cualquier tipo de extintor."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es la función de la válvula V72 en el tráiler (para CO2)?",
        answers: {
            a: "Válvula de Descarga de la bomba.",
            b: "Válvula de Presurización (utilizada para presurizar con gas las líneas antes de la bomba y para purgar el líquido contenido en la bomba y flexibles).",
            c: "Válvula de Llenado por el fondo.",
            d: "Válvula de By-pass para la V35."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el propósito del Parachoques Antiempotramiento en los vehículos de carga?",
        answers: {
            a: "Para mejorar la aerodinámica del vehículo.",
            b: "Para proteger la carga y a terceros en caso de colisión trasera.",
            c: "Para facilitar el acoplamiento del tráiler.",
            d: "Para reducir el peso del vehículo."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el Número UN para el Dióxido de Carbono Líquido (LIC)?",
        answers: {
            a: "NU 1073.",
            b: "NU 1977.",
            c: "NU 1951.",
            d: "NU 2187."
        },
        correctAnswer: "d"
    },
    {
        question: "¿Qué significa el término 'Volatilización' para el Nitrógeno Líquido (LIN)?",
        answers: {
            a: "Que es altamente inflamable.",
            b: "Que reacciona violentamente con otras sustancias.",
            c: "Que vaporiza rápidamente en grandes volúmenes, formando una neblina que obstaculiza la visión.",
            d: "Que es un líquido incoloro e inodoro."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es el primer paso en el procedimiento general de llenado de estanques estacionarios (Gases del Aire)?",
        answers: {
            a: "Conectar los flexibles.",
            b: "Ponerse el EPP.",
            c: "Estacionar el tráiler de transporte frente al estanque, dejándolo lo más cerca posible.",
            d: "Abrir las válvulas del estanque del cliente."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es el propósito de cerrar la válvula de carretera V49 antes de iniciar el llenado (Gases del Aire)?",
        answers: {
            a: "Para aumentar la presión en el estanque del cliente.",
            b: "Para evitar el flujo de producto innecesario durante la conexión.",
            c: "Para detener la circulación del vehículo.",
            d: "No se menciona su cierre en el procedimiento."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué ocurre si la presión del tráiler de CO2 disminuye a menos de 10 bar durante el funcionamiento de la bomba de transferencia?",
        answers: {
            a: "El CO2 se gasifica completamente.",
            b: "El CO2 puede alcanzar el punto de solidificación.",
            c: "La bomba aumenta su eficiencia.",
            d: "No tiene ningún efecto en el producto."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué se debe hacer al final del proceso de llenado de CO2 si solo sale gas por la válvula V28 de purga?",
        answers: {
            a: "Aumentar la presión para forzar la salida de más líquido.",
            b: "Significa que no hay líquido ni tapones de hielo en el flexible, y se debe cerrar la válvula V21.",
            c: "Abrir todas las válvulas para asegurar la purga total.",
            d: "Esperar un tiempo adicional para la purga."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el Número UN para el Nitrógeno Líquido?",
        answers: {
            a: "NU 1073.",
            b: "NU 1977.",
            c: "NU 1951.",
            d: "NU 2187."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es el Número UN para el Argón Líquido?",
        answers: {
            a: "NU 1073.",
            b: "NU 1977.",
            c: "NU 1951.",
            d: "NU 2187."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué es el 'Venteo' en el contexto de la carga criogénica?",
        answers: {
            a: "El proceso de llenado de un estanque.",
            b: "La liberación controlada de gas a la atmósfera para reducir o mantener la presión en un sistema.",
            c: "La recirculación de líquido en un sistema cerrado.",
            d: "La inyección de aire en el estanque."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué indica la 'Salud: 3' en el Código NFPA para el Oxígeno Líquido (LOX)?",
        answers: {
            a: "Sin peligro.",
            b: "Peligro leve.",
            c: "Peligro grave: puede causar lesiones temporales o residuales graves.",
            d: "Peligro extremo: puede causar la muerte."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué es la 'Perlita' y para qué se usa en los tráileres de gases del aire?",
        answers: {
            a: "Un material para pulir la superficie del estanque.",
            b: "Un material aislante utilizado entre los estanques interior y exterior.",
            c: "Un aditivo para el combustible.",
            d: "Un componente del sistema de frenos."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué tipo de ropa de trabajo deben usar los conductores de Linde?",
        answers: {
            a: "Ropa de trabajo sintética.",
            b: "Ropa de trabajo de algodón 100%.",
            c: "Ropa impermeable.",
            d: "Cualquier tipo de ropa cómoda."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué se debe verificar en la Guía de Despacho antes de iniciar el llenado?",
        answers: {
            a: "Solo la cantidad de producto a despachar.",
            b: "El nivel y la presión del estanque estacionario antes del llenado, y que el estanque del cliente corresponde al producto transportado.",
            c: "La dirección del cliente solamente.",
            d: "El color del estanque."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la función de la Válvula de Llenado por el fondo (V1) en el estanque estacionario del cliente?",
        answers: {
            a: "Permitir la salida de gas.",
            b: "Controlar el nivel máximo del estanque.",
            c: "Entrada de líquido por la parte inferior del estanque, zona de líquido.",
            d: "Regular la presión del estanque."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Cuál es la velocidad máxima de circulación establecida por Linde en condiciones de manejo sin lluvia?",
        answers: {
            a: "60 Km/h.",
            b: "70 Km/h.",
            c: "80 Km/h.",
            d: "90 Km/h."
        },
        correctAnswer: "c"
    },
    {
        question: "¿Por qué es crucial el correcto enfriamiento de la bomba de transferencia?",
        answers: {
            a: "Para ahorrar energía.",
            b: "Para evitar la cavitación (presencia de gas en la succión) y asegurar un flujo solo de líquido.",
            c: "Para aumentar la velocidad de transferencia.",
            d: "Para reducir el ruido de la bomba."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué es la 'Hipotermia' mencionada como síntoma de exposición a altas concentraciones de oxígeno?",
        answers: {
            a: "Aumento de la temperatura corporal.",
            b: "Disminución peligrosa de la temperatura corporal.",
            c: "Alergia cutánea.",
            d: "Dolor de cabeza severo."
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es la responsabilidad del conductor en la 'Tercera Etapa: Informe, Medidas Correctivas y Preventivas' del Plan de Acción Secundario?",
        answers: {
            a: "Generar el informe final del incidente.",
            b: "Realizar el seguimiento de las acciones correctivas.",
            c: "Reunir todos los antecedentes para la investigación del siniestro (después de que Distribución es informado de lo sucedido).",
            d: "Aprobar las medidas correctivas."
        },
        correctAnswer: "c"
    }
];

// --- JavaScript para el manejo del Quiz ---

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const quizForm = document.getElementById('quiz-form');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const gradeDisplay = document.getElementById('grade');
const statusDisplay = document.getElementById('status');
const answersDiv = document.getElementById('answers');
const totalQuestionsDisplay = document.getElementById('total-questions'); // Nuevo elemento para mostrar el total

let timeLeft = 90 * 60; // 90 minutos en segundos
let timerInterval;
let uniqueQuestions = []; // Array para almacenar las preguntas únicas

// Función para obtener preguntas únicas (se mantiene para robustez, aunque ahora el array 'questions' ya está curado)
function getUniqueQuestions(originalQuestions) {
    const seenQuestions = new Set();
    const unique = [];
    originalQuestions.forEach(q => {
        const questionText = q.question.trim().replace(/\.$/, '');
        if (!seenQuestions.has(questionText)) {
            seenQuestions.add(questionText);
            unique.push(q);
        }
    });
    return unique;
}

// Inicializa las preguntas únicas al cargar el script
uniqueQuestions = getUniqueQuestions(questions);

// Asegúrate de que el número total de preguntas se muestre al inicio del resultado
document.addEventListener('DOMContentLoaded', () => {
    startScreen.classList.remove('d-none');
    quizScreen.classList.add('d-none');
    resultScreen.classList.add('d-none');
    totalQuestionsDisplay.textContent = uniqueQuestions.length; // Establece el total de preguntas aquí
});


function startQuiz() {
    alert("¡Hola Rodrigo Aránguiz! ¡Bienvenido a la evaluación de Carga Criogénica! Mucha suerte. 😊");
    startScreen.classList.add('d-none');
    quizScreen.classList.remove('d-none');
    loadQuestions();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
        timeLeft--;
    }, 1000);
}

function loadQuestions() {
    uniqueQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question', 'mb-3', 'p-3', 'border', 'rounded');
        questionDiv.innerHTML = `<h5>${index + 1}. ${q.question}</h5>`;

        const answersDiv = document.createElement('div');
        for (const key in q.answers) {
            const answerLabel = document.createElement('div');
            answerLabel.classList.add('form-check');
            answerLabel.innerHTML = `
                <input class="form-check-input" type="radio" name="question${index}" id="question${index}-${key}" value="${key}">
                <label class="form-check-label" for="question${index}-${key}">
                    ${key.toUpperCase()}: ${q.answers[key]}
                </label>
            `;
            answersDiv.appendChild(answerLabel);
        }
        questionDiv.appendChild(answersDiv);
        quizForm.appendChild(questionDiv);
    });
}

function submitQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.add('d-none');
    resultScreen.classList.remove('d-none');

    let score = 0;
    const userAnswers = {};

    uniqueQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            userAnswers[index] = selectedOption.value;
            if (selectedOption.value === q.correctAnswer) {
                score++;
            }
        } else {
            userAnswers[index] = null; // No answer
        }
    });

    scoreDisplay.textContent = score;
    // La nota se calcula sobre el total de uniqueQuestions, que ahora son 80
    const rawGrade = (score / uniqueQuestions.length) * 6 + 1;
    const finalGrade = Math.min(7.0, Math.max(1.0, rawGrade)).toFixed(1);

    let message = '';
    if (finalGrade < 4.0) {
        message = "Yapo culiao ponele empeño, queri ganar plata o no? 😠💸";
    } else if (finalGrade >= 4.0 && finalGrade < 6.0) {
        message = "Ya ta bien pero podi hacerlo mejor 😉👍";
    } else if (finalGrade >= 6.0 && finalGrade < 7.0) {
        message = "Esooo, felicitaciones así se hace!! 🎉👏";
    } else if (finalGrade == 7.0) {
        message = "FELICITACIONES RODRIGOOO ERES SECOOOO! 🔥🤩";
    }

    gradeDisplay.textContent = finalGrade;
    statusDisplay.textContent = message;

    displayAnswers(userAnswers);
}

function displayAnswers(userAnswers) {
    answersDiv.innerHTML = ''; // Limpiar respuestas previas
    uniqueQuestions.forEach((q, index) => {
        const answerCard = document.createElement('div');
        // Usamos mb-2 para un espacio más compacto entre las tarjetas
        answerCard.classList.add('card', 'mb-2', 'shadow-sm');
        const userAnswer = userAnswers[index];
        const isCorrect = (userAnswer === q.correctAnswer);

        let cardClass = isCorrect ? 'border-success' : 'border-danger';
        if (userAnswer === null) {
            cardClass = 'border-secondary'; // No answer given
        }

        answerCard.classList.add(cardClass);

        // AQUI ESTÁ LA PARTE CRÍTICA: Asegúrate de que este HTML se genera correctamente
        // y que el CSS no lo oculta. Añadí "mb-0" a los párrafos para un layout más compacto.
        let feedbackHtml = `
            <div class="card-body">
                <h6 class="card-title fw-bold">${index + 1}. ${q.question}</h6>
                <p class="card-text mb-0"><strong>Tu respuesta:</strong> 
                    ${userAnswer ? `${userAnswer.toUpperCase()}: ${q.answers[userAnswer]}` : 'No respondida'}
                </p>
                <p class="card-text mb-0"><strong>Respuesta correcta:</strong> 
                    ${q.correctAnswer.toUpperCase()}: ${q.answers[q.correctAnswer]}
                </p>
        `;

        if (isCorrect) {
            feedbackHtml += `<p class="text-success fw-bold mb-0">¡Correcto! ✅</p>`;
        } else if (userAnswer !== null) {
            feedbackHtml += `<p class="text-danger fw-bold mb-0">¡Incorrecto! ❌</p>`;
        } else {
            feedbackHtml += `<p class="text-muted fw-bold mb-0">No respondiste esta pregunta. ❔</p>`;
        }

        feedbackHtml += `</div>`;
        answerCard.innerHTML = feedbackHtml; // Asigna el HTML completo a la tarjeta
        answersDiv.appendChild(answerCard);
    });
}


// Event Listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', submitQuiz);