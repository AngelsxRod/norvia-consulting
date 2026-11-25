import type { TeamMember } from "@/types/content";

/**
 * Retrato generativo: un monograma sobre la retícula de coordenadas de la marca.
 * Los integrantes son ficticios, por eso no se usan fotografías de personas reales.
 */
function Monogram({ member, index }: { member: TeamMember; index: number }) {
  const angle = (index * 47) % 360;
  return (
    <div className="relative flex aspect-[4/5] items-end overflow-hidden bg-petrol bg-grid-dark p-5 text-on-dark">
      <svg aria-hidden viewBox="0 0 200 250" className="absolute inset-0 size-full" fill="none">
        <circle cx="140" cy="90" r="70" stroke="var(--color-on-dark-line)" />
        <circle cx="140" cy="90" r="40" stroke="var(--color-on-dark-line)" />
        <g transform={`rotate(${angle} 140 90)`}>
          <path d="M140 20v140" stroke="var(--color-signal)" strokeWidth="1.5" />
          <path d="m140 22 6 14h-12l6-14Z" fill="var(--color-signal)" />
        </g>
      </svg>
      <span className="relative text-6xl font-semibold tracking-tighter">{member.initials}</span>
    </div>
  );
}

export function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <article className="flex flex-col gap-5">
      <Monogram member={member} index={index} />
      <div className="flex flex-col gap-2">
        <p className="eyebrow text-polar">{member.area}</p>
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="font-medium">{member.role}</p>
        <p className="text-sm text-slate">Especialidad: {member.specialty}</p>
        <p className="text-[0.95rem] leading-relaxed text-slate">{member.bio}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {member.focus.map((item) => (
            <li key={item} className="border border-line px-2 py-1 text-xs text-slate">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
