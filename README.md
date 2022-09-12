### ЗАДАЧА

Необходимо сделать интерфейс терминала по заказу кофе.

Должна быть возможность выбора или отмены компонентов на этапе формирования заказа.
1. Есть несколько видов базового напитка (зерна, тип обжарки и т.д.)
2. Есть несколько видов дополнений (сиропы, корица, сахар и т.д.)
3. Варианты сервировки (с собой в стаканчике, на месте в чашке и т.д.)

У каждого из опций 1-2 есть своя стоимость, которая прибавляется к заказу.
Окно должно предоставлять выбор этих компонентов, при нажатии "Заказать" должен формироваться корректный заказ из трех частей и подсчетом стоимости.

Используйте React, компоненты-функции, TypeScript, композицию Containers and presentational components, Context, Reducer.

## Пояснения
В связи с тем, что это интерфейс терминала, я допустил упрощения следующего рода:
1. Не был сосредоточен на верстке для мобильных устройств или даже в целом под разные экран
2. Так как это терминал по заказу кофе state полностью локальный и изменения в типе предоставляемых товаров вряд ли будут.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

