import { z } from "zod";

export const budgetOptions = [
  { value: "menos-25k", label: "Menos de 25.000 USD" },
  { value: "25k-75k", label: "25.000 – 75.000 USD" },
  { value: "75k-200k", label: "75.000 – 200.000 USD" },
  { value: "mas-200k", label: "Más de 200.000 USD" },
  { value: "por-definir", label: "Aún por definir" },
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escriba su nombre (al menos 2 caracteres).").max(80),
  email: z.email("Ingrese un correo electrónico válido, por ejemplo nombre@empresa.com."),
  company: z.string().trim().min(2, "Indique el nombre de su empresa.").max(100),
  role: z.string().trim().min(2, "Indique su cargo.").max(80),
  service: z.string().min(1, "Seleccione el servicio de interés."),
  budget: z.string().min(1, "Seleccione un rango de presupuesto estimado."),
  message: z
    .string()
    .trim()
    .min(30, "Describa su proyecto en al menos 30 caracteres.")
    .max(2000, "La descripción no puede superar los 2.000 caracteres."),
  acknowledge: z.literal(true, {
    error: "Confirme que entiende que este formulario es demostrativo.",
  }),
});

export type ContactValues = z.input<typeof contactSchema>;

export const experienceOptions = [
  { value: "0-1", label: "Menos de 1 año" },
  { value: "1-3", label: "1 a 3 años" },
  { value: "3-6", label: "3 a 6 años" },
  { value: "6+", label: "Más de 6 años" },
] as const;

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Escriba su nombre (al menos 2 caracteres).").max(80),
  email: z.email("Ingrese un correo electrónico válido."),
  city: z.string().trim().min(2, "Indique su ciudad de residencia.").max(80),
  experience: z.string().min(1, "Seleccione sus años de experiencia."),
  portfolio: z
    .union([z.literal(""), z.url("Ingrese una URL completa, por ejemplo https://…")])
    .optional(),
  motivation: z
    .string()
    .trim()
    .min(50, "Cuéntenos su motivación en al menos 50 caracteres.")
    .max(1500, "El texto no puede superar los 1.500 caracteres."),
  acknowledge: z.literal(true, {
    error: "Confirme que entiende que esta vacante es ficticia.",
  }),
});

export type ApplicationValues = z.input<typeof applicationSchema>;
