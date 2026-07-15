export function getStoreStatus() {
  const now = new Date();

  // Hora actual en Colombia (America/Bogota), sin importar dónde corra el servidor
  const bogotaHour = Number(
    new Intl.DateTimeFormat("es-CO", {
      timeZone: "America/Bogota",
      hour: "numeric",
      hour12: false,
    }).format(now)
  );

  const isOpen = bogotaHour >= 7 && bogotaHour < 17; // 7:00am - 5:00pm

  return {
    isOpen,
    label: isOpen ? "Abierto ahora" : "Cerrado ahora",
  };
}
