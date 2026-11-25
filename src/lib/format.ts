const dateFormatter = new Intl.DateTimeFormat("es", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}

const numberFormatter = new Intl.NumberFormat("es", { maximumFractionDigits: 2 });

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

/** Normaliza texto para búsquedas sin distinguir mayúsculas ni acentos. */
export function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}
