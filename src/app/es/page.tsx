import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contratista General en Coral Gables y Miami-Dade",
  description:
    "Contratista general familiar que sirve a Coral Gables y Miami-Dade, FL, especializado en ampliaciones residenciales, renovaciones mayores, cocinas y baños desde 1982.",
  path: "/",
  locale: "es",
});

// Los tres remodelados de cocina de Chawla/Burnstein/Kern son las primeras entradas en projects.ts.
const featuredProjects = projects.slice(0, 3);

export default function HomePageEs() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <div className="hero-photo-layer">
            <Image
              src="/images/hero-kitchen.jpg"
              alt="Remodelación de cocina de Citco Construction con vista al mar"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-scrim" />
          </div>
          <div className="hero-overlay wrap">
            <span className="eyebrow">
              Coral Gables<span className="eyebrow-extra"> y el Gran Miami</span> · Desde 1982
            </span>
            <h1>Ampliaciones y renovaciones, hechas como deben hacerse.</h1>
            <p className="lede">
              Citco Construction es un contratista general familiar que realiza ampliaciones
              residenciales, renovaciones mayores, cocinas y baños en todo Miami-Dade, con
              planificación cuidadosa y cronogramas honestos.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-solid">
                Solicitar una Consulta
              </Link>
              <Link href="/projects#gallery" className="btn btn-line">
                Ver Nuestro Trabajo
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="wrap">
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
              <div className="label">Atendiendo el Condado de Dade</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Trabajos Seleccionados</span>
            <h2>Destacados de Citco</h2>
            <p>Algunas remodelaciones de cocina terminadas en todo Miami-Dade.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Link href={`/es/projects/${project.slug}`} className="proj" key={project.slug}>
                <div className="ph">
                  <Image
                    src={`/images/projects/${project.slug}/${project.images[0]}`}
                    alt={project.title.es}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
                  />
                </div>
                <div className="info">
                  <span className="tag">{project.category.es}</span>
                  <h4>{project.title.es}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="quote-sec">
        <blockquote>
          &ldquo;Citco trata cada proyecto como si fuera su propia casa.&rdquo;
        </blockquote>
        <div className="who">
          Cita de cliente de muestra. <b>Casos de estudio agregados al cerrar proyectos.</b>
        </div>
      </section> */}
    </>
  );
}
