
import projectsData from '@/data/projects.json'
import Project from '@/components/project/Project';
import Card from '@/components/card/Card';
import styles from '@/styles/ProjectDetails.module.scss';
import ProjectStack from '@/components/projectStack/ProjectStack';
import { notFound } from 'next/navigation';

const ProjectDetails = async ({ params: paramsPromise }) => {
    const params = await paramsPromise;  
    const { id } = params;

    const project = projectsData.find((project) => project.id === parseInt(id));

    if (!project) {
        return notFound();  
    }

    return (
        <div className="wrapper">
            <Card
                title={project.name}
                description={project.description}
                image={project.image}
            />
            <section className={styles.project}>
                <div className={styles.projectContainer}>
                    <div className={styles.projectCol2}>
                        <ProjectStack stack={project.stack} />
                        <a href={project.liveLink} className={styles.liveLink}>
                            Visit Site
                        </a>
                    </div>
                    <div className={styles.projectCol1}>
                        <Project project={project} />
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default ProjectDetails;