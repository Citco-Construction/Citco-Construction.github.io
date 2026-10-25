import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Inicio",
  description:
    "Contratista general familiar en Coral Gables, FL, especializado en ampliaciones residenciales, renovaciones mayores, cocinas y baños desde 1982.",
  path: "/",
  locale: "es",
});

export default function HomePageEs() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div>
              <span className="eyebrow">Coral Gables y el Gran Miami · Desde 1982</span>
              <h1>Ampliaciones y renovaciones, hechas como deben hacerse.</h1>
              <p className="lede">
                Citco Construction es un contratista general familiar que realiza ampliaciones
                residenciales, renovaciones mayores, cocinas y baños en todo Miami-Dade — con
                planificación cuidadosa, cronogramas honestos y un resultado construido para durar.
              </p>
            </div>
            <div className="hero-side">
              <p style={{ color: "var(--ink-dim)", fontSize: "15.5px" }}>
                Empresa familiar desde 1982, con licencia activa de Contratista General de Florida.
              </p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-solid">
                  Solicitar una Consulta
                </Link>
                <Link href="/projects" className="btn btn-line">
                  Ver Nuestro Trabajo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <div className="hero-photo">
            <img
              src="/images/hero-kitchen.jpg"
              alt="Remodelación de cocina de Citco Construction con vista al mar"
              loading="eager"
            />
          </div>
        </div>
        <div className="wrap">
          <div className="hero-stats">
            <div>
              <div className="num">40+</div>
              <div className="label">Años con Licencia</div>
            </div>
            <div>
              <div className="num">CGC</div>
              <div className="label">Contratista General Certificado</div>
            </div>
            <div>
              <div className="num">100%</div>
              <div className="label">Empresa Familiar</div>
            </div>
            <div>
              <div className="num">Miami</div>
              <div className="label">Enfoque en el Condado de Dade</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Qué Construimos</span>
            <h2>Ampliaciones, renovaciones, cocinas y baños residenciales.</h2>
            <p>
              Nuestra práctica se centra en la construcción residencial — ampliaciones, renovaciones
              mayores y remodelaciones completas de cocinas y baños — para propietarios que esperan
              el mismo rigor en su propia casa.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-primary">
              <span className="tagnum">01 — Enfoque Principal</span>
              <h3>Ampliaciones y Renovaciones Mayores</h3>
              <p>
                Entrega integral para propietarios que amplían o renuevan por completo su espacio —
                desde los permisos hasta la entrega final.
              </p>
              <ul>
                <li>Ampliaciones de Habitaciones y Segundo Piso</li>
                <li>Renovaciones Completas del Hogar</li>
                <li>Cambios Estructurales y de Distribución</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">02 — También Ofrecemos</span>
              <h3>Cocinas y Baños</h3>
              <p>Remodelaciones completas de los espacios más importantes de su hogar.</p>
              <ul>
                <li>Remodelación de Cocinas a Medida</li>
                <li>Baños Principales y de Invitados</li>
                <li>Gabinetes, Accesorios y Acabados</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">03 — Representante del Propietario</span>
              <h3>Preconstrucción y Consultoría</h3>
              <p>
                Presupuestos, cronogramas y asesoría de permisos antes de derribar la primera pared.
              </p>
              <ul>
                <li>Viabilidad y Estimados</li>
                <li>Gestión de Permisos</li>
                <li>Gestión de Proveedores y Subcontratistas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-2">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Cómo Trabajamos</span>
            <h2>Un proceso directo, bien ejecutado.</h2>
          </div>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="idx">01</div>
              <h4>Consulta y Alcance</h4>
              <p>
                Una conversación directa con la gerencia para entender el proyecto y fijar
                expectativas realistas.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">02</div>
              <h4>Planificación y Permisos</h4>
              <p>
                Estimados detallados y coordinación completa de permisos en Miami-Dade antes de
                movilizar un solo oficio.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">03</div>
              <h4>Construcción e Informes</h4>
              <p>
                Cronogramas disciplinados, socios verificados y reportes de avance regulares y
                transparentes.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">04</div>
              <h4>Entrega y Soporte</h4>
              <p>
                Una entrega final impecable, documentación de cierre y un equipo que sigue
                respondiendo el teléfono.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Trabajos Seleccionados</span>
            <h2>Un portafolio en construcción.</h2>
            <p>
              Este sitio de demostración muestra las categorías en las que trabaja Citco
              Construction. Las fotos reales se incorporan a medida que se trasladan desde el
              archivo de la empresa.
            </p>
          </div>
          <div className="projects-grid">
            <div className="proj">
              <div className="ph">
                <img
                  src="/images/placeholder/project-4x3.png"
                  alt="Marcador de posición — ampliación de habitación"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <span className="tag">Ampliación · Coral Gables</span>
                <h4>Ampliación de Segundo Piso</h4>
              </div>
            </div>
            <div className="proj">
              <div className="ph">
                <img
                  src="/images/placeholder/project-4x3.png"
                  alt="Marcador de posición — remodelación de cocina"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <span className="tag">Cocina · Coral Gables</span>
                <h4>Remodelación de Cocina a Medida</h4>
              </div>
            </div>
            <div className="proj">
              <div className="ph">
                <img
                  src="/images/placeholder/project-4x3.png"
                  alt="Marcador de posición — remodelación de baño"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <span className="tag">Baño · Miami</span>
                <h4>Remodelación de Baño Principal</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-sec">
        <blockquote>
          &ldquo;Citco trata cada proyecto como si fuera su propia casa.&rdquo;
        </blockquote>
        <div className="who">
          Cita de Cliente de Muestra — <b>Casos de Estudio Agregados al Cerrar Proyectos</b>
        </div>
      </section>
    </>
  );
}
