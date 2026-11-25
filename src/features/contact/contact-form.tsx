"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { CheckboxField } from "./checkbox-field";
import { DemoResult } from "./demo-result";
import { budgetOptions, type ContactValues, contactSchema } from "./schema";

type ContactFormProps = {
  serviceOptions: { value: string; label: string }[];
};

export function ContactForm({ serviceOptions }: ContactFormProps) {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  // Registro explícito en el orden visual: define el orden de enfoque ante errores.
  const fields = {
    name: register("name"),
    email: register("email"),
    company: register("company"),
    role: register("role"),
    service: register("service"),
    budget: register("budget"),
    message: register("message"),
    acknowledge: register("acknowledge"),
  };

  if (submitted) {
    return (
      <DemoResult
        title="Formulario validado correctamente"
        resetLabel="Completar otra consulta"
        onReset={() => {
          reset();
          setSubmitted(null);
        }}
      >
        <p>
          Gracias, {submitted}. Todos los campos cumplen las validaciones, pero{" "}
          <strong>no se envió ni se almacenó ninguna información</strong>: Norvia es una empresa
          ficticia y este sitio no tiene servidor ni base de datos.
        </p>
        <p>Los datos se descartaron al validar el formulario en su navegador.</p>
      </DemoResult>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit((values) => setSubmitted(values.name.split(" ")[0] ?? values.name))}
      className="grid gap-6 sm:grid-cols-2"
      aria-describedby="contact-form-note"
    >
      <p id="contact-form-note" className="text-sm text-slate sm:col-span-2">
        Todos los campos son obligatorios. Formulario demostrativo: la información no se envía.
      </p>
      <FormField id="contact-name" label="Nombre" error={errors.name?.message}>
        {(control) => <Input {...control} autoComplete="name" {...fields.name} />}
      </FormField>
      <FormField id="contact-email" label="Correo corporativo" error={errors.email?.message}>
        {(control) => <Input {...control} type="email" autoComplete="email" {...fields.email} />}
      </FormField>
      <FormField id="contact-company" label="Empresa" error={errors.company?.message}>
        {(control) => <Input {...control} autoComplete="organization" {...fields.company} />}
      </FormField>
      <FormField id="contact-role" label="Cargo" error={errors.role?.message}>
        {(control) => <Input {...control} autoComplete="organization-title" {...fields.role} />}
      </FormField>
      <FormField id="contact-service" label="Servicio de interés" error={errors.service?.message}>
        {(control) => (
          <Select
            {...control}
            placeholder="Seleccione una opción"
            options={[...serviceOptions, { value: "otro", label: "Otro / aún no lo sé" }]}
            {...fields.service}
          />
        )}
      </FormField>
      <FormField id="contact-budget" label="Presupuesto estimado" error={errors.budget?.message}>
        {(control) => (
          <Select
            {...control}
            placeholder="Seleccione un rango"
            options={budgetOptions}
            {...fields.budget}
          />
        )}
      </FormField>
      <FormField
        id="contact-message"
        label="Descripción del proyecto"
        hint="Contexto, objetivo y plazos aproximados."
        error={errors.message?.message}
        className="sm:col-span-2"
      >
        {(control) => <Textarea {...control} rows={6} {...fields.message} />}
      </FormField>
      <CheckboxField
        id="contact-acknowledge"
        className="sm:col-span-2"
        label="Entiendo que este formulario es demostrativo y que los datos no se enviarán ni almacenarán."
        error={errors.acknowledge?.message}
        {...fields.acknowledge}
      />
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Validar consulta
        </Button>
      </div>
    </form>
  );
}
