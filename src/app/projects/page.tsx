import BackBtn from '@/components/back-btn';
import BlurFade from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { DATA } from '@/data/resume';

export const metadata = {
  title: "Projects",
  description: "All projects I've worked on.",
};

const BLUR_FADE_DELAY = 0.04;

export default function page() {
  return (
    <section>
       <BackBtn/>
       <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">All Projects</h1>
       </BlurFade>
       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
    </section>
  )
}
