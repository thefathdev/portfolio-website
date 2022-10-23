import ProjectCard, {ProjectProps} from './projectCard';
import TextLink from './textLink';

export type ProjectPropsWithId = ProjectProps & {
  id: number;
};

export default function Projects({projects}: {projects: ProjectPropsWithId[]}) {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center  max-w-5xl mx-auto px-8 md:px-20 lg:px-24 xl:px-8 py-20"
    >
      <div className="flex gap-2 items-center mb-2 sm:mb-4">
        <div className="w-14 h-[2px] bg-gray-500 md:w-16"></div>
        <h2 className="text-gray-900 font-bold text-2xl sm:text-4xl lg:text-5xl">
          Project I've Built
        </h2>
      </div>
      <div className="mb-6 sm:mb-8 text-base sm:text-xl">
        <TextLink href="https://github.com/whatTheFath">View my repositories</TextLink>
      </div>
      <div className="grid grid-cols-1 min-[486px]:grid-cols-2 gap-8 md:grid-cols-3">
        {projects &&
          projects.length > 0 &&
          projects.map(project => {
            return <ProjectCard {...project} key={project.id} />;
          })}
      </div>
    </div>
  );
}
