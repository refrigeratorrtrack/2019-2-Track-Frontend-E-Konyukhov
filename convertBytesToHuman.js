/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
export default function convertBytesToHuman(bytes) {
  let result;
  let converted = bytes;
  let counter = 0;
  let array = ["B", "KB", "MB", "GB", "TB", "PB"]; // I don't know more :(

  if (typeof(bytes) !== "number") {
    result = false;
  } else {
    if (bytes !== Infinity) {
      if (bytes < 0) {
        result = false;
      } else {
      	if (bytes > Number.MAX_SAFE_INTEGER) {
      	  result = false;
      	} else {
          if (Math.round(bytes) !== bytes) {
            result = false;
          } else {
            while (converted >= 1024) {
              converted = converted / 1024.0;

              counter += 1;
            }

            if (counter > 5) {
              counter = 5;
            }

            converted = Math.round(converted * 100) / 100.0;

            result = `${converted} ${array[counter]}`;
          }
        }
      }
    } else {
      result = false;
    }
  }

  return result;
}
