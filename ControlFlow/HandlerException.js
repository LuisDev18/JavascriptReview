function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }

  try {
    // Intenta realizar una división
    const resultado = dividir(10, 0);
    console.log("El resultado es:", resultado);
  } catch (error) {
    // Maneja la excepción si ocurre un error
    console.error("Ha ocurrido un error:", error.message);
  }