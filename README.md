OBS: Eu não possui conhecimento em Tailwind, sendo assim, utilizei Bootstrap que é um pouco similar. Mas de qualquer forma, estou super disposta à aprender para apoiar o time. 

Pasta Calendar

Dentro da pasta "Calendar", eu coloquei o arquivo CalendayDay.jsx, que tem como função representar os dias, que no caso seria weekDay e month.
Logo depois tem o arquivo index.jsx que está importando as dependências, coloquei o 'momento' para manipulação das datas e que permite a navegação entre os meses com os botões "anterior" e "próximo", além disso, o calendário exibe os meses e anos em português e inclui uma visão personalizada do mês através do component "MonthView", e também há a criação dos botões de indicaçações de períodos de serviços e períodos livres.

No arquivo "MonthView", exibe uma visão mensal de um calendário, utilizando o "useMemo" para otimizar cálculos de semanas no mês com a função "getWeekInMonth", esse mesmo componente renderiza os dias da semana e pra cada semana do mês utiliza o componente "WeekRow" que ajusta a quantidade de dias para sempre ter sete dias por semana. Cada dia é representando pelo componente "CalendarDay".


Pasta DatePicker

No arquivo index.jsx, está sendo exibido um campo de entrada de data, utilizei o "useRef" para criar uma referência ao elemento de entrada e ao ganhar foco, ele exibe o seletor de data nativo do navegador.


Pasta TimePicker

Nesse, a ideia é a mesma do DatePicker, porém para o campo de entrada de horário.

Arquivo Header.jsx
Nesse arquivo, foi feita a criação do Header que representa o cabeçalho, ele está importando os componentes "DatePicker" e "TimePicker" para a selação de data e horário. Há também a criação da função "handleSubmit" que é invocada ao enviar os dados, capturando os mesmos e consequentemente inseridos e os processa para definir o contrato de datas. Além disso há a opção para selecionar a inclusão de feriados nacionais e domingos no contato.

Pasta Helpers
Nessa pasta eu criei o arquivo "dateHandlers" que contém uma série de funções relacionadas ao manuseios de datas e períodos de tempo. Acredito que o uso dessas funções são valiosas para diversas aplicações, desde a gereção de calendários até mesmo para cálculos de períodos.

Pasta Providers:
Já no arquivo "CalendarProvider", está sendo feito o gerenciamento do contrato de datas, e inicializando com uma nova lista vazia de dias de folga.

Pasta Services
Por fim, no "CalendarProvides.jsx" estou importando a API fornecida.
