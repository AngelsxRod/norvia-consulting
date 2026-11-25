"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckboxField } from "@/features/contact/checkbox-field";
import { DemoResult } from "@/features/contact/demo-result";
import {
  type ApplicationValues,
  applicationSchema,
  experienceOptions,
} from "@/features/contact/schema";

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", city: "", experience: "", portfolio: "", motivation: "" },
  });

  // Registro explícito en el orden visual: define el orden de enfoque ante errores.
  const fields = {
    name: register("name"),
    email: register("email"),
    city: register("city"),
    experience: register("experience"),
    portfolio: register("portfolio"),
    motivation: register("motivation"),
    acknowledge: register("acknowledge"),
  };

  if (submitted) {
    return (
      <DemoResult
        title="Postulación validada (demostración)"
        resetLabel="Volver al formulario"
        onReset={() => {
          reset();
          setSubmitted(false);
        }}
      >
        <p>
          Los datos para «{jobTitle}» cumplen todas las validaciones.{" "}
          <strong>No se envió ninguna postulación</strong>: la vacante es ficticia y el sitio no
          cuenta con un servidor que reciba información.
        </p>
      </DemoResult>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(() => setSubmitted(true))} className="grid gap-6">
      <FormField id="apply-name" label="Nombre" error={errors.name?.message}>
        {(control) => <Input {...control} autoComplete="name" {...fields.name} />}
      </FormField>
      <FormField id="apply-email" label="Correo electrónico" error={errors.email?.message}>
        {(control) => <Input {...control} type="email" autoComplete="email" {...fields.email} />}
      </FormField>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="apply-city" label="Ciudad" error={errors.city?.message}>
          {(control) => <Input {...control} autoComplete="address-level2" {...fields.city} />}
        </FormField>
        <FormField id="apply-experience" label="Experiencia" error={errors.experience?.message}>
          {(control) => (
            <Select
              {...control}
              placeholder="Seleccione"
              options={experienceOptions}
              {...fields.experience}
            />
          )}
        </FormField>
      </div>
      <FormField
        id="apply-portfolio"
        label="Portafolio o perfil profesional"
        optional
        hint="Un enlace público. No se solicitan documentos ni datos sensibles."
        error={errors.portfolio?.message}
      >
        {(control) => <Input {...control} type="url" inputMode="url" {...fields.portfolio} />}
      </FormField>
      <FormField
        id="apply-motivation"
        label="¿Por qué le interesa este rol?"
        error={errors.motivation?.message}
      >
        {(control) => <Textarea {...control} rows={5} {...fields.motivation} />}
      </FormField>
      <CheckboxField
        id="apply-acknowledge"
        label="Entiendo que esta vacante es ficticia y que mi información no se enviará."
        error={errors.acknowledge?.message}
        {...fields.acknowledge}
      />
      <div>
        <Button type="submit" size="lg">
          Validar postulación
        </Button>
      </div>
    </form>
  );
}
