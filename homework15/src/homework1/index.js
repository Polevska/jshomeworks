export function hw1() {
  const headphones = 15.678;
  const tv = 123.965;
  const phone = 90.2345;

  // Використовуючи вбудований об'єкт Math – виведіть максимальне число
  console.log(
    "1.Виведіть максимальне число - ",
    Math.max(15.678, 123.965, 90.2345)
  );

  // Використовуючи вбудований об'єкт Math – виведіть мінімальне число
  console.log(
    "2.Виведіть мінімальне число - ",
    Math.min(15.678, 123.965, 90.2345)
  );

  // Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
  const sum = headphones + tv + phone;
  console.log("3.Вартість всіх товарів - ", sum);

  //Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару
  //між собою. Округлення використовувати в МЕНЬШУ сторону.
  console.log(
    "4.Складіть цілу частину вартості кожного товару - ",
    Math.floor(headphones) + Math.floor(tv) + Math.floor(phone)
  );

  //Виведіть суму товарів округлену до сотень
  console.log(
    "5.Виведіть суму товарів округлену до сотень - ",
    Math.round(sum / 100) * 100
  );

  //Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним
  //чи непарним числом?
  console.log(
    "6.Чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? - ",
    !Boolean(Math.floor(sum) % 2)
  );

  // Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
  console.log("7.Виведіть суму решти при оплаті 500 uah -", 500 - sum);

  // Виведіть середнє значення цін, округлене до другого знаку після коми
  console.log(
    "8.Виведіть середнє значення цін, округлене до другого знаку після коми - ",
    Number(sum / 3).toFixed(2)
  );

  // Створіть змінну, в якої збережіть випадкову знижку
  const discount = Math.floor(Math.random() * (50 - 5 + 1) + 5);

  // Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
  console.log(
    "9.Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. - ",
    Number(sum - discount).toFixed(2)
  );

  //Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів
  //рівно в два рази нижче їх ціни?
  const cost = sum / 2;
  const price = sum - discount;

  console.log("10.Виведіть чистий прибуток -", price - cost);

  console.log(
    "-------------------------------------Advanced------------------------------------------"
  );

  console.log(
    ` Максимальне число: ${Math.max(
      15.678,
      123.965,
      90.2345
    )} \n Мінімальне число: ${Math.min(
      15.678,
      123.965,
      90.2345
    )}  \n Вартість всіх товарів: ${sum} \n Ціла частина вартості кожного товару: ${
      Math.floor(headphones) + Math.floor(tv) + Math.floor(phone)
    } \n Сума товарів округлена до сотень: ${
      Math.round(sum / 100) * 100
    } \n Чи є сума всіх товарів парним числом: ${!Boolean(
      Math.floor(sum) % 2
    )} \n Сума решти при оплаті 500 uah: ${
      500 - sum
    } \n Середнє значення цін, округлене до другого знаку після коми: ${Number(
      sum / 3
    ).toFixed(
      2
    )} \n Випадкова знижка та сума, округлена до 2 знаків після коми: ${Number(
      sum - discount
    ).toFixed(2)} \n Чистий прибуток: ${price - cost}`
  );
}