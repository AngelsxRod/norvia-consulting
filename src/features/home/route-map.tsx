/**
 * Visual del hero: una ruta trazada sobre una retícula de coordenadas que une
 * las etapas de una transformación. El trazo se dibuja con CSS (sin JavaScript)
 * y queda estático si el usuario prefiere movimiento reducido.
 */
const nodes = [
  { x: 70, y: 380, label: "Diagnóstico", coord: "01" },
  { x: 190, y: 270, label: "Estrategia", coord: "02" },
  { x: 330, y: 300, label: "Arquitectura", coord: "03" },
  { x: 420, y: 170, label: "Implementación", coord: "04" },
  { x: 520, y: 70, label: "Operación", coord: "05" },
];

const route = "M70 380 C120 330 140 280 190 270 S300 320 330 300 S390 200 420 170 S490 90 520 70";

export function RouteMap() {
  return (
    <svg
      viewBox="0 0 600 460"
      role="img"
      aria-labelledby="route-map-title"
      className="h-auto w-full overflow-visible"
      fill="none"
    >
      <title id="route-map-title">
        Ruta de transformación de Norvia: diagnóstico, estrategia, arquitectura, implementación y
        operación
      </title>
      <defs>
        <pattern id="route-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="rgb(238 242 238 / 0.08)" />
        </pattern>
      </defs>
      <rect width="600" height="460" fill="url(#route-grid)" />
      <g stroke="rgb(238 242 238 / 0.18)" strokeDasharray="2 6">
        <path d="M0 420H600M40 0V460" />
      </g>
      <g className="font-mono" fill="rgb(169 187 185)" fontSize="10">
        <text x="46" y="446">
          0°
        </text>
        <text x="566" y="446">
          E
        </text>
        <text x="48" y="14">
          N
        </text>
      </g>
      <path d={route} stroke="rgb(238 242 238 / 0.14)" strokeWidth="10" strokeLinecap="round" />
      <path
        d={route}
        stroke="var(--color-signal)"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
        className="route-draw"
      />
      {nodes.map((node, index) => (
        <g
          key={node.label}
          className="route-node"
          style={{ animationDelay: `${0.35 + index * 0.28}s` }}
        >
          <circle
            cx={node.x}
            cy={node.y}
            r="16"
            fill="var(--color-petrol)"
            stroke="rgb(238 242 238 / 0.35)"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="5"
            fill={index === nodes.length - 1 ? "var(--color-signal)" : "#eef2ee"}
          />
          <text
            x={node.x + (index === nodes.length - 1 ? -24 : 24)}
            y={node.y + 4}
            textAnchor={index === nodes.length - 1 ? "end" : "start"}
            fill="#eef2ee"
            fontSize="14"
            fontWeight="500"
          >
            {node.label}
          </text>
          <text
            x={node.x + (index === nodes.length - 1 ? -24 : 24)}
            y={node.y + 20}
            textAnchor={index === nodes.length - 1 ? "end" : "start"}
            fill="rgb(169 187 185)"
            fontSize="10"
            className="font-mono"
          >
            {node.coord}
          </text>
        </g>
      ))}
      <path
        d="M520 30 529 46h-18l9-16Z"
        fill="var(--color-signal)"
        className="route-node"
        style={{ animationDelay: "1.8s" }}
      />
    </svg>
  );
}
