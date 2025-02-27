import BlurFade from '@/components/magicui/blur-fade';
import ProjectDetails from '@/components/project-details';
import { DATA } from '@/data/resume';
import React from 'react'

// export async function generateStaticParams() {
//   const posts = await getBlogPosts();
//   return posts.map((post) => ({ slug: post.slug }));
// }




const BLUR_FADE_DELAY = 0.1;

export default function page({params}: {params: {slug: string}}) {
  
  const project = DATA.projects.find((project) => project.id === params.slug) 
  console.log(params.slug)
  console.log(project)
 
  return (
    <section id="details">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <ProjectDetails project={project} />
      </BlurFade>

    </section>
  )
}
